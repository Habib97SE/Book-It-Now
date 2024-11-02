package io.bookitnow.backend.v1.service;

import io.bookitnow.backend.v1.DTOs.requests.ProviderRequest;
import io.bookitnow.backend.v1.DTOs.responses.ProviderResponse;
import io.bookitnow.backend.v1.entity.Provider;
import io.bookitnow.backend.v1.repository.ProviderRepository;
import io.bookitnow.backend.v1.repository.ServiceItemRepository;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;


/**
 * Provider service: Handles provider operations and business logic
 *
 * @version 1.0
 * @see Provider
 * @see ProviderRepository
 * @see ProviderRequest
 * @see ProviderResponse
 * @since 1.0
 */
@Service
public class ProviderService {
    private final ProviderRepository repo;
    private final ServiceItemRepository serviceRepository;

    private final Logger logger = LoggerFactory.getLogger("mycustomlogger");

    public ProviderService(@Autowired ProviderRepository repo,
                           @Autowired ServiceItemRepository serviceItemRepository) {
        this.repo = repo;
        this.serviceRepository = serviceItemRepository;
    }

    /**
     * Maps a provider request to a provider entity
     *
     * @param providerRequest Provider request
     * @return Provider entity
     */
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

    /**
     * Maps a provider entity to a provider response
     *
     * @param provider Provider entity
     * @return Provider response
     */
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

    /**
     * Fetches all providers
     *
     * @return List of providers
     */
    public List<ProviderResponse> getAllProviders() {
        return repo.findAll().stream().map(this::mapToProviderResponse).toList();
    }

    /**
     * Fetches a provider by id
     *
     * @param id Provider id
     * @return Provider response
     * @throws IllegalArgumentException If provider id is invalid or provider not found
     * @throws NoSuchElementException   If provider not found
     * @throws Exception                If an error occurs while fetching provider
     */
    public ProviderResponse getProviderById(@NotNull Long id) {
        if (id < 1) {
            throw new IllegalArgumentException("Invalid provider id");
        }
        try {
            Provider provider = repo.findById(id).orElseThrow(()    -> new NoSuchElementException("Provider not found"));
            return new ProviderResponse(provider);
        } catch (IllegalArgumentException e) {
            throw e;
        } catch (Exception e) {
            throw new RuntimeException("Error fetching provider");
        }
    }

    /**
     * Creates a provider
     *
     * @param providerRequest Provider request
     * @return Provider response
     * @throws IllegalArgumentException If provider request is invalid
     * @throws RuntimeException         If an error occurs while creating provider
     */
    public ProviderResponse createProvider(@Valid ProviderRequest providerRequest) {
        if (providerRequest == null) {
            throw new IllegalArgumentException("Invalid provider request");
        }

        if (repo.findByEmail(providerRequest.getEmail()) != null) {
            logger.info(providerRequest.getEmail() + " already exists");
            throw new IllegalArgumentException("Email already exists");
        }

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

    public ProviderResponse updateProvider(@NotNull Long id, @Valid ProviderRequest providerRequest) {
        if (id < 1) {
            throw new IllegalArgumentException("Invalid provider id");
        }
        if (providerRequest == null) {
            throw new IllegalArgumentException("Invalid provider request");
        }

        try {
            Provider provider = repo.findById(id).orElseThrow(() -> new NoSuchElementException("Provider not found"));
            provider.setName(providerRequest.getName());
            provider.setEmail(providerRequest.getEmail());
            provider.setPhone(providerRequest.getPhone());
            provider.setAddress(providerRequest.getAddress());
            provider.setCity(providerRequest.getCity());
            provider.setState(providerRequest.getState());
            provider.setCountry(providerRequest.getCountry());
            provider.setPostalCode(providerRequest.getPostalCode());
            provider.setDescription(providerRequest.getDescription());
            provider.setLogo(providerRequest.getLogo());
            provider.setCover(providerRequest.getCover());
            provider.setWebsite(providerRequest.getWebsite());
            provider.setFacebook(providerRequest.getFacebook());
            provider.setInstagram(providerRequest.getInstagram());
            provider = repo.save(provider);
            return new ProviderResponse(provider);
        } catch (IllegalArgumentException e) {
            throw e;
        } catch (Exception e) {
            throw new RuntimeException("Error updating provider");
        }
    }

    /**
     * Deletes a provider by id if it exists
     *
     * @param id Provider id
     * @throws IllegalArgumentException If provider id is invalid
     * @throws NoSuchElementException   If provider not found
     * @throws Exception                If an error occurs while deleting provider
     */
    public void deleteProvider(Long id) {
        if (id < 1) {
            throw new IllegalArgumentException("Invalid provider id");
        }

        try {
            Provider provider = repo.findById(id).orElseThrow(() -> new NoSuchElementException("Provider not found"));
            repo.delete(provider);
        } catch (IllegalArgumentException e) {
            throw e;
        } catch (Exception e) {
            throw new RuntimeException("Error deleting provider");
        }
    }

}
