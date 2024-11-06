package io.bookitnow.backend.v1.DTOs.responses;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;


@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BookingResponse {
    private Long id;
    private Long userId;
    private Long serviceItemId;
    private LocalDateTime bookingDateTimeStart;
    private LocalDateTime bookingDateTimeEnd;
    private Integer durationInMinutes;
    private Boolean isCancelled;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
