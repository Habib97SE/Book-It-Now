package io.bookitnow.backend.v1.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.PastOrPresent;
import jakarta.validation.constraints.Pattern;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @Pattern(regexp = "^[A-Za-z'-,]$", message = "First name should contain only alphabets, hyphen, apostrophe, and comma")
    private String firstName;

    @Column(nullable = false)
    @Pattern(regexp = "^[A-Za-z'-,]$", message = "Last name should contain only alphabets, hyphen, apostrophe, and comma")
    private String lastName;

    @Column(nullable = false, unique = true)
    @Email(message = "Email should be valid")
    private String email;

    @Column(nullable = false)
    private String phone;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String profilePicture;

    private String address;
    private String city;
    private String country;

    @Column(nullable = false)
    private Boolean isProvider;

    @Column(nullable = false, columnDefinition = "BOOLEAN DEFAULT TRUE")
    private Boolean isActive;

    @Column(nullable = false)
    @PastOrPresent
    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private LocalDateTime createdAt;

    @PastOrPresent
    @UpdateTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private LocalDateTime updatedAt;

}
