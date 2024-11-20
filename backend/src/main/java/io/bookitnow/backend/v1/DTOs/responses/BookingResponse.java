package io.bookitnow.backend.v1.DTOs.responses;


import lombok.*;

import java.time.LocalDateTime;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class BookingResponse {
    private Long id;
    private String userId;
    private Long serviceItemId;
    private LocalDateTime bookingDateTimeStart;
    private LocalDateTime bookingDateTimeEnd;
    private Integer durationInMinutes;
    private Boolean isCancelled;
    private String notes;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
