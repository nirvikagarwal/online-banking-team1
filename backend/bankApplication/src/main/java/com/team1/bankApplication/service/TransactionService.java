package com.team1.bankApplication.service;

import com.team1.bankApplication.dtos.TransactionDto;
import com.team1.bankApplication.entities.Account;
import com.team1.bankApplication.entities.Transaction;
import com.team1.bankApplication.entities.User;
import org.springframework.http.ResponseEntity;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

public interface TransactionService {
    Transaction addTransaction(TransactionDto transactionDto, Account userAccount, Account beneficiary);

    ResponseEntity<Object> executeTransaction(TransactionDto transactionDto, User user);

    Transaction getTransaction(int transactionId);

    List<Transaction> getAccountTransactions(Account account);

    ResponseEntity<Object> handleGetAccountTransactions(long accountNo, User user);

    List<Transaction> getAccountTransactions(Account account, LocalDateTime startDate, LocalDateTime endDate);

    ResponseEntity<Object> handleGetAccountTransactions(
            long accountNo,
            User user,
            LocalDate startDate,
            LocalDate endDate
    );
}

