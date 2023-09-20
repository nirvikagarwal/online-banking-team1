package com.team1.bankApplication.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "transactions")
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int transactionId;

    @NotNull(message = "Type cannot be NULL")
    @NotEmpty
    private String type;

    @NotNull
    private double userStartBalance;

    @NotNull
    private double amount;

    @NotNull
    private double beneficiaryStartBalance;

    @NotNull
    private LocalDateTime timestamp;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "user", referencedColumnName = "accountNo")
    private Account from;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "beneficiary", referencedColumnName = "accountNo")
    private Account to;
}
