package com.team1.bankApplication.exceptions;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;

@Getter
@Setter
@AllArgsConstructor
public class UserNotFoundException extends RuntimeException {
    private String message;
    private HttpStatus status;

    public UserNotFoundException() {
        this.message = "Invalid User ID";
        this.status = HttpStatus.NOT_FOUND;
    }
}
