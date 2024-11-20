package io.bookitnow.backend.v1.service;

import io.bookitnow.backend.v1.DTOs.requests.BookingRequest;
import io.bookitnow.backend.v1.DTOs.responses.BookingResponse;
import io.bookitnow.backend.v1.entity.Booking;
import io.bookitnow.backend.v1.entity.ServiceItem;
import io.bookitnow.backend.v1.repository.BookingRepository;
import io.bookitnow.backend.v1.repository.ServiceItemRepository;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

/**
 * Service class for booking related operations
 */
@Service
public class BookingService {

    private final BookingRepository bookingRepository;
    private final ServiceItemRepository serviceItemRepository;

    public BookingService(BookingRepository bookingRepository,
                          ServiceItemRepository serviceItemRepository) {
        this.bookingRepository = bookingRepository;
        this.serviceItemRepository = serviceItemRepository;
    }

    /**
     * Maps a booking entity to a booking response
     *
     * @param booking booking entity
     * @return booking response
     */
    public BookingResponse mapToResponse(Booking booking) {
        return BookingResponse.builder()
                .id(booking.getId())
                .userId(booking.getUserId())
                .serviceItemId(booking.getServiceItem().getId())
                .bookingDateTimeStart(booking.getBookingDateTimeStart())
                .bookingDateTimeEnd(booking.getBookingDateTimeEnd())
                .durationInMinutes(booking.getDurationInMinutes())
                .isCancelled(booking.getIsCancelled())
                .notes(booking.getNotes())
                .createdAt(booking.getCreatedAt())
                .updatedAt(booking.getUpdatedAt())
                .build();
    }

    /**
     * Maps a booking request to a booking entity
     *
     * @param bookingRequest booking request
     * @return booking entity
     */
    public Booking mapToBooking(BookingRequest bookingRequest) {
        ServiceItem serviceItem = serviceItemRepository.findById(bookingRequest.getServiceItemId())
                .orElseThrow(() -> new IllegalArgumentException("ServiceItem not found"));

        return Booking.builder()
                .userId(bookingRequest.getUserId())
                .serviceItem(serviceItem) // Map the service item
                .bookingDateTimeStart(bookingRequest.getBookingDateTimeStart())
                .bookingDateTimeEnd(bookingRequest.getBookingDateTimeEnd())
                .durationInMinutes(bookingRequest.getDurationInMinutes())
                .notes(bookingRequest.getNotes())
                .isCancelled(bookingRequest.getIsCancelled())
                .build();
    }

    /**
     * Returns all bookings
     *
     * @return list of booking responses
     */
    public List<BookingResponse> getAllBookings() {
        List<Booking> bookings = bookingRepository.findAll();
        return bookings.stream().map(this::mapToResponse).toList();
    }

    /**
     * Returns a booking by id
     *
     * @param id booking id
     * @return booking response
     *
     * @throws IllegalArgumentException if id is less than 1
     * @throws NoSuchElementException if booking is not found
     */
    public BookingResponse getBookingById(@NotNull Long id) {
        if (id < 1) {
            throw new IllegalArgumentException("Invalid booking id");
        }
        Booking booking = bookingRepository.findById(id).orElseThrow(() -> new NoSuchElementException("Booking not found"));
        return mapToResponse(booking);
    }

    public List<BookingResponse> getBookingsByUserId(@NotNull String userId) {
        System.err.println("userId: " + userId);
        List<Booking> bookings = bookingRepository.findByUserId(userId);
        return bookings.stream().map(this::mapToResponse).toList();
    }

    /**
     * Creates a new booking
     *
     * @param bookingRequest booking request
     * @return booking response
     *
     * @throws IllegalArgumentException if booking request is invalid
     */
    public BookingResponse createBooking(@Valid BookingRequest bookingRequest) {
        try {

            // check if bookingDateTimeStart is before bookingDateTimeEnd
            if (bookingRequest.getBookingDateTimeStart().isAfter(bookingRequest.getBookingDateTimeEnd())) {
                throw new IllegalArgumentException("Booking start date and time should be before end date and time");
            }

            // check if provided bookingDateTimeStart is already booked
            List<Booking> bookings = bookingRepository.findAll();
            for (Booking booking : bookings) {
                if (booking.getBookingDateTimeStart().equals(bookingRequest.getBookingDateTimeStart())) {
                    throw new IllegalArgumentException("Booking already exists for the given date and time");
                }
            }




            Booking booking = mapToBooking(bookingRequest);
            bookingRepository.save(booking);
            return mapToResponse(booking);
        } catch (Exception e) {
            System.err.println("Exception: " + e.getMessage());
            throw new IllegalArgumentException("Invalid booking request");
        }
    }

    /**
     * Updates a booking
     *
     * @param id booking id
     * @param bookingRequest booking request
     * @return booking response
     *
     * @throws IllegalArgumentException if id is less than 1 or booking request is invalid
     * @throws NoSuchElementException if booking is not found
     */
    public BookingResponse updateBooking(@NotNull Long id, @Valid BookingRequest bookingRequest) throws Exception {
        if (id < 1) {
            throw new IllegalArgumentException("Invalid booking id");
        }
        Booking booking = bookingRepository.findById(id).orElseThrow(() -> new NoSuchElementException("Booking not found"));
        try {
            booking.setUserId(bookingRequest.getUserId());
            booking.setBookingDateTimeStart(bookingRequest.getBookingDateTimeStart());
            booking.setBookingDateTimeEnd(bookingRequest.getBookingDateTimeEnd());
            booking.setDurationInMinutes(bookingRequest.getDurationInMinutes());
            booking.setNotes(bookingRequest.getNotes());
            booking.setIsCancelled(bookingRequest.getIsCancelled());
            bookingRepository.save(booking);
            return mapToResponse(booking);
        } catch (Exception e) {
            throw new Exception("Internal server error");
        }
    }

    /**
     * Deletes a booking
     *
     * @param id booking id
     *
     * @throws IllegalArgumentException if id is less than 1
     * @throws NoSuchElementException if booking is not found
     */
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
