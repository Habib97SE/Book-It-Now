package io.bookitnow.backend.v1.controller;

import io.bookitnow.backend.v1.DTOs.requests.BookingRequest;
import io.bookitnow.backend.v1.DTOs.responses.BookingResponse;
import io.bookitnow.backend.v1.service.BookingService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import io.bookitnow.backend.v1.entity.Booking;

import java.util.List;

/**
 * Controller class for booking related operations
 *
 * @version 1.0
 * @apiNote This class is responsible for handling all the incoming requests related to booking operations
 * @see BookingService
 * @see BookingRequest
 * @see BookingResponse
 * @see Booking
 * @since 1.0
 */
@Tag(name = "Booking", description = "Endpoints for booking related operations")
@RestController
@RequestMapping("/api/v1/bookings")
public class BookingController {

    private final BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    /**
     * Get all bookings
     *
     * @return list of all bookings
     */
    @Operation(summary = "Get all bookings", description = "Get all bookings")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "List of all bookings retrieved successfully"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    @GetMapping
    public ResponseEntity<Object> getAllBookings() {
        List<BookingResponse> bookings = bookingService.getAllBookings();
        return ResponseEntity.ok(bookings);
    }

    /**
     * Get booking by id
     *
     * @param id booking id
     * @return booking
     */
    @Operation(summary = "Get booking by id", description = "Get booking by id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Booking retrieved successfully"),
            @ApiResponse(responseCode = "404", description = "Booking not found"),
            @ApiResponse(responseCode = "400", description = "Invalid Booking Id"),
    })
    @GetMapping("/{id}")
    public ResponseEntity<BookingResponse> getBookingById(@NotNull @PathVariable Long id) {
        return ResponseEntity.ok(bookingService.getBookingById(id));
    }

    /**
     * Create a new booking
     *
     * @param bookingRequest booking request
     * @return booking response
     */
    @Operation(summary = "Create a new booking", description = "Create a new booking")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Booking created successfully"),
            @ApiResponse(responseCode = "400", description = "Internal booking id")
    })
    @PostMapping
    public ResponseEntity<BookingResponse> createBooking(@Valid @RequestBody BookingRequest bookingRequest) {
        return ResponseEntity.ok(bookingService.createBooking(bookingRequest));
    }

    /**
     * Update a booking
     *
     * @param id booking id
     * @param bookingRequest booking request
     * @return booking response
     */
    @Operation(summary = "Update a booking", description = "Update a booking")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Booking updated successfully"),
            @ApiResponse(responseCode = "400", description = "Invalid booking id"),
            @ApiResponse(responseCode = "404", description = "Booking not found"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    @PutMapping("/{id}")
    public ResponseEntity<BookingResponse> updateBooking(
            @NotNull @PathVariable Long id,
            @Valid @RequestBody BookingRequest bookingRequest) throws Exception {
        return ResponseEntity.ok(bookingService.updateBooking(id, bookingRequest));
    }

    /**
     * Delete a booking
     *
     * @param id booking id
     * @return response entity
     */
    @Operation(summary = "Delete a booking", description = "Delete a booking")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "Booking deleted successfully"),
            @ApiResponse(responseCode = "404", description = "Booking not found"),
            @ApiResponse(responseCode = "400", description = "Invalid booking id")
    })
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBooking(@NotNull @PathVariable Long id) {
        bookingService.deleteBooking(id);
        return ResponseEntity.noContent().build();
    }

}
