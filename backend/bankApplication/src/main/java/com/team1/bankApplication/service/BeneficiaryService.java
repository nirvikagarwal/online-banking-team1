package com.team1.bankApplication.service;

import com.team1.bankApplication.dtos.BeneficiaryDto;
import com.team1.bankApplication.entities.Beneficiary;
import com.team1.bankApplication.entities.User;

import java.util.List;

public interface BeneficiaryService {
    Beneficiary addBeneficiary(BeneficiaryDto beneficiaryDto, User user);
    Beneficiary getBeneficiary(int beneficiaryId);
    List<Beneficiary> getBeneficiaryByUserId(int userId);
}
