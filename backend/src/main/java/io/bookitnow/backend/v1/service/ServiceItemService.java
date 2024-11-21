package io.bookitnow.backend.v1.service;

import io.bookitnow.backend.v1.DTOs.requests.ServiceItemRequest;
import io.bookitnow.backend.v1.DTOs.responses.ServiceItemResponse;
import io.bookitnow.backend.v1.entity.Booking;
import io.bookitnow.backend.v1.entity.Category;
import io.bookitnow.backend.v1.entity.Provider;
import io.bookitnow.backend.v1.entity.ServiceItem;
import io.bookitnow.backend.v1.exception.ServiceItemCreationException;
import io.bookitnow.backend.v1.repository.BookingRepository;
import io.bookitnow.backend.v1.repository.ServiceItemRepository;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.*;


/**
 * ServiceItemService: Service class for ServiceItem entity.
 *
 * @version 1.0
 * @since 1.0
 * @see ServiceItem
 * @see ServiceItemRepository
 */
@Service
public class ServiceItemService {
    private final ServiceItemRepository serviceItemRepository;
    private final BookingRepository bookingRepository;

    private final Logger logger = LoggerFactory.getLogger("serviceItemServiceLog");


    public ServiceItemService(ServiceItemRepository serviceItemRepository
            , BookingRepository bookingRepository) {
        this.serviceItemRepository = serviceItemRepository;
        this.bookingRepository = bookingRepository;
    }

    private LocalTime parseTime(String time) {
        String [] timeParts = time.split(":");
        return LocalTime.of(Integer.parseInt(timeParts[0]), Integer.parseInt(timeParts[1]));
    }

    /**
     * Maps a ServiceItem entity to a ServiceItemResponse DTO.
     *
     * @param serviceItem ServiceItem entity to be mapped
     * @return ServiceItemResponse DTO
     */
    public ServiceItemResponse mapToResponse(ServiceItem serviceItem) {
        return ServiceItemResponse.builder()
                .id(serviceItem.getId())
                .name(serviceItem.getName())
                .description(serviceItem.getDescription())
                .price(serviceItem.getPrice())
                .durationInMinutes(serviceItem.getDurationInMinutes())
                .image(serviceItem.getImage())
                .category(serviceItem.getCategory().name())
                .providerId(serviceItem.getProvider().getId())
                .startTime(serviceItem.getStartTime())
                .endTime(serviceItem.getEndTime())
                .build();
    }


    /**
     * Maps a ServiceItemRequest DTO to a ServiceItem entity.
     *
     * @param serviceItemRequest ServiceItemRequest DTO to be mapped
     * @return ServiceItem entity
     */
    public ServiceItem mapToServiceItem(ServiceItemRequest serviceItemRequest) {
        return ServiceItem.builder()
                .name(serviceItemRequest.getName())
                .description(serviceItemRequest.getDescription())
                .price(serviceItemRequest.getPrice())
                .durationInMinutes(serviceItemRequest.getDurationInMinutes())
                .image(serviceItemRequest.getImage())
                .category(Category.valueOf(serviceItemRequest.getCategory()))
                .provider(Provider.builder().id(serviceItemRequest.getProviderId()).build())
                .startTime(parseTime(serviceItemRequest.getStartTime()))
                .endTime(parseTime(serviceItemRequest.getEndTime()))
                .build();
    }

    /**
     * Gets all service items.
     *
     * @return List of ServiceItemResponse DTOs
     */
    public List<ServiceItemResponse> getAllServiceItems() {
        logger.info("Getting all service items");
        return serviceItemRepository.findAll().stream()
                .map(this::mapToResponse)
                .toList();
    }

    /**
     * Gets a service item by id.
     *
     * @param id Id of the service item
     * @return ServiceItemResponse DTO
     *
     * @throws IllegalArgumentException if id is less than 1
     * @throws NoSuchElementException if service item is not found
     */
    public ServiceItemResponse getServiceItemById(@NotNull Long id) {
        if (id < 1) throw new IllegalArgumentException("Invalid id");
        ServiceItem serviceItem = serviceItemRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Service item not found"));
        return mapToResponse(serviceItem);
    }

    /**
     * Creates a service item.
     *
     * @param serviceItemRequest ServiceItemRequest DTO
     * @return ServiceItemResponse DTO
     *
     * @throws Exception if failed to create service item
     */
    public ServiceItemResponse createServiceItem(@Valid ServiceItemRequest serviceItemRequest)  {
        try {
            Provider provider = Provider.builder().id(serviceItemRequest.getProviderId()).build();
            ServiceItem serviceItem = mapToServiceItem(serviceItemRequest);
            return mapToResponse(serviceItemRepository.save(serviceItem));
        } catch (Exception e) {
            throw new ServiceItemCreationException("Failed to create service item");
        }
    }

    /**
     * Updates a service item.
     *
     * @param id Id of the service item
     * @param serviceItemRequest ServiceItemRequest DTO
     * @return ServiceItemResponse DTO
     *
     * @throws IllegalArgumentException if id is less than 1
     * @throws NoSuchElementException if service item is not found
     * @throws Exception if failed to update service item
     */
    public ServiceItemResponse updateServiceItem(@NotNull Long id, @Valid ServiceItemRequest serviceItemRequest) throws Exception {
        if (id < 1) throw new IllegalArgumentException("Invalid id");
        try {
            ServiceItem serviceItem = serviceItemRepository.findById(id)
                    .orElseThrow(() -> new NoSuchElementException("Service item not found"));
            serviceItem.setName(serviceItemRequest.getName());
            serviceItem.setDescription(serviceItemRequest.getDescription());
            serviceItem.setPrice(serviceItemRequest.getPrice());
            serviceItem.setDurationInMinutes(serviceItemRequest.getDurationInMinutes());
            serviceItem.setImage(serviceItemRequest.getImage());
            serviceItem.setCategory(Category.valueOf(serviceItemRequest.getCategory()));
            serviceItem.setProvider(Provider.builder().id(serviceItemRequest.getProviderId()).build());
            serviceItem.setStartTime(parseTime(serviceItemRequest.getStartTime()));
            serviceItem.setEndTime(parseTime(serviceItemRequest.getEndTime()));
            return mapToResponse(serviceItemRepository.save(serviceItem));
        } catch (Exception e) {
            throw new Exception("Failed to update service item");
        }
    }

    /**
     * Deletes a service item.
     *
     * @param id Id of the service item
     *
     * @throws IllegalArgumentException if id is less than 1
     * @throws Exception if failed to delete service item
     */
    public void deleteServiceItem(@NotNull Long id) throws Exception {
        if (id < 1) throw new IllegalArgumentException("Invalid id");
        try {
            serviceItemRepository.deleteById(id);
            } catch (Exception e) {
            throw new Exception("Failed to delete service item");
        }
    }

    /**
     * Gets service items by provider id.
     *
     * @param providerId Id of the provider
     * @return List of ServiceItemResponse DTOs
     *
     * @throws IllegalArgumentException if providerId is less than 1
     */
    public List<ServiceItemResponse> getServiceItemsByProviderId(@NotNull Long providerId) {
        if (providerId < 1) throw new IllegalArgumentException("Invalid provider id");
        return serviceItemRepository.findByProvider_Id(providerId).stream()
                .map(this::mapToResponse)
                .toList();
    }

    /**
     * Gets service items by category.
     *
     * @param category Category of the service items
     * @return List of ServiceItemResponse DTOs
     *
     * @throws IllegalArgumentException if category is blank
     */
    public List<ServiceItemResponse> getServiceItemsByCategory(@NotNull String category) {
        if (category.isBlank()) throw new IllegalArgumentException("Invalid category");
        return serviceItemRepository.findByCategory(Category.valueOf(category)).stream()
                .map(this::mapToResponse)
                .toList();
    }


    public Map<String, List<String>> getAvailableTimes(Long serviceItemId, LocalDate startDate) {
        ServiceItem serviceItem = serviceItemRepository.findById(serviceItemId)
                .orElseThrow(() -> new NoSuchElementException("Service item not found"));

        Map<String, List<String>> weeklyTimeSlots = new LinkedHashMap<>();

        LocalTime startTime = serviceItem.getStartTime();
        LocalTime endTime = serviceItem.getEndTime();
        long duration = serviceItem.getDurationInMinutes().longValue();

        LocalDateTime weekStartDateTime = startDate.atStartOfDay();
        LocalDateTime weekEndDateTime = startDate.plusDays(6).atTime(23, 59, 59);

        List<Booking> bookings = bookingRepository.findByServiceItemIdAndBookingDateTimeStartBetween(
                serviceItemId, weekStartDateTime, weekEndDateTime);

        Map<LocalDate, List<LocalTime[]>> bookedTimeRanges = new HashMap<>();
        for (Booking booking : bookings) {
            LocalDate bookingDate = booking.getBookingDateTimeStart().toLocalDate();
            bookedTimeRanges
                    .computeIfAbsent(bookingDate, k -> new ArrayList<>())
                    .add(new LocalTime[]{booking.getBookingDateTimeStart().toLocalTime(),
                            booking.getBookingDateTimeEnd().toLocalTime()});
        }

        for (int i = 0; i < 7; i++) {
            LocalDate currentDate = startDate.plusDays(i);
            List<String> dailyTimeSlots = new ArrayList<>();
            LocalTime currentSlotStart = startTime;

            while (currentSlotStart.plusMinutes(duration).isBefore(endTime) ||
                    currentSlotStart.plusMinutes(duration).equals(endTime)) {
                LocalTime slotEndTime = currentSlotStart.plusMinutes(duration);

                LocalTime finalCurrentSlotStart = currentSlotStart;
                boolean isBooked = bookedTimeRanges.getOrDefault(currentDate, new ArrayList<>()).stream()
                        .anyMatch(range ->
                                !(slotEndTime.isBefore(range[0]) || finalCurrentSlotStart.isAfter(range[1])));

                if (!isBooked) {
                    dailyTimeSlots.add(currentSlotStart + "-" + slotEndTime);
                }

                currentSlotStart = slotEndTime;
            }

            weeklyTimeSlots.put(currentDate.toString(), dailyTimeSlots);
        }

        return weeklyTimeSlots;
    }






}
