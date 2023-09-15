package com.team1.bankApplication.service;

import com.team1.bankApplication.dtos.LoginDto;
import com.team1.bankApplication.entities.User;
import com.team1.bankApplication.security.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {

    private final AuthenticationManager authenticationManager;
    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @Autowired
    private UserService userService;

    @Autowired
    public AuthServiceImpl(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }


    @Override
    public String login(LoginDto loginDto) {

        User user = userService.getUserByEmail(loginDto.getEmail());
        boolean isMatch = new BCryptPasswordEncoder().matches(loginDto.getPassword(), user.getPassword());
        if (isMatch) {
            return jwtTokenProvider.generateToken(loginDto.getEmail());
        }
        return null;
    }
}

