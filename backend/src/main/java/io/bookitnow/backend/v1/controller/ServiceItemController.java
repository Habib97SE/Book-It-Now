package io.bookitnow.backend.v1.controller;


import io.bookitnow.backend.v1.DTOs.requests.ServiceItemRequest;
import io.bookitnow.backend.v1.service.ServiceItemService;
import jakarta.validation.constraints.NotNull;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/service-items")
public class ServiceItemController {

    private final ServiceItemService serviceItemService;

    public ServiceItemController(ServiceItemService serviceItemService) {
        this.serviceItemService = serviceItemService;
    }

    @GetMapping
    public ResponseEntity<Object>  getAllServiceItems() {
        return ResponseEntity.ok(serviceItemService.getAllServiceItems());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getServiceItemById(@NotNull @PathVariable Long id) {
        return ResponseEntity.ok(serviceItemService.getServiceItemById(id));
    }

    @GetMapping("/provider/{providerId}")
    public ResponseEntity<Object> getServiceItemsByProviderId(@NotNull @PathVariable Long providerId) {
        return ResponseEntity.ok(serviceItemService.getServiceItemsByProviderId(providerId));
    }

    @PostMapping
    public ResponseEntity<Object> createServiceItem(@RequestBody @NotNull ServiceItemRequest serviceItemRequest) {
        return ResponseEntity.ok(serviceItemService.createServiceItem(serviceItemRequest));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateServiceItem(@NotNull @PathVariable Long id, @RequestBody @NotNull ServiceItemRequest serviceItemRequest) throws Exception {
        return ResponseEntity.ok(serviceItemService.updateServiceItem(id, serviceItemRequest));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteServiceItem(@NotNull @PathVariable Long id) throws Exception {
        serviceItemService.deleteServiceItem(id);
        return ResponseEntity.status(204).build();
    }


}
