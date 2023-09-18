package com.team1.bankApplication.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "accounts")
public class Account {
    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long accountNo;

    @NotNull(message = "Account Type cannot be NULL")
    @NotEmpty
    private String accountType;

    @NotNull(message = "Balance cannot be NULL")
    private double balance;

    @NotNull(message = "Branch name cannot be NULL")
    @NotEmpty
    private String branch;

    @NotNull(message = "IFSC cannot be NULL")
    @NotEmpty
    @Pattern(regexp = "^[A-Z]{4}[0-9]{7}$", message = "Invalid IFS Code")
    private String ifsc;

    @NotNull
    private boolean isActive;

    @NotNull
    private String occupation;

    @NotNull
    private long annualIncome;

    @NotNull
    private LocalDate dateOfOpening;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "user", referencedColumnName = "userId")
    private User user;

    private boolean netBankingEnabled = false;

    private String transactionPassword = null;
}
