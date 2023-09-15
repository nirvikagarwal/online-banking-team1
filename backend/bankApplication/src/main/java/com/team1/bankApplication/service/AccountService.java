package com.team1.bankApplication.service;

import com.team1.bankApplication.dtos.AccountDto;
import com.team1.bankApplication.entities.Account;
import com.team1.bankApplication.entities.User;
import org.springframework.stereotype.Service;

import java.util.List;

public interface AccountService {
    Account addAccount(AccountDto accountDto, User user);
    Account getAccount(long accountNo);

    List<Account> getAccounts();
    List<Account> getAccountsByUserId(int userId);
}
