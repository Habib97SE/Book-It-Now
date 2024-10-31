package io.bookitnow.backend.v1.service;

import io.bookitnow.backend.v1.DTOs.requests.ServiceItemRequest;
import io.bookitnow.backend.v1.DTOs.responses.ServiceItemResponse;
import io.bookitnow.backend.v1.entity.Category;
import io.bookitnow.backend.v1.entity.ServiceItem;
import io.bookitnow.backend.v1.repository.ServiceItemRepository;
import org.springframework.stereotype.Service;

@Service
public class ServiceService {
    private final ServiceItemRepository serviceItemRepository;

    public ServiceService(ServiceItemRepository serviceItemRepository) {
        this.serviceItemRepository = serviceItemRepository;
    }

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
                .build();
    }

    public ServiceItem mapToServiceItem(ServiceItemRequest serviceItemRequest) {
        return ServiceItem.builder()
                .name(serviceItemRequest.getName())
                .description(serviceItemRequest.getDescription())
                .price(serviceItemRequest.getPrice())
                .durationInMinutes(serviceItemRequest.getDurationInMinutes())
                .image(serviceItemRequest.getImage())
                .category(Category.valueOf(serviceItemRequest.getCategory()))
                .provider()
                .build();
    }


}
