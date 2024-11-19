# Use a base image with Java installed
FROM maven:3.9.4-eclipse-temurin-17

# Set the working directory in the container
WORKDIR /app

COPY pom.xml .

COPY src src

# Building a package
RUN mvn clean package

# Expose the port on which the application will run
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "./target/Canine-Cloud-0.0.1-SNAPSHOT.jar"]