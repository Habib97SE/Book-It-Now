package io.bookitnow.backend.DTOs.responses;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class ServiceResponse {
    private Long id;
    private String name;
    private String description;
    private Double price;
    private Double durationInMinutes;
    private String image;
    private String category;
    private Long providerId;
}
