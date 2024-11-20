package io.bookitnow.backend.v1.DTOs.responses;


import lombok.*;

import java.time.LocalDateTime;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class BookingResponse {
    private String bookingNumber;
    private Long id;
    private String userId;
    private Long serviceItemId;
    private String email;
    private String phone;
    private LocalDateTime bookingDateTimeStart;
    private LocalDateTime bookingDateTimeEnd;
    private Integer durationInMinutes;
    private Boolean isCancelled;
    private String notes;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
