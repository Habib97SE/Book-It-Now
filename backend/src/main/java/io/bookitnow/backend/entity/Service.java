package io.bookitnow.backend.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Size;
import lombok.*;

/**
 * Service Entity: Represents a service provided by a provider.
 *
 * @version 1.0
 * @since 1.0
 * @see Provider
 */
@Entity
@Table(name = "services")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Service {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @Size(min = 3, max = 50, message = "Name must be between 3 and 50 characters")
    private String name;


    private String description;

    @Column(nullable = false)
    @Min(value = 0, message = "Price must be greater than 0")
    private Double price;

    @Column(nullable = false)
    @Min(value = 0, message = "Duration must be greater than 0")
    private Double durationInMinutes;

    private String image;

    @Enumerated(EnumType.STRING)
    private Category category;

    @ManyToOne(fetch = FetchType.LAZY, optional = false, cascade = CascadeType.ALL)
    private Provider provider;



}
