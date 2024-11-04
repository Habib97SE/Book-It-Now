package io.bookitnow.backend.v1.DTOs.responses;

import java.util.List;

public class ProviderWithServicesResponse {
    private Long id;
    private String name;
    private String email;
    private String phone;
    private String address;
    private String city;
    private String state;
    private String country;
    private String postalCode;
    private String website;
    private String description;
    private List<ServiceItemResponse> services;
}
