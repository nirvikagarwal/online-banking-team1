package com.team1.bankApplication.controllers;

import com.team1.bankApplication.dtos.TransactionDto;
import com.team1.bankApplication.dtos.TransactionResponseDto;
import com.team1.bankApplication.entities.Transaction;
import com.team1.bankApplication.entities.User;
import com.team1.bankApplication.service.TransactionService;
import com.team1.bankApplication.utils.UserExtract;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@CrossOrigin
@RequestMapping("/api/transactions")
public class TransactionController {
    @Autowired
    private TransactionService transactionService;

    @PostMapping
    public ResponseEntity<Object> addTransaction(@RequestBody TransactionDto transactionDto, Principal principal) {
        User user = UserExtract.getLoggedInUser(principal);
        return transactionService.executeTransaction(transactionDto, user);
    }

    @GetMapping("/{transactionId}")
    public ResponseEntity<Object> getTransaction(@PathVariable int transactionId) {
        Transaction transaction = transactionService.getTransaction(transactionId);
        if (transaction == null)
            return new ResponseEntity<>("Invalid Transaction ID", HttpStatus.NOT_FOUND);
        TransactionResponseDto returnValue = new TransactionResponseDto();
        BeanUtils.copyProperties(transaction, returnValue);
        returnValue.setFrom(transaction.getFrom().getAccountNo());
        returnValue.setTo(transaction.getTo().getAccountNo());
        return new ResponseEntity<>(returnValue, HttpStatus.OK);
    }

    @GetMapping("/account/{accountNo}")
    public ResponseEntity<Object> getAccountTransactions(@PathVariable long accountNo, Principal principal) {
        User user = UserExtract.getLoggedInUser(principal);
        return transactionService.handleGetAccountTransactions(accountNo, user);
    }
}
