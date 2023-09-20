package com.team1.bankApplication.dtos;

import com.team1.bankApplication.entities.Account;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class TransactionResponseDto {
    private int transactionId;
    private double amount;
    private double userStartBalance;
    private double beneficiaryStartBalance;
    private LocalDateTime timestamp;
    private long from;
    private long to;

}
