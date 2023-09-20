package com.team1.bankApplication.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class TransactionDto {
    private String type;
    private double amount;
    private int beneficiaryAccountNo;
    private long userAccountNo;
    private String transactionPassword;

    @Override
    public String toString() {
        return "TransactionDto{" +
                "type='" + type + '\'' +
                ", amount=" + amount +
                ", beneficiaryAccountNo=" + beneficiaryAccountNo +
                ", userAccountNo=" + userAccountNo +
                ", transactionPassword='" + transactionPassword + '\'' +
                '}';
    }
}
