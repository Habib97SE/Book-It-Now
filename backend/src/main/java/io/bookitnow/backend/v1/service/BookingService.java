package io.bookitnow.backend.v1.service;

import io.bookitnow.backend.v1.DTOs.requests.BookingRequest;
import io.bookitnow.backend.v1.DTOs.responses.BookingResponse;
import io.bookitnow.backend.v1.entity.Booking;
import io.bookitnow.backend.v1.repository.BookingRepository;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class BookingService {

    private final BookingRepository bookingRepository;

    public BookingService(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    public BookingResponse mapToResponse(Booking booking) {
        return BookingResponse.builder()
                .id(booking.getId())
                .userId(booking.getUserId())
                .bookingDateTimeStart(booking.getBookingDateTImeStart())
                .bookingDateTimeEnd(booking.getBookingDateTimeEnd())
                .durationInMinutes(booking.getDurationInMinutes())
                .isCancelled(booking.getIsCancelled())
                .createdAt(booking.getCreatedAt())
                .updatedAt(booking.getUpdatedAt())
                .build();
    }

    public Booking mapToBooking(BookingRequest bookingRequest) {
        return Booking.builder()
                .userId(bookingRequest.getUserId())
                .bookingDateTImeStart(bookingRequest.getBookingDateTimeStart())
                .bookingDateTimeEnd(bookingRequest.getBookingDateTimeEnd())
                .durationInMinutes(bookingRequest.getDurationInMinutes())
                .isCancelled(bookingRequest.getIsCancelled())
                .build();
    }

    public List<BookingResponse> getAllBookings() {
        List<Booking> bookings = bookingRepository.findAll();
        return bookings.stream().map(this::mapToResponse).toList();
    }

    public BookingResponse getBookingById(@NotNull Long id) {
        if (id < 1) {
            throw new IllegalArgumentException("Invalid booking id");
        }
        Booking booking = bookingRepository.findById(id).orElseThrow(() -> new NoSuchElementException("Booking not found"));
        return mapToResponse(booking);
    }

    public BookingResponse createBooking(@Valid BookingRequest bookingRequest) {
        try {
            Booking booking = mapToBooking(bookingRequest);
            bookingRepository.save(booking);
            return mapToResponse(booking);
        } catch (Exception e) {
            throw new IllegalArgumentException("Invalid booking request");
        }
    }

    public BookingResponse updateBooking(@NotNull Long id, @Valid BookingRequest bookingRequest) {
        if (id < 1) {
            throw new IllegalArgumentException("Invalid booking id");
        }
        Booking booking = bookingRepository.findById(id).orElseThrow(() -> new NoSuchElementException("Booking not found"));
        try {
            booking.setUserId(bookingRequest.getUserId());
            booking.setBookingDateTImeStart(bookingRequest.getBookingDateTimeStart());
            booking.setBookingDateTimeEnd(bookingRequest.getBookingDateTimeEnd());
            booking.setDurationInMinutes(bookingRequest.getDurationInMinutes());
            booking.setIsCancelled(bookingRequest.getIsCancelled());
            bookingRepository.save(booking);
            return mapToResponse(booking);
        } catch (Exception e) {
            throw new IllegalArgumentException("Invalid booking request");
        }
    }

    public void deleteBooking(Long id) {
        if (id < 1) {
            throw new IllegalArgumentException("Invalid booking id");
        }
        try {
            bookingRepository.deleteById(id);
        } catch (Exception e) {
            throw new NoSuchElementException("Booking not found");
        }
    }


}
