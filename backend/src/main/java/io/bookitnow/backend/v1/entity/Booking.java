package io.bookitnow.backend.v1.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.PastOrPresent;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.time.LocalTime;

@Entity
@Table(name = "bookings")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public String bookingNumber;


    @Column(nullable = false)
    private String userId;

    @ManyToOne
    @JoinColumn(name = "service_item_id", nullable = false)
    private ServiceItem serviceItem;

    @Email(message = "Email should be valid")
    private String email;


    private String phone;

    @FutureOrPresent
    @Column(nullable = false)
    private LocalDateTime bookingDateTimeStart;

    @FutureOrPresent
    @Column(nullable = false)
    private LocalDateTime bookingDateTimeEnd;

    @Min(1)
    private Integer durationInMinutes;

    private String notes;

    @Column(nullable = false, columnDefinition = "BOOLEAN DEFAULT FALSE")
    private Boolean isCancelled;

    @Column(nullable = false)
    @PastOrPresent
    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private LocalDateTime createdAt;

    @Column(nullable = false)
    @PastOrPresent
    @UpdateTimestamp
    private LocalDateTime updatedAt;

}
