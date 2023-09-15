package com.team1.bankApplication.service;

import com.team1.bankApplication.dtos.LoginDto;

public interface AuthService {
    String login(LoginDto loginDto);
}
