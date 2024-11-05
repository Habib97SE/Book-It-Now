package io.bookitnow.backend.v1.service;

import io.bookitnow.backend.v1.DTOs.requests.ProviderRequest;
import io.bookitnow.backend.v1.DTOs.responses.ProviderResponse;
import io.bookitnow.backend.v1.entity.Provider;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class ProviderServiceTest {

    @Autowired
    private ProviderService providerService;

    private Provider createProvider(){
        return Provider.builder()
                .name("Provider Name")
                .email("admin@admin.com")
                .phone("1234567890")
                .address("Address")
                .city("City")
                .state("State")
                .country("Country")
                .postalCode("123456")
                .website("http://www.example.com")
                .description("Description")
                .logo("http://www.example.com/logo.png")
                .cover("http://www.example.com/cover.png")
                .facebook("http://www.facebook.com")
                .instagram("http://www.instagram.com")
                .build();

    }

    private ProviderRequest createProviderRequest(){
        return ProviderRequest.builder()
                .name("Provider Name")
                .email("admin@admin.com")
                .phone("1234567890")
                .address("Address")
                .city("City")
                .state("State")
                .country("Country")
                .postalCode("123456")
                .website("http://www.example.com")
                .description("Description")
                .logo("http://www.example.com/logo.png")
                .cover("http://www.example.com/cover.png")
                .facebook("http://www.facebook.com")
                .instagram("http://www.instagram.com")
                .build();
    }

    private ProviderResponse createProviderResponse() {
        return ProviderResponse.builder()
                .id(1L)
                .name("Provider Name")
                .email("admin@admin.com")
                .phone("1234567890")
                .address("Address")
                .city("City")
                .state("State")
                .country("Country")
                .postalCode("123456")
                .website("http://www.example.com")
                .description("Description")
                .logo("http://www.example.com/logo.png")
                .cover("http://www.example.com/cover.png")
                .facebook("http://www.facebook.com")
                .instagram("http://www.instagram.com")
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .build();
    }

    @Test
    void mapToProvider() {
        Provider provider = createProvider();
        ProviderRequest providerRequest = createProviderRequest();
        Provider mappedProvider = providerService.mapToProvider(providerRequest);
        assertEquals(provider.getName(), mappedProvider.getName());
    }

    @Test
    void mapToProviderResponse() {
    }

    @Test
    void getAllProviders() {
    }

    @Test
    void getProviderById() {
    }

    @Test
    void getServiceItemsByProviderId() {
    }

    @Test
    void testCreateProvider() {
    }

    @Test
    void updateProvider() {
    }

    @Test
    void deleteProvider() {
    }
}