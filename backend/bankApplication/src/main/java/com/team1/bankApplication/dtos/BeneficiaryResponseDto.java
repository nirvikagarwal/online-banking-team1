package com.team1.bankApplication.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class BeneficiaryResponseDto {
    private int beneficiaryId;
    private String beneficiaryName;
    private long accountNo;
    private String bankName;
    private String ifsc;
}
