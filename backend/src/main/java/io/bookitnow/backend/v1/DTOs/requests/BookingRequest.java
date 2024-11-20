package io.bookitnow.backend.v1.DTOs.requests;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class BookingRequest {
    @NotNull
    private String userId;

    @NotNull
    @Min(1)
    private Long serviceItemId;

    @NotNull
    private LocalDateTime bookingDateTimeStart;

    @NotNull
    private LocalDateTime bookingDateTimeEnd;

    @NotNull
    @Min(1)
    private Integer durationInMinutes;

    private String notes;

    private Boolean isCancelled = false;

}
