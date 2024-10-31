package io.bookitnow.backend.v1.controller;

import io.bookitnow.backend.v1.service.ProviderService;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/providers")
public class ProviderController {

    private final ProviderService providerService;


    public ProviderController(ProviderService providerService) {
        this.providerService = providerService;
    }

    @GetMapping
    public ResponseEntity<Object> getProviders() {
        return ResponseEntity.ok(providerService.getAllProviders());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getProviderById(@NotNull @Min(1) @PathVariable Long id) {
        return ResponseEntity.ok(providerService.getProviderById(id));
    }

    @GetMapping("/{id}/services")
    public ResponseEntity<Object> getProviderServices(@NotNull @Min(1) @PathVariable Long id) {
        return ResponseEntity.ok(providerService.getProviderServices(id));
    }

}
