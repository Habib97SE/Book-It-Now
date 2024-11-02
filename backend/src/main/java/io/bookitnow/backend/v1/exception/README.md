Here is a list of all exceptions that are thrown by the application. Each exception is a subclass of the `RuntimeException` class. The exceptions are thrown when the application encounters an error. The exceptions are caught by the `GlobalExceptionHandler` class and the appropriate response is sent to the client.

## List of Exceptions

1. `NoSuchElementException`: This exception is thrown when the application tries to access an element that does not exist in the database. The exception is thrown when the application tries to access a booking that does not exist in the database.
    - Example: `NoSuchElementException` is thrown when the application tries to access a booking that does not exist in the database. The exception is caught by the `GlobalExceptionHandler` class and the appropriate response is sent to the client.


2. `IllegalArgumentException`: This exception is thrown when the application tries to access an element with an invalid argument. The exception is thrown when the application tries to access a booking with an invalid argument.
    - Example: `IllegalArgumentException` is thrown when the application tries to access a booking with an invalid argument. The exception is caught by the `GlobalExceptionHandler` class and the appropriate response is sent to the client.


3. `BadRequestException`: This exception is thrown when the application receives a bad request from the client. The exception is thrown when the application receives a bad request from the client.
    - Example: `BadRequestException` is thrown when the application receives a bad request from the client. The exception is caught by the `GlobalExceptionHandler` class and the appropriate response is sent to the client.


4. `DataIntegrityViolationException`: This exception is thrown when the application tries to access an element with a data integrity violation. The exception is thrown when the application tries to access a booking with a data integrity violation.
    - Example: `DataIntegrityViolationException` is thrown when the application tries to access a booking with a data integrity violation. The exception is caught by the `GlobalExceptionHandler` class and the appropriate response is sent to the client.


5. `MethodArgumentNotValidException`: This exception is thrown when the application receives an invalid argument from the client. The exception is thrown when the application receives an invalid argument from the client.
   - Example: `MethodArgumentNotValidException` is thrown when the application receives an invalid argument from the client. The exception is caught by the `GlobalExceptionHandler` class and the appropriate response is sent to the client. 


6. `[NullPointerException, SQLException, RuntimeException]`: These exceptions are thrown when the application encounters an error. The exceptions are caught by the `GlobalExceptionHandler` class and the appropriate response is sent to the client.
    - Example: `NullPointerException` is thrown when the application tries to access a null object. The exception is caught by the `GlobalExceptionHandler` class and the appropriate response is sent to the client.
    - Example: `SQLException` is thrown when the application encounters an error while executing a SQL query. The exception is caught by the `GlobalExceptionHandler` class and the appropriate response is sent to the client.
    - Example: `RuntimeException` is thrown when the application encounters an error. The exception is caught by the `GlobalExceptionHandler` class and the appropriate response is sent to the client.