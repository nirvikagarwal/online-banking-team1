package com.team1.bankApplication.repositories;

import com.team1.bankApplication.entities.Account;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AccountRepository extends JpaRepository<Account, Integer> {
    Account findByAccountNo(long accountNo);
    List<Account> findByUserUserId(int userId);
}
