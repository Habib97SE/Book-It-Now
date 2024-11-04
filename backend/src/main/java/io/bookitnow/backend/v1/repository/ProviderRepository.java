package io.bookitnow.backend.v1.repository;

import io.bookitnow.backend.v1.entity.Provider;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface ProviderRepository extends JpaRepository<Provider, Long> , JpaSpecificationExecutor<Provider> {
    Provider findByEmail (String email);
}