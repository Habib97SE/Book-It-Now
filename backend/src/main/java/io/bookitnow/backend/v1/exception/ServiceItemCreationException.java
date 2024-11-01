package io.bookitnow.backend.v1.exception;

public class ServiceItemCreationException extends RuntimeException {
    public ServiceItemCreationException(String message) {
        super(message);
    }
}
