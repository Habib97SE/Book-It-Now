package io.bookitnow.backend.v1.repository;

import io.bookitnow.backend.v1.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {
    List<Booking> findByServiceItemIdAndBookingDateTimeStartBetween(
            Long serviceItemId,
            LocalDateTime startDateTime,
            LocalDateTime endDateTime
    );

    List<Booking> findByUserId(String userId);

}
