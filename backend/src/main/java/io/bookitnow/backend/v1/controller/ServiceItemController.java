package io.bookitnow.backend.v1.controller;


import io.bookitnow.backend.v1.DTOs.requests.ServiceItemRequest;
import io.bookitnow.backend.v1.DTOs.responses.ServiceItemResponse;
import io.bookitnow.backend.v1.service.ServiceItemService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import jakarta.validation.constraints.NotNull;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

/**
 * Controller for managing service items within the application.
 * Provides endpoints for CRUD operations and querying service items by ID and provider ID.
 *
 * @version 1.0
 * @since 1.0
 * @see ServiceItemService
 * @see ServiceItemRequest
 * @see ServiceItemResponse
 * @see ResponseEntity
 *
 */
@RestController
@RequestMapping("/api/v1/service-items")
@CrossOrigin
public class ServiceItemController {

    private final ServiceItemService serviceItemService;


    public ServiceItemController(ServiceItemService serviceItemService) {
        this.serviceItemService = serviceItemService;
    }

    /**
     * Retrieves all service items.
     *
     * @return a ResponseEntity containing a list of all service items
     */
    @Operation(summary = "Get all service items", description = "Retrieves all service items.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully retrieved all service items.")
    })
    @GetMapping
    public ResponseEntity<Object>  getAllServiceItems() {
        return ResponseEntity.ok(serviceItemService.getAllServiceItems());
    }

    /**
     * Retrieves a service item by its ID.
     *
     * @param id the ID of the service item to retrieve
     * @return a ResponseEntity containing the service item with the specified ID
     */
    @ApiResponse(responseCode = "200", description = "Successfully retrieved the service item.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully retrieved the service item."),
            @ApiResponse(responseCode = "400", description = "Invalid service item ID."),
            @ApiResponse(responseCode = "404", description = "Service item not found."),
    })
    @GetMapping("/{id}")
    public ResponseEntity<Object> getServiceItemById(@NotNull @PathVariable Long id) {
        return ResponseEntity.ok(serviceItemService.getServiceItemById(id));
    }

    @GetMapping("/{id}/timeslots")
    public ResponseEntity<Object> getServiceItemTimeslots(
            @NotNull @PathVariable Long id,
            @RequestParam(required = false) String date
    ) {
        System.err.println("ServiceItemController.getServiceItemTimeslots");
        // convert string date to LocalDate
        LocalDate localDate;
        if (date == null) {
            localDate = LocalDate.now();
        } else {
            localDate = LocalDate.parse(date);
        }
        return ResponseEntity.ok(serviceItemService.getAvailableTimes(id, localDate));
    }

    /**
     * Retrieves all service items associated with a provider.
     *
     * @param providerId the ID of the provider whose service items to retrieve
     * @return a ResponseEntity containing a list of all service items associated with the specified provider
     */
    @Operation(summary = "Get service items by provider ID", description = "Retrieves all service items associated with a provider.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully retrieved all service items associated with the provider."),
            @ApiResponse(responseCode = "400", description = "Invalid provider ID.")
    })
    @GetMapping("/provider/{providerId}")
    public ResponseEntity<Object> getServiceItemsByProviderId(@NotNull @PathVariable Long providerId) {
        return ResponseEntity.ok(serviceItemService.getServiceItemsByProviderId(providerId));
    }

    /**
     * Creates a new service item.
     *
     * @param serviceItemRequest the details of the new service item to create
     * @return a ResponseEntity containing the created service item
     */
    @Operation(summary = "Create a service item", description = "Creates a new service item.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully created the service item."),
            @ApiResponse(responseCode = "400", description = "Invalid service item details.")
    })
    @PostMapping
    public ResponseEntity<Object> createServiceItem(@RequestBody @NotNull ServiceItemRequest serviceItemRequest) {
        return ResponseEntity.ok(serviceItemService.createServiceItem(serviceItemRequest));
    }

    /**
     * Updates an existing service item by its ID.
     *
     * @param id the ID of the service item to update
     * @param serviceItemRequest the updated details of the service item
     * @return a ResponseEntity containing the updated service item
     * @throws Exception if the service item is not found or there are validation issues
     */
    @Operation(summary = "Update a service item", description = "Updates an existing service item.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully updated the service item."),
            @ApiResponse(responseCode = "400", description = "Invalid service item ID or details."),
            @ApiResponse(responseCode = "404", description = "Service item not found."),
            @ApiResponse(responseCode = "500", description = "Failed to update service item.")
    })
    @PutMapping("/{id}")
    public ResponseEntity<Object> updateServiceItem(@NotNull @PathVariable Long id, @RequestBody @NotNull ServiceItemRequest serviceItemRequest) throws Exception {
        return ResponseEntity.ok(serviceItemService.updateServiceItem(id, serviceItemRequest));
    }

    /**
     * Deletes a service item by its ID.
     *
     * @param id the ID of the service item to delete
     * @return a ResponseEntity with no content
     * @throws Exception if the service item is not found
     */
    @Operation(summary = "Delete a service item", description = "Deletes a service item.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "Successfully deleted the service item."),
            @ApiResponse(responseCode = "400", description = "Invalid service item ID."),
            @ApiResponse(responseCode = "500", description = "Failed to delete service item.")
    })
    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteServiceItem(@NotNull @PathVariable Long id) throws Exception {
        serviceItemService.deleteServiceItem(id);
        return ResponseEntity.status(204).build();
    }


}
