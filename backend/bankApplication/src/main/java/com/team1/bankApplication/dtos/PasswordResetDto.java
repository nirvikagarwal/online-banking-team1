package com.team1.bankApplication.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class PasswordResetDto {
    private String email;
    private String mobile;
    private LocalDate dob;
    private String newPassword;
}
