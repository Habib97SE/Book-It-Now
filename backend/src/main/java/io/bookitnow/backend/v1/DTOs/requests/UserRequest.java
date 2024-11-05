package io.bookitnow.backend.v1.DTOs.requests;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.hibernate.validator.constraints.URL;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserRequest {

    @NotNull
    private String firstName;

    @NotNull
    private String lastName;

    @NotNull
    @Email(message = "Email should be valid")
    private String email;

    @NotNull
    private String phone;

    @NotNull
    @Min(8)
    private String password;

    @URL(message = "Profile picture should be a valid URL")
    private String profilePicture;


    private String address;
    private String city;
    private String country;

    @NotNull
    private Boolean isProvider;

    @NotNull
    private Boolean isActive = true;
}
