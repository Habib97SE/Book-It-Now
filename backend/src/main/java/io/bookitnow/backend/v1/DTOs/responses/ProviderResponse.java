package io.bookitnow.backend.v1.DTOs.responses;

import io.bookitnow.backend.v1.entity.Provider;
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

    public ProviderResponse(Provider provider) {
        this.id = provider.getId();
        this.name = provider.getName();
        this.email = provider.getEmail();
        this.phone = provider.getPhone();
        this.address = provider.getAddress();
        this.city = provider.getCity();
        this.state = provider.getState();
        this.country = provider.getCountry();
        this.postalCode = provider.getPostalCode();
        this.website = provider.getWebsite();
        this.description = provider.getDescription();
        this.logo = provider.getLogo();
        this.cover = provider.getCover();
        this.facebook = provider.getFacebook();
        this.instagram = provider.getInstagram();
        this.createdAt = provider.getCreatedAt();
        this.updatedAt = provider.getUpdatedAt();
    }
}
