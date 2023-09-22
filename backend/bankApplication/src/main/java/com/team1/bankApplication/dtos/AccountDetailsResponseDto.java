package com.team1.bankApplication.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class AccountDetailsResponseDto {
    private long accountNo;
    private String accountType;
    private double balance;
    private String branch;
    private String ifsc;
    private boolean isActive;
    private LocalDate dateOfOpening;
    private boolean netBankingEnabled;
    private String user;
}
