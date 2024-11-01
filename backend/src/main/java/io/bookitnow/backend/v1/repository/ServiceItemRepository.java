package io.bookitnow.backend.v1.repository;

import io.bookitnow.backend.v1.entity.Category;
import io.bookitnow.backend.v1.entity.ServiceItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ServiceItemRepository extends JpaRepository<ServiceItem, Long> {
    List<ServiceItem> findByProvider_Id(Long providerId);
    List<ServiceItem> findByCategory(Category category);
}
