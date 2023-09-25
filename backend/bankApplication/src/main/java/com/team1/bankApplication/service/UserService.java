package com.team1.bankApplication.service;

import com.team1.bankApplication.dtos.PasswordResetDto;
import com.team1.bankApplication.entities.User;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface UserService {
    User addUser(User user);

    List<User> getUsers();

    User getUserByUserId(int userId);

    User updateUser(int userId, User userDetails);

    void deleteUser(int userId);

    User getUserByEmail(String email);

    void resetUserPassword(User user, String newPassword);
    ResponseEntity<Object> handleResetPassword(PasswordResetDto passwordResetDto);
}
