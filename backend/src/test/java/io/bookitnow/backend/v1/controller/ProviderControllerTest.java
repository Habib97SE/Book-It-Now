package io.bookitnow.backend.v1.controller;

import io.bookitnow.backend.v1.DTOs.requests.ProviderRequest;
import io.bookitnow.backend.v1.DTOs.responses.ProviderResponse;
import io.bookitnow.backend.v1.entity.Provider;
import io.bookitnow.backend.v1.service.ProviderService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.boot.test.mock.mockito.MockBean;
import static org.mockito.Mockito.*;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import java.time.LocalDateTime;
import java.util.Collections;
import java.util.NoSuchElementException;

@WebMvcTest(ProviderController.class)
public class ProviderControllerTest {

    @MockBean
    private ProviderService providerService;

    private MockMvc mockMvc;



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
    void testGetAllProviders() throws Exception {
        // Arrange
        ProviderResponse providerResponse = createProviderResponse();
        when(providerService.getAllProviders(0, 10, "name,asc", null, null, null, null)).thenReturn(Collections.singletonList(providerResponse));

        // Act and Assert
        mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/providers")
                        .param("page", "0")
                        .param("pageSize", "10")
                        .param("sort", "name,asc")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].id").value(1));
    }

    @Test
    void testGetAllProviders_Empty() throws Exception {
        // Arrange
        when(providerService.getAllProviders(0, 10, "name,asc", null, null, null, null)).thenReturn(Collections.emptyList());

        // Act and Assert
        mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/providers")
                        .param("page", "0")
                        .param("pageSize", "10")
                        .param("sort", "name,asc")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().json("[]"));
    }

    @Test
    void testGetProviderById_Success() throws Exception {

        ProviderResponse providerResponse = createProviderResponse();
        when(providerService.getProviderById(1L)).thenReturn(providerResponse);

        mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/providers/1")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.name").value("Provider Name"));
    }

    @Test
    void testGetProviderById_NotFound() throws Exception {
        when(providerService.getProviderById(1L)).thenThrow(new NoSuchElementException());

        mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/providers/1")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isNotFound());
    }

    @Test
    void testCreateProvider() throws Exception {

        ProviderResponse providerResponse = createProviderResponse();

        when(providerService.createProvider(any(ProviderRequest.class))).thenReturn(providerResponse);

        mockMvc.perform(MockMvcRequestBuilders.post("/api/v1/providers")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"name\":\"New Provider\", \"city\":\"City\", \"address\":\"Address\", \"category\":\"Category\", \"email\":\"email@example.com\"}"))
                .andExpect(status().isCreated())
                .andExpect(header().string("Location", "/api/v1/providers/1"))
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.name").value("New Provider"));
    }

    @Test
    void testUpdateProvider() throws Exception {
        ProviderRequest providerRequest = createProviderRequest();
        ProviderResponse updatedResponse = createProviderResponse();

        when(providerService.updateProvider(eq(1L), any(ProviderRequest.class))).thenReturn(updatedResponse);

        mockMvc.perform(MockMvcRequestBuilders.put("/api/v1/providers/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"name\":\"Updated Provider\", \"city\":\"New City\", \"address\":\"New Address\", \"category\":\"New Category\", \"email\":\"email@example.com\"}"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.name").value("Updated Provider"));
    }

    @Test
    void testDeleteProvider() throws Exception {
        doNothing().when(providerService).deleteProvider(1L);

        mockMvc.perform(MockMvcRequestBuilders.delete("/api/v1/providers/1"))
                .andExpect(status().isOk());
    }
}
