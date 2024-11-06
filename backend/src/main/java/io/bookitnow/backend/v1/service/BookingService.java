package io.bookitnow.backend.v1.service;

import io.bookitnow.backend.v1.DTOs.requests.BookingRequest;
import io.bookitnow.backend.v1.DTOs.responses.BookingResponse;
import io.bookitnow.backend.v1.entity.Booking;
import io.bookitnow.backend.v1.repository.BookingRepository;
import org.springframework.stereotype.Service;

import java.util.List;

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

    public BookingResponse getBookingById(Long id) {
        Booking booking = bookingRepository.findById(id).orElseThrow();
        return mapToResponse(booking);
    }

    public BookingResponse createBooking(BookingRequest bookingRequest) {
        Booking booking = mapToBooking(bookingRequest);
        bookingRepository.save(booking);
        return mapToResponse(booking);
    }

    public BookingResponse updateBooking(Long id, BookingRequest bookingRequest) {
        Booking booking = bookingRepository.findById(id).orElseThrow();
        booking.setUserId(bookingRequest.getUserId());
        booking.setBookingDateTImeStart(bookingRequest.getBookingDateTimeStart());
        booking.setBookingDateTimeEnd(bookingRequest.getBookingDateTimeEnd());
        booking.setDurationInMinutes(bookingRequest.getDurationInMinutes());
        booking.setIsCancelled(bookingRequest.getIsCancelled());
        bookingRepository.save(booking);
        return mapToResponse(booking);
    }

    public void deleteBooking(Long id) {
        bookingRepository.deleteById(id);
    }



}
