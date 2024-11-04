package io.bookitnow.backend.v1.DTOs.requests;


import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.time.LocalTime;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class ServiceItemRequest {

    @NotNull(message = "Name is required")
    @NotEmpty(message = "Name is required")
    private String name;

    private String description;

    @NotNull(message = "Price is required")
    @Min(value = 0, message = "Price must be greater than 0")
    private Double price;

    @NotNull(message = "Duration is required")
    private Double durationInMinutes;

    private String image;

    @NotNull(message = "Category is required")
    private String category;

    @NotNull(message = "Provider is required")
    @Min(value = 1, message = "Provider must be greater than 0")
    private Long providerId;

    @NotNull(message = "Start time is required")
    private String startTime;

    @NotNull(message = "End time is required")
    private String endTime;


}
