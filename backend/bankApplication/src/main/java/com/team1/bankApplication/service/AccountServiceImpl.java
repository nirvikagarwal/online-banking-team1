package com.team1.bankApplication.service;

import com.team1.bankApplication.dtos.AccountDetailsResponseDto;
import com.team1.bankApplication.dtos.AccountDto;
import com.team1.bankApplication.dtos.NetBankingDto;
import com.team1.bankApplication.entities.Account;
import com.team1.bankApplication.entities.User;
import com.team1.bankApplication.repositories.AccountRepository;
import com.team1.bankApplication.repositories.UserRepository;
import com.team1.bankApplication.utils.PasswordEncoder;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Random;

@Service
public class AccountServiceImpl implements AccountService{

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public Account addAccount(AccountDto accountDto, User user) {
        Account account = new Account();
        BeanUtils.copyProperties(accountDto, account);
        account.setActive(true);
        account.setDateOfOpening(LocalDate.now());
        account.setIfsc("IFSC0001234");
        account.setBalance(0.0);

        long randomAccountNumber = new Random().nextInt(0, Integer.MAX_VALUE);
        account.setAccountNo(randomAccountNumber);
        account.setUser(user);

        Account newAccount = accountRepository.save(account);
        return newAccount;
    }

    @Override
    public Account getAccount(long accountNo) {
        Account account = accountRepository.findByAccountNo(accountNo);
        return account;
    }

    @Override
    public List<Account> getAccounts() {
        List<Account> accounts = accountRepository.findAll();
        return accounts;
    }

    @Override
    public List<Account> getAccountsByUserId(int userId) {
        List<Account> userAccounts = accountRepository.findByUserUserId(userId);
        return userAccounts;
    }

    @Override
    public void registerNetBanking(Account account, NetBankingDto netBankingDto) {
        account.setNetBankingEnabled(true);
        account.setTransactionPassword(PasswordEncoder.generate(netBankingDto.getTransactionPassword()));
        accountRepository.save(account);
    }
}
