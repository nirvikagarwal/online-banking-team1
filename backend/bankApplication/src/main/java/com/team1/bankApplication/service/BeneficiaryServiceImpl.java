package com.team1.bankApplication.service;

import com.team1.bankApplication.dtos.BeneficiaryDto;
import com.team1.bankApplication.entities.Account;
import com.team1.bankApplication.entities.Beneficiary;
import com.team1.bankApplication.entities.User;
import com.team1.bankApplication.repositories.BeneficiaryRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BeneficiaryServiceImpl implements BeneficiaryService{
    @Autowired
    private BeneficiaryRepository beneficiaryRepository;

    @Override
    public Beneficiary addBeneficiary(BeneficiaryDto beneficiaryDto, User user) {
        Beneficiary beneficiary = new Beneficiary();
        BeanUtils.copyProperties(beneficiaryDto, beneficiary);
        beneficiary.setUser(user);

        Beneficiary newBeneficiary = beneficiaryRepository.save(beneficiary);
        return newBeneficiary;
    }

    @Override
    public Beneficiary getBeneficiary(int beneficiaryId) {
        Beneficiary beneficiary = beneficiaryRepository.findByBeneficiaryId(beneficiaryId);
        return beneficiary;
    }

    @Override
    public List<Beneficiary> getBeneficiaryByUserId(int userId) {
        List<Beneficiary> beneficiaries = beneficiaryRepository.findByUserUserId(userId);
        return beneficiaries;
    }
}
