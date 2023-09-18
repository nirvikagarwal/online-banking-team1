package com.team1.bankApplication.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
@Table(name = "beneficiaries")
public class Beneficiary {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int beneficiaryId;

    @NotNull(message = "Beneficiary cannot be NULL")
    @NotEmpty(message = "Beneficiary cannot be Empty")
    private String beneficiaryName;

    @NotNull(message = "Account No cannot be NULL")
    private long accountNo;

    @NotNull(message = "Bank name cannot be NULL")
    @NotEmpty(message = "Bank name cannot be Empty")
    private String bankName;

    @NotNull(message = "IFSC cannot be NULL")
    @NotEmpty
    @Pattern(regexp = "^[A-Z]{4}[0-9]{7}$", message = "Invalid IFS Code")
    private String ifsc;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "addedBy", referencedColumnName = "userId")
    private User user;
}
