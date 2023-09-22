package com.team1.bankApplication.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDetailsResponseDto {
    private int userId;
    private String firstName;
    private String middleName;
    private String lastName;
    private String email;
    private LocalDate dob;
    private String mobile;
    private String pan;
    private String address;
    private boolean isAdmin;
}