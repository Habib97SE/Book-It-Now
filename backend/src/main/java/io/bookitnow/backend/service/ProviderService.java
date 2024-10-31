package io.bookitnow.backend.service;

import io.bookitnow.backend.entity.Provider;
import io.bookitnow.backend.repository.ProviderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProviderService {
    private final ProviderRepository repo;

    public ProviderService(@Autowired ProviderRepository repo) {
        this.repo = repo;
    }

    public List<Provider> getAllProviders() {
        return repo.findAll();
    }

}
