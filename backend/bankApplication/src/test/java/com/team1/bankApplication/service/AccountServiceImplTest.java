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
        // Create a User for testing
        User user = createUser();

        // Create an AccountDto
        AccountDto accountDto = new AccountDto();
        accountDto.setAccountType("Savings");
        accountDto.setBranch("Main Branch");
        accountDto.setOccupation("Engineer");
        accountDto.setAnnualIncome(100000L);

        // Mock the accountRepository to return a saved account
        when(accountRepository.save(any(Account.class))).thenReturn(createAccount(user));

        // Call the addAccount method
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

        // Mock the accountRepository to return an account with the specified accountNo
        when(accountRepository.findByAccountNo(accountNo)).thenReturn(createAccount(null));

        // Call the getAccount method
        Account account = accountService.getAccount(accountNo);

        // Assertions
        assertNotNull(account);
        assertEquals(accountNo, account.getAccountNo());
    }

    @Test
    public void testGetAccounts() {
        List<Account> accountList = new ArrayList<>();
        accountList.add(createAccount(null));
        accountList.add(createAccount(null));

        // Mock the accountRepository to return a list of accounts
        when(accountRepository.findAll()).thenReturn(accountList);

        // Call the getAccounts method
        List<Account> accounts = accountService.getAccounts();

        // Assertions
        assertEquals(2, accounts.size());
    }

    @Test
    public void testGetAccountsByUserId() {
        int userId = 1;

        // Create a list of accounts associated with the user
        List<Account> userAccounts = new ArrayList<>();
        userAccounts.add(createAccount(null));
        userAccounts.add(createAccount(null));

        // Mock the userRepository to return a user
        when(userRepository.findById(userId)).thenReturn(java.util.Optional.of(createUser()));

        // Mock the accountRepository to return a list of accounts associated with the user
        when(accountRepository.findByUserUserId(userId)).thenReturn(userAccounts);

        // Call the getAccountsByUserId method
        List<Account> accounts = accountService.getAccountsByUserId(userId);

        // Assertions
        assertEquals(2, accounts.size());
    }

    @Test
    public void testRegisterNetBanking() {
        // Create an account with net banking disabled
        Account account = createAccount(null);
        assertFalse(account.isNetBankingEnabled());

        // Create a NetBankingDto
        NetBankingDto netBankingDto = new NetBankingDto();
        netBankingDto.setTransactionPassword("newPassword");

        // Call the registerNetBanking method
        accountService.registerNetBanking(account, netBankingDto);

        // Assertions
        assertTrue(account.isNetBankingEnabled());
        assertNotNull(account.getTransactionPassword());
    }

    @Test
    public void testToggleAccountStatus() {
        // Create an account with active status
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
        // Set other user properties as needed for testing
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
