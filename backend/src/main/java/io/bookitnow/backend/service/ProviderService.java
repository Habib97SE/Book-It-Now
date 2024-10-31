package io.bookitnow.backend.service;

import io.bookitnow.backend.DTOs.requests.ProviderRequest;
import io.bookitnow.backend.DTOs.responses.ProviderResponse;
import io.bookitnow.backend.entity.Provider;
import io.bookitnow.backend.repository.ProviderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;


/**
 * Provider service: Handles provider operations and business logic
 *
 * @see Provider
 * @see ProviderRepository
 * @see ProviderRequest
 * @see ProviderResponse
 *
 * @version 1.0
 *
 * @since 1.0
 */
@Service
public class ProviderService {
    private final ProviderRepository repo;

    public ProviderService(@Autowired ProviderRepository repo) {
        this.repo = repo;
    }

    public Provider mapToProvider(ProviderRequest providerRequest) {
        return Provider.builder()
                .name(providerRequest.getName())
                .email(providerRequest.getEmail())
                .phone(providerRequest.getPhone())
                .address(providerRequest.getAddress())
                .city(providerRequest.getCity())
                .state(providerRequest.getState())
                .country(providerRequest.getCountry())
                .postalCode(providerRequest.getPostalCode())
                .description(providerRequest.getDescription())
                .logo(providerRequest.getLogo())
                .cover(providerRequest.getCover())
                .website(providerRequest.getWebsite())
                .facebook(providerRequest.getFacebook())
                .instagram(providerRequest.getInstagram())
                .build();
    }

    public ProviderResponse mapToProviderResponse(Provider provider) {
        return ProviderResponse.builder()
                .id(provider.getId())
                .name(provider.getName())
                .email(provider.getEmail())
                .phone(provider.getPhone())
                .address(provider.getAddress())
                .city(provider.getCity())
                .state(provider.getState())
                .country(provider.getCountry())
                .postalCode(provider.getPostalCode())
                .description(provider.getDescription())
                .logo(provider.getLogo())
                .cover(provider.getCover())
                .website(provider.getWebsite())
                .facebook(provider.getFacebook())
                .instagram(provider.getInstagram())
                .build();
    }

    public List<Provider> getAllProviders() {
        return repo.findAll();
    }

    public ProviderResponse getProviderById(Long id) {
        if (id < 1) { throw new IllegalArgumentException("Invalid provider id"); }
        try {
            Provider provider = repo.findById(id).orElseThrow(() -> new IllegalArgumentException("Provider not found"));
            return new ProviderResponse(provider);
        } catch (IllegalArgumentException e) {
            throw e;
        } catch (Exception e) {
            throw new RuntimeException("Error fetching provider");
        }
    }

    public ProviderResponse createProvider(ProviderRequest providerRequest) {
        if (providerRequest == null) { throw new IllegalArgumentException("Invalid provider request"); }

        try {
            Provider provider = mapToProvider(providerRequest);
            provider = repo.save(provider);
            return new ProviderResponse(provider);
        } catch (IllegalArgumentException e) {
            throw e;
        } catch (Exception e) {
            throw new RuntimeException("Error creating provider");
        }
    }

    public ProviderResponse updateProvider(Long id, ProviderRequest providerRequest) {
        if (id < 1) { throw new IllegalArgumentException("Invalid provider id"); }
        if (providerRequest == null) { throw new IllegalArgumentException("Invalid provider request"); }

        try {
            Provider provider = repo.findById(id).orElseThrow(() -> new NoSuchElementException("Provider not found"));
            
            provider = repo.save(provider);
            return new ProviderResponse(provider);
        } catch (IllegalArgumentException e) {
            throw e;
        } catch (Exception e) {
            throw new RuntimeException("Error updating provider");
        }
    }
}
