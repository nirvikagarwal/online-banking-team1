package com.team1.bankApplication.repositories;

import com.team1.bankApplication.entities.Beneficiary;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BeneficiaryRepository extends JpaRepository<Beneficiary, Integer> {
    Beneficiary findByBeneficiaryId(int beneficiaryId);
    List<Beneficiary> findByUserUserId(int userId);
}
