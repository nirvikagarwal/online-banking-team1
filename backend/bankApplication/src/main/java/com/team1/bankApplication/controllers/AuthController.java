package com.team1.bankApplication.controllers;

import com.team1.bankApplication.dtos.JwtAuthResponseDto;
import com.team1.bankApplication.dtos.LoginDto;
import com.team1.bankApplication.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.http.HttpResponse;

@RestController
@CrossOrigin
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private AuthService authService;
    @PostMapping("/login")
    public ResponseEntity<Object> login(@RequestBody LoginDto loginDto)  {
        String token=authService.login(loginDto);

        if (token != null) {
            JwtAuthResponseDto response = new JwtAuthResponseDto();
            response.setAccessToken(token);

            return ResponseEntity.ok(response);
        }

        return new ResponseEntity<>("Username or password is invalid", HttpStatus.BAD_REQUEST);
    }
}
