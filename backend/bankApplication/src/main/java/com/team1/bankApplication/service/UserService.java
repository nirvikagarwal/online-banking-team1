package com.team1.bankApplication.service;

import com.team1.bankApplication.entities.User;

import java.util.List;

public interface UserService {
    User addUser(User user);

    List<User> getUsers();

    User getUserByUserId(int userId);

    User updateUser(int userId, User userDetails);

    void deleteUser(int userId);
}
