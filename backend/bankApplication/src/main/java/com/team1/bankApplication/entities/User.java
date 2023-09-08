package com.team1.bankApplication.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId;

    @Column(nullable = false)
    @NotEmpty
    private String firstName;

    @Column(nullable = true)
    private String middleName;

    @Column(nullable = false)
    @NotEmpty
    private String lastName;

    @Column(nullable = false)
    @NotEmpty
    private String fatherName;

    @Column(nullable = false, unique = true)
    @Email(message = "Invalid Email Id")
    private String email;

    @Column(nullable = false)
    private LocalDate dob;

    @Column(nullable = false, unique = true)
    @Pattern(regexp = "^[9876][0-9]{9}$", message = "Invalid Mobile number")
    private String mobile;

    @Column(nullable = false, unique = true)
    @Pattern(regexp = "[A-Z]{5}[0-9]{4}[A-Z]", message = "Invalid PAN Number")
    private String pan;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false)
    private String password;
}
