package com.team1.bankApplication.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.List;

@ControllerAdvice
public class ErrorHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<String> handleMethodArgumentInvalid(MethodArgumentNotValidException ex) {

        StringBuilder sb = new StringBuilder();
        BindingResult bindingResult = ex.getBindingResult();
        List<ObjectError> errors = bindingResult.getAllErrors();
        for (ObjectError objectError : errors) {
            sb.append(objectError.getDefaultMessage()).append("\n");
        }

        return new ResponseEntity<>(sb.toString(), HttpStatus.BAD_REQUEST);

    }
}

