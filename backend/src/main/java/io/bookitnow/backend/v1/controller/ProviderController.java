package io.bookitnow.backend.v1.controller;

import io.bookitnow.backend.v1.DTOs.requests.ProviderRequest;
import io.bookitnow.backend.v1.DTOs.responses.ProviderResponse;
import io.bookitnow.backend.v1.service.MailService;
import io.bookitnow.backend.v1.service.ProviderService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;


/**
 * REST controller for managing providers in the application.
 * This controller provides endpoints to perform CRUD operations
 * on provider resources, as well as retrieve services associated
 * with a specific provider.
 *
 * <p><strong>Base URL: /api/v1/providers</strong></p>
 *
 * <h2>Endpoints:</h2>
 *  <ul>
 *  <li> GET /api/v1/providers                : Retrieves a list of all providers.</li>
 *  <li> GET /api/v1/providers/{id}           : Retrieves details of a provider by ID.</li>
 *  <li> GET /api/v1/providers/{id}/services  : Retrieves services associated with a specific provider by ID.</li>
 *  <li> POST /api/v1/providers               : Creates a new provider.</li>
 *  <li> PUT /api/v1/providers/{id}           : Updates an existing provider by ID.</li>
 *  <li> DELETE /api/v1/providers/{id}        : Deletes a provider by ID.</li>
 * </ul>
 */
@Tag(
        name = "Providers",
        description = "Endpoints for managing providers")
@RestController
@RequestMapping("/api/v1/providers")
public class ProviderController {

    private final ProviderService providerService;

    private final MailService mailService;


    public ProviderController(ProviderService providerService,
                              MailService mailService) {
        this.providerService = providerService;
        this.mailService = mailService;
    }

    /**
     * Retrieves a paginated, sorted, and filtered list of providers.
     *
     * @param page     the page number to retrieve, defaults to 0 (first page)
     * @param pageSize the number of providers per page, defaults to 10
     * @param sort     the sorting criteria (e.g., "name,asc" or "city,desc")
     * @param category the category to filter providers by (optional)
     * @param city     the city to filter providers by (optional)
     * @param name     the name to filter providers by (optional)
     * @param address  the address to filter providers by (optional)
     * @return a ResponseEntity containing the paginated, sorted, and filtered list of providers
     */
    @Operation(summary = "Get providers with pagination, sorting, and filtering",
            description = "Retrieve providers with pagination, sorting, and optional filters")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Providers retrieved successfully"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    @GetMapping
    public ResponseEntity<Object> getAllProviders(
            @RequestParam(defaultValue = "0") @Min(0) int page,
            @RequestParam(defaultValue = "10") @Min(1) @Max(50) int pageSize,
            @RequestParam(defaultValue = "name,asc") String sort,
            @RequestParam(required = false) @Size(max = 50) String category,
            @RequestParam(required = false) @Size(max = 50) String city,
            @RequestParam(required = false) @Size(max = 50) String name,
            @RequestParam(required = false) @Size(max = 100) String address) {

        return ResponseEntity.ok(providerService.getAllProviders(page, pageSize, sort, category, city, name, address));
    }


    /**
     * Retrieves details of a provider by ID.
     *
     * @param id the ID of the provider to retrieve, must be a positive number
     * @return a ResponseEntity containing the provider details
     */
    @Operation(summary = "Get provider by ID", description = "Get provider details by ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Provider details"),
            @ApiResponse(responseCode = "400", description = "Invalid provider ID"),
            @ApiResponse(responseCode = "404", description = "Provider not found"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    @GetMapping("/{id}")
    public ResponseEntity<Object> getProviderById(@NotNull @Min(value = 1) @PathVariable Long id) {
        return ResponseEntity.ok(providerService.getProviderById(id));
    }

    /**
     * Retrieves services associated with a specific provider by ID.
     *
     * @param id the ID of the provider whose services are to be retrieved, must be a positive number
     * @return a ResponseEntity containing a list of services for the specified provider
     */
    @Operation(summary = "Get services by provider ID", description = "Get services associated with a specific provider by ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "List of services"),
            @ApiResponse(responseCode = "400", description = "Invalid provider ID"),
            @ApiResponse(responseCode = "404", description = "Provider not found"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    @GetMapping("/{id}/services")
    public ResponseEntity<Object> getProviderServices(@NotNull @Min(1) @PathVariable Long id) {
        return ResponseEntity.ok(providerService.getServiceItemsByProviderId(id));
    }

    /**
     * Creates a new provider.
     *
     * @param providerRequest the details of the provider to create, validated for required fields
     * @return a ResponseEntity containing the created provider's details
     */
    @Operation(summary = "Create a new provider", description = "Create a new provider")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Provider created"),
            @ApiResponse(responseCode = "400", description = "Invalid provider request (e.g. missing required fields, duplicate email)"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    @PostMapping
    public ResponseEntity<Object> createProvider(@Valid @RequestBody ProviderRequest providerRequest) {
        ProviderResponse providerResponse = providerService.createProvider(providerRequest);
        URI location = URI.create("/api/v1/providers/" + providerResponse.getId());
        return ResponseEntity.created(location).body(providerResponse);
    }

    /**
     * Updates an existing provider by ID.
     *
     * @param id              the ID of the provider to update, must be a positive number
     * @param providerRequest the updated details for the provider, validated for required fields
     * @return a ResponseEntity containing the updated provider's details
     */
    @Operation(summary = "Update provider by ID", description = "Update provider details by ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Provider updated"),
            @ApiResponse(responseCode = "400", description = "Invalid provider ID or request"),
            @ApiResponse(responseCode = "404", description = "Provider not found"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    @PutMapping("/{id}")
    public ResponseEntity<Object> updateProvider(@NotNull @Min(1) @PathVariable Long id,
                                                 @Valid @RequestBody ProviderRequest providerRequest) {
        return ResponseEntity.ok(providerService.updateProvider(id, providerRequest));
    }

    /**
     * Deletes a provider by ID.
     *
     * @param id the ID of the provider to delete, must be a positive number
     * @return a ResponseEntity with a status indicating the result of the deletion
     */
    @Operation(summary = "Delete provider by ID", description = "Delete provider by ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Provider deleted"),
            @ApiResponse(responseCode = "400", description = "Invalid provider ID"),
            @ApiResponse(responseCode = "404", description = "Provider not found"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteProvider(@NotNull @Min(1) @PathVariable Long id) {
        providerService.deleteProvider(id);
        return ResponseEntity.ok().build();
    }

}
