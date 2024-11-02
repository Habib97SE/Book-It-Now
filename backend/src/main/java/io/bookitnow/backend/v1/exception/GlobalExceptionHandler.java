package io.bookitnow.backend.v1.exception;

import org.apache.coyote.BadRequestException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.sql.SQLException;
import java.util.NoSuchElementException;

/**
 * Global exception handler for the application.
 * This class provides centralized exception handling across all controllers using @ControllerAdvice.
 * Each method handles a specific exception type, returning a meaningful HTTP response status and message.
 */
@ControllerAdvice
public class GlobalExceptionHandler {

    /**
     * Handles cases where an element is not found.
     *
     * @param e the NoSuchElementException thrown when an element is not present
     * @return a ResponseEntity with a 404 Not Found status
     */
    @ExceptionHandler(NoSuchElementException.class)
    public ResponseEntity<Object> handleNoSuchElementException(NoSuchElementException e) {
        return ResponseEntity.notFound().build();
    }

    /**
     * Handles illegal argument exceptions, typically indicating bad input.
     *
     * @param e the IllegalArgumentException thrown when an argument is invalid
     * @return a ResponseEntity with a 400 Bad Request status and the exception message
     */
    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<Object> handleIllegalArgumentException(IllegalArgumentException e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
    }

    /**
     * Handles bad request exceptions, typically due to client-side errors.
     *
     * @param e the BadRequestException thrown when a request is malformed
     * @return a ResponseEntity with a 400 Bad Request status and the exception message
     */
    @ExceptionHandler(BadRequestException.class)
    public ResponseEntity<Object> handleBadRequestException(BadRequestException e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
    }

    /**
     * Handles data integrity violation exceptions, commonly due to database constraint violations.
     *
     * @param e the DataIntegrityViolationException thrown when data violates constraints
     * @return a ResponseEntity with a 409 Conflict status and the exception message
     */
    @ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity<Object> handleDataIntegrityViolationException(DataIntegrityViolationException e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
    }

    /**
     * Handles validation errors on method arguments.
     *
     * @param e the MethodArgumentNotValidException thrown when method arguments are invalid
     * @return a ResponseEntity with a 422 Unprocessable Entity status and the exception message
     */
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Object> handleMethodArgumentNotValidException(MethodArgumentNotValidException e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.UNPROCESSABLE_ENTITY);
    }

    /**
     * Handles general exceptions such as NullPointerException, SQLException, and RuntimeException.
     *
     * @param e the exception thrown due to various internal server errors
     * @return a ResponseEntity with a 500 Internal Server Error status and the exception message
     */
    @ExceptionHandler({NullPointerException.class, SQLException.class, RuntimeException.class})
    public ResponseEntity<Object> handleNullPointerException(Exception e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    /**
     * Handles all other exceptions not covered by specific handlers.
     *
     * @param e the Exception thrown for unexpected server errors
     * @return a ResponseEntity with a 500 Internal Server Error status and the exception message
     */
    @ExceptionHandler(Exception.class)
    public ResponseEntity<Object> handleException(Exception e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    /**
     * Handles custom ServiceItemCreationException, indicating errors during service item creation.
     *
     * @param e the ServiceItemCreationException thrown for creation errors
     * @return a ResponseEntity with a 400 Bad Request status and the exception message
     */
    @ExceptionHandler(ServiceItemCreationException.class)
    public ResponseEntity<Object> handleServiceItemCreationException(ServiceItemCreationException e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
    }
}
