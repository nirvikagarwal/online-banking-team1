package com.team1.bankApplication.service;

import com.team1.bankApplication.dtos.AccountDto;
import com.team1.bankApplication.dtos.NetBankingDto;
import com.team1.bankApplication.entities.Account;
import com.team1.bankApplication.entities.User;
import com.team1.bankApplication.repositories.AccountRepository;
import com.team1.bankApplication.repositories.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

public class AccountServiceImplTest {

    @InjectMocks
    private AccountServiceImpl accountService;

    @Mock
    private AccountRepository accountRepository;

    @Mock
    private UserRepository userRepository;

    @BeforeEach
    public void init() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testAddAccount() {
        User user = createUser();

        AccountDto accountDto = new AccountDto();
        accountDto.setAccountType("Savings");
        accountDto.setBranch("Main Branch");
        accountDto.setOccupation("Engineer");
        accountDto.setAnnualIncome(100000L);

        when(accountRepository.save(any(Account.class))).thenReturn(createAccount(user));

        Account newAccount = accountService.addAccount(accountDto, user);

        // Assertions
        assertNotNull(newAccount);
        assertEquals("Savings", newAccount.getAccountType());
        assertEquals("Main Branch", newAccount.getBranch());
        assertEquals("Engineer", newAccount.getOccupation());
        assertEquals(100000.0, newAccount.getAnnualIncome());
        assertTrue(newAccount.isActive());
        assertNotNull(newAccount.getDateOfOpening());
        assertEquals("IFSC0001234", newAccount.getIfsc());
        assertTrue(newAccount.getAccountNo() > 0);
        assertEquals(user, newAccount.getUser());
    }

    @Test
    public void testGetAccount() {
        long accountNo = 12345L;

        when(accountRepository.findByAccountNo(accountNo)).thenReturn(Optional.of(createAccount(null)));

        Account account = accountService.getAccount(accountNo);

        assertNotNull(account);
        assertEquals(accountNo, account.getAccountNo());
    }

    @Test
    public void testGetAccounts() {
        List<Account> accountList = new ArrayList<>();
        accountList.add(createAccount(null));
        accountList.add(createAccount(null));

        when(accountRepository.findAll()).thenReturn(accountList);

        List<Account> accounts = accountService.getAccounts();

        assertEquals(2, accounts.size());
    }

    @Test
    public void testGetAccountsByUserId() {
        int userId = 1;

        List<Account> userAccounts = new ArrayList<>();
        userAccounts.add(createAccount(null));
        userAccounts.add(createAccount(null));

        when(userRepository.findById(userId)).thenReturn(java.util.Optional.of(createUser()));

        when(accountRepository.findByUserUserId(userId)).thenReturn(userAccounts);

        List<Account> accounts = accountService.getAccountsByUserId(userId);

        assertEquals(2, accounts.size());
    }

    @Test
    public void testRegisterNetBanking() {
        Account account = createAccount(null);
        assertFalse(account.isNetBankingEnabled());

        NetBankingDto netBankingDto = new NetBankingDto();
        netBankingDto.setTransactionPassword("newPassword");

        accountService.registerNetBanking(account, netBankingDto);

        // Assertions
        assertTrue(account.isNetBankingEnabled());
        assertNotNull(account.getTransactionPassword());
    }

    @Test
    public void testToggleAccountStatus() {
        Account account = createAccount(null);
        assertTrue(account.isActive());

        Account newAccount = createAccount(null);
        newAccount.setActive(false);
        when(accountRepository.save(any(Account.class))).thenReturn(newAccount);

        Account updatedAccount = accountService.toggleAccountStatus(account);

        // Assertions
        assertFalse(updatedAccount.isActive());
    }

    private User createUser() {
        User user = new User();
        user.setUserId(1);
        return user;
    }

    private Account createAccount(User user) {
        Account account = new Account();
        account.setAccountNo(12345L);
        account.setAccountType("Savings");
        account.setUser(user);
        account.setBranch("Main Branch");
        account.setOccupation("Engineer");
        account.setAnnualIncome(100000L);
        account.setActive(true);
        account.setDateOfOpening(LocalDate.now());
        account.setIfsc("IFSC0001234");

        return account;
    }
}
