package com.team1.bankApplication.repositories;

import com.team1.bankApplication.entities.Account;
import com.team1.bankApplication.entities.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface TransactionRepository extends JpaRepository<Transaction, Integer> {
    Transaction findByTransactionId(int transactionId);

    List<Transaction> findByFromOrTo(Account fromAccount, Account toAccount);

    List<Transaction> findByFromOrToAndTimestampBetween(
            Account fromAccount,
            Account toAccount,
            LocalDateTime startDate,
            LocalDateTime endDate
    );
}
