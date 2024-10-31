package io.bookitnow.backend.DTOs.responses;

import lombok.*;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class ProviderResponse {
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
    private String logo;
    private String cover;
    private String facebook;
    private String instagram;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
