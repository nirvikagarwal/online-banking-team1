package com.team1.bankApplication.service;

import com.team1.bankApplication.dtos.TransactionDto;
import com.team1.bankApplication.dtos.TransactionResponseDto;
import com.team1.bankApplication.entities.Account;
import com.team1.bankApplication.entities.Transaction;
import com.team1.bankApplication.entities.User;
import com.team1.bankApplication.repositories.TransactionRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TransactionServiceImpl implements TransactionService {
    @Autowired
    AccountService accountService;

    @Autowired
    TransactionRepository transactionRepository;

    @Override
    public Transaction addTransaction(TransactionDto transactionDto, Account userAccount, Account beneficiary) {
        Transaction transaction = new Transaction();
        BeanUtils.copyProperties(transactionDto, transaction);
        transaction.setFrom(userAccount);
        transaction.setTo(beneficiary);
        transaction.setTimestamp(LocalDateTime.now());
        transaction.setUserStartBalance(userAccount.getBalance());
        transaction.setBeneficiaryStartBalance(beneficiary.getBalance());
        userAccount.setBalance(userAccount.getBalance() - transactionDto.getAmount());
        beneficiary.setBalance(beneficiary.getBalance() + transactionDto.getAmount());

        return transactionRepository.save(transaction);
    }

    public ResponseEntity<Object> executeTransaction(TransactionDto transactionDto, User user) {
        System.out.println(transactionDto);
        Account userAccount = accountService.getAccount(transactionDto.getUserAccountNo());
        if (userAccount == null || userAccount.getUser().getUserId() != user.getUserId())
            return new ResponseEntity<>("Invalid Account Number", HttpStatus.BAD_REQUEST);
        if (!userAccount.isNetBankingEnabled())
            return new ResponseEntity<>("Net Banking is not enabled", HttpStatus.BAD_REQUEST);
        Account beneficiary = accountService.getAccount(transactionDto.getBeneficiaryAccountNo());
        if (beneficiary == null || beneficiary.getUser().getUserId() != user.getUserId())
            return new ResponseEntity<>("Beneficiary does not exist", HttpStatus.BAD_REQUEST);
        if (transactionDto.getAmount() <= 0)
            return new ResponseEntity<>("Amount should be greater then 0", HttpStatus.BAD_REQUEST);
        if (transactionDto.getType().equals("debit") && transactionDto.getAmount() > userAccount.getBalance())
            return new ResponseEntity<>("Insufficient Funds", HttpStatus.BAD_REQUEST);
        boolean isMatch = new BCryptPasswordEncoder().matches(transactionDto.getTransactionPassword(), userAccount.getTransactionPassword());
        if (!isMatch) return new ResponseEntity<>("Incorrect Transaction Password", HttpStatus.BAD_REQUEST);
        Transaction transaction = addTransaction(transactionDto, userAccount, beneficiary);
        TransactionResponseDto returnValue = new TransactionResponseDto();
        BeanUtils.copyProperties(transaction, returnValue);
        return new ResponseEntity<>(returnValue, HttpStatus.CREATED);
    }

    @Override
    public Transaction getTransaction(int transactionId) {
        return transactionRepository.findByTransactionId(transactionId);
    }

    @Override
    public List<Transaction> getAccountTransactions(Account account) {
        List<Transaction> transactions = transactionRepository.findByFromOrTo(account, account);
        return transactions;
    }

    @Override
    public ResponseEntity<Object> handleGetAccountTransactions(long accountNo, User user) {
        Account account = accountService.getAccount(accountNo);
        if (account == null || account.getUser().getUserId() != user.getUserId())
            return new ResponseEntity<>("Invalid Account Number", HttpStatus.NOT_FOUND);
        List<Transaction> transactions = getAccountTransactions(account);

        return ResponseEntity.ok(getTransactionResponseList(transactions));
    }

    @Override
    public List<Transaction> getAccountTransactions(Account account, LocalDateTime startDate, LocalDateTime endDate) {
        return transactionRepository.findByFromOrToAndTimestampBetween(
                account,
                account,
                startDate,
                endDate
        );
    }

    @Override
    public ResponseEntity<Object> handleGetAccountTransactions(
            long accountNo, User user, LocalDate startDate, LocalDate endDate) {
        Account account = accountService.getAccount(accountNo);
        List<Transaction> transactions = getAccountTransactions(
                account,
                startDate.atStartOfDay(),
                endDate.atTime(LocalTime.MAX));
        return ResponseEntity.ok(getTransactionResponseList(transactions));
    }

    private List<TransactionResponseDto> getTransactionResponseList(List<Transaction> transactions) {
        List<TransactionResponseDto> transactionResponseDtoList = transactions.stream()
                .map(transaction -> {
                    TransactionResponseDto dto = new TransactionResponseDto();
                    BeanUtils.copyProperties(transaction, dto);
                    dto.setFrom(transaction.getFrom().getAccountNo());
                    dto.setTo(transaction.getTo().getAccountNo());
                    return dto;
                }).collect(Collectors.toList());
        return transactionResponseDtoList;
    }
}
