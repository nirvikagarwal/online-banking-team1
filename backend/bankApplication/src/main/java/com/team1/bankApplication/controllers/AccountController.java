package com.team1.bankApplication.controllers;

import com.team1.bankApplication.dtos.AccountDto;
import com.team1.bankApplication.entities.Account;
import com.team1.bankApplication.service.AccountService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/accounts")
@CrossOrigin
public class AccountController {

    @Autowired
    private AccountService accountService;

    @PostMapping
    public ResponseEntity<Account> addAccount(@Valid @RequestBody AccountDto accountDto) {
        Account newAccount = accountService.addAccount(accountDto);
        return new ResponseEntity<>(newAccount, HttpStatus.CREATED);
    }

    @GetMapping("/{accountNo}")
    public ResponseEntity<Account> getAccount(@PathVariable long accountNo) {
        Account account = accountService.getAccount(accountNo);
        return ResponseEntity.ok(account);
    }

    @GetMapping()
    public ResponseEntity<List<Account>> getAccounts() {
        List<Account> accounts = accountService.getAccounts();
        return ResponseEntity.ok(accounts);
    }
}
