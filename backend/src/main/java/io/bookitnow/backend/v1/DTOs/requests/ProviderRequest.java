package io.bookitnow.backend.v1.DTOs.requests;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.hibernate.validator.constraints.URL;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class ProviderRequest {

    @NotNull(message = "Name is required")
    @NotEmpty(message = "Name is required")
    private String name;

    @NotNull(message = "Email is required")
    @NotEmpty(message = "Email is required")
    @Email(message = "Email should be valid")
    private String email;

    @NotNull(message = "Phone is required")
    private String phone;

    @NotNull(message = "Address is required")
    private String address;

    @NotNull(message = "City is required")
    private String city;

    private String state;

    @NotNull(message = "Country is required")
    private String country;

    @NotNull(message = "Postal code is required")
    private String postalCode;

    @NotNull(message = "Website is required")
    @URL(message = "Website should be valid")
    private String website;

    private String description;
    private String logo;
    private String cover;

    @URL(message = "Facebook should be valid")
    private String facebook;

    @URL(message = "Instagram should be valid")
    private String instagram;

}
