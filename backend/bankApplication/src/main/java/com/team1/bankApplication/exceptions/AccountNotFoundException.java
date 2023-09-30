package com.team1.bankApplication.exceptions;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;

@Getter
@Setter
@AllArgsConstructor
public class AccountNotFoundException extends RuntimeException{
    private String message;
    private HttpStatus status;

    public AccountNotFoundException() {
        this.message = "Invalid Account Number";
        this.status = HttpStatus.NOT_FOUND;
    }
}
