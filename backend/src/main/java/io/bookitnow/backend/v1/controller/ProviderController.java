package io.bookitnow.backend.v1.controller;

import io.bookitnow.backend.v1.DTOs.requests.ProviderRequest;
import io.bookitnow.backend.v1.service.ProviderService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


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
@RestController
@RequestMapping("/api/v1/providers")
public class ProviderController {

    private final ProviderService providerService;


    public ProviderController(ProviderService providerService) {
        this.providerService = providerService;
    }

    /**
     * Retrieves a list of all providers.
     *
     * @return a ResponseEntity containing a list of providers
     */
    @GetMapping
    public ResponseEntity<Object> getProviders() {
        return ResponseEntity.ok(providerService.getAllProviders());
    }

    /**
     * Retrieves details of a provider by ID.
     *
     * @param id the ID of the provider to retrieve, must be a positive number
     * @return a ResponseEntity containing the provider details
     */
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
    @GetMapping("/{id}/services")
    public ResponseEntity<Object> getProviderServices(@NotNull @Min(1) @PathVariable Long id) {
        return ResponseEntity.ok(providerService.getProviderById(id));
    }

    /**
     * Creates a new provider.
     *
     * @param providerRequest the details of the provider to create, validated for required fields
     * @return a ResponseEntity containing the created provider's details
     */
    @PostMapping
    public ResponseEntity<Object> createProvider(@Valid @RequestBody ProviderRequest providerRequest) {
        return ResponseEntity.ok(providerService.createProvider(providerRequest));
    }

    /**
     * Updates an existing provider by ID.
     *
     * @param id the ID of the provider to update, must be a positive number
     * @param providerRequest the updated details for the provider, validated for required fields
     * @return a ResponseEntity containing the updated provider's details
     */
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
    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteProvider(@NotNull @Min(1) @PathVariable Long id) {
        providerService.deleteProvider(id);
        return ResponseEntity.ok().build();
    }

}
