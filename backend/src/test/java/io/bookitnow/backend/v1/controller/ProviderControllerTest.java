package io.bookitnow.backend.v1.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.bookitnow.backend.v1.DTOs.requests.ProviderRequest;
import io.bookitnow.backend.v1.DTOs.responses.ProviderResponse;
import io.bookitnow.backend.v1.entity.Provider;
import io.bookitnow.backend.v1.service.ProviderService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(ProviderController.class)
public class ProviderControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ProviderService providerService;

    @Autowired
    private ObjectMapper objectMapper;

    private Logger logger = LoggerFactory.getLogger("mytestlogger");

    private Provider createDummyProvider() {


        Provider provider = new Provider();
        provider.setId(1L);
        provider.setName("Test Provider");
        provider.setAddress("123 Test Street");
        provider.setCity("Test City");
        provider.setState("Test State");
        provider.setCountry("Test Country");
        provider.setPostalCode("12345");
        provider.setEmail("admin@admin.com");
        provider.setPhone("123456789");
        provider.setDescription("Test Description");
        provider.setLogo("http://test.com/logo.png");
        provider.setCover("http://test.com/cover.png");
        provider.setWebsite("http://test.com");
        provider.setFacebook("http://facebook.com");
        provider.setInstagram("http://instagram.com");
        return provider;
    }

    private ProviderRequest createDummyProviderRequest() {
        ProviderRequest providerRequest = new ProviderRequest();
        providerRequest.setName("Test Provider");
        providerRequest.setAddress("123 Test Street");
        providerRequest.setCity("Test City");
        providerRequest.setState("Test State");
        providerRequest.setCountry("Test Country");
        providerRequest.setPostalCode("12345");
        providerRequest.setEmail("admin@admin1.com");
        providerRequest.setPhone("123456789");
        providerRequest.setDescription("Test Description");
        providerRequest.setLogo("http://test.com/logo.png");
        providerRequest.setCover("http://test.com/cover.png");
        providerRequest.setWebsite("http://test.com");
        providerRequest.setFacebook("http://facebook.com");
        providerRequest.setInstagram("http://instagram.com");
        return providerRequest;
    }

    private ProviderResponse createDummyProviderResponse() {
        return new ProviderResponse(createDummyProvider());
    }

    private ProviderRequest createDumyProviderRequest() {
        ProviderRequest providerRequest = new ProviderRequest();
        providerRequest.setName("Test Provider");
        providerRequest.setAddress("123 Test Street");
        providerRequest.setCity("Test City");
        providerRequest.setState("Test State");
        providerRequest.setCountry("Test Country");
        providerRequest.setPostalCode("12345");
        providerRequest.setEmail("admin@admin.com");
        providerRequest.setPhone("123456789");
        providerRequest.setDescription("Test Description");
        providerRequest.setLogo("http://test.com/logo.png");
        providerRequest.setCover("http://test.com/cover.png");
        providerRequest.setWebsite("http://test.com");
        providerRequest.setFacebook("http://facebook.com");
        providerRequest.setInstagram("http://instagram.com");

        return providerRequest;
    }

    @BeforeEach
    public void setUp() {

        logger.info("Setting up test data");

        ProviderRequest providerRequest = ProviderRequest.builder()
                .name("Provider One")
                .email("duplicate@example.com")
                .phone("123456789")
                .address("123 Test St")
                .city("Testville")
                .country("Testland")
                .postalCode("12345")
                .website("https://www.example.com")
                .build();
    }

    /**
     * Test createProvider method
     * @throws Exception
     */
    @Test
    public void getProviderById_ShouldReturnOk() throws Exception {
        // Setup mock response
        List<ProviderResponse> providerResponseList = List.of(createDummyProviderResponse());

        // Mock service method
        when(providerService.getAllProviders()).thenReturn(providerResponseList);

        mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/providers"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(1)))
                .andExpect(jsonPath("$[0].name").value("Test Provider"));
    }

    @Test
    public void postProvider_shouldReturnOk() throws Exception {
        // Arrange

        logger.info("Testing postProvider_shouldReturnOk");

        ProviderRequest providerRequest = createDumyProviderRequest();
        ProviderResponse providerResponse = createDummyProviderResponse();

        when(providerService.createProvider(any(ProviderRequest.class))).thenReturn(providerResponse);

        // Act & Assert

        mockMvc.perform(post("/api/v1/providers")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(providerRequest)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(providerResponse.getId()))
                .andExpect(jsonPath("$.name").value(providerResponse.getName()))
                .andExpect(jsonPath("$.email").value(providerResponse.getEmail()))
                .andExpect(jsonPath("$.phone").value(providerResponse.getPhone()))
                .andExpect(jsonPath("$.address").value(providerResponse.getAddress()))
                .andExpect(jsonPath("$.city").value(providerResponse.getCity()))
                .andExpect(jsonPath("$.country").value(providerResponse.getCountry()))
                .andExpect(jsonPath("$.postalCode").value(providerResponse.getPostalCode()))
                .andExpect(jsonPath("$.website").value(providerResponse.getWebsite()));
    }

    @Test
    public void createProvider_withDuplicateEmail_shouldReturnBadRequest() throws Exception {
        // Arrange: Mock the providerService to throw an exception for duplicate email
        ProviderRequest providerRequest = createDummyProviderRequest();
        when(providerService.createProvider(providerRequest))
                .thenThrow(new IllegalArgumentException("Email already exists"));



        // Act & Assert
        mockMvc.perform(post("/api/v1/providers")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(providerRequest)))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.message").value("Email already exists"));



    }

}