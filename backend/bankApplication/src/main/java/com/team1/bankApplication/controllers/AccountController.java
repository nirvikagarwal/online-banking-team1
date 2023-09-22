package com.team1.bankApplication.controllers;

import com.team1.bankApplication.dtos.AccountDetailsResponseDto;
import com.team1.bankApplication.dtos.AccountDto;
import com.team1.bankApplication.dtos.NetBankingDto;
import com.team1.bankApplication.entities.Account;
import com.team1.bankApplication.entities.User;
import com.team1.bankApplication.service.AccountService;
import com.team1.bankApplication.utils.UserExtract;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/accounts")
@CrossOrigin
public class AccountController {

    @Autowired
    private AccountService accountService;

    @PostMapping
    public ResponseEntity<Account> addAccount(@Valid @RequestBody AccountDto accountDto, Principal principal) {
        User user = UserExtract.getLoggedInUser(principal);
        Account newAccount = accountService.addAccount(accountDto, user);
        return new ResponseEntity<>(newAccount, HttpStatus.CREATED);
    }

    @GetMapping("/{accountNo}")
    public ResponseEntity<Object> getAccount(@PathVariable long accountNo, Principal principal) {
        Account account = accountService.getAccount(accountNo);
        if (account == null)
            return new ResponseEntity<>("Invalid Account Number", HttpStatus.NOT_FOUND);
        User user = UserExtract.getLoggedInUser(principal);
        if (!user.isAdmin() && account.getUser().getUserId() != user.getUserId())
            return new ResponseEntity<>("User is not ADMIN", HttpStatus.NOT_FOUND);
        AccountDetailsResponseDto responseDto = new AccountDetailsResponseDto();
        BeanUtils.copyProperties(account, responseDto);
        responseDto.setUser(account.getUser().getFirstName());
        return ResponseEntity.ok(responseDto);
    }

    @GetMapping()
    public ResponseEntity<Object> getAccounts(Principal principal) {
        if (!UserExtract.isAdmin(principal))
            return new ResponseEntity<>("User is not ADMIN", HttpStatus.NOT_FOUND);
        List<Account> accounts = accountService.getAccounts();
        return ResponseEntity.ok(getAccountResponseList(accounts));
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerNetBanking(@Valid @RequestBody NetBankingDto netBankingDto, Principal principal) {
        User user = UserExtract.getLoggedInUser(principal);
        Account account = accountService.getAccount(netBankingDto.getAccountNo());
        if (account == null) {
            return new ResponseEntity<>("Invalid Account Number", HttpStatus.BAD_REQUEST);
        }

        if (account.getUser().getUserId() != user.getUserId()) {
            return new ResponseEntity<>("Account does not Exist", HttpStatus.BAD_REQUEST);
        }

        accountService.registerNetBanking(account, netBankingDto);

        return new ResponseEntity<>("Successfully Registered Bank Account for Net Banking", HttpStatus.OK);
    }

    @GetMapping("/{accountNo}/toggle")
    private ResponseEntity<Object> toggleStatus(@PathVariable long accountNo, Principal principal) {
        if(!UserExtract.isAdmin(principal))
            return new ResponseEntity<>("User is Not Admin", HttpStatus.BAD_REQUEST);
        Account account = accountService.getAccount(accountNo);
        if (account == null)
            return new ResponseEntity<>("Invalid Account Number", HttpStatus.NOT_FOUND);
        accountService.toggleAccountStatus(account);
        return ResponseEntity.ok("Account status changed");
    }

    private List<AccountDetailsResponseDto> getAccountResponseList(List<Account> accounts) {
        return accounts.stream()
                .map(account -> {
                    AccountDetailsResponseDto dto = new AccountDetailsResponseDto();
                    BeanUtils.copyProperties(account, dto);
                    dto.setUser(account.getUser().getFirstName());
                    return dto;
                }).collect(Collectors.toList());
    }
}
