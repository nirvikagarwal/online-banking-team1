package com.team1.bankApplication.service;

import com.team1.bankApplication.entities.User;

import java.util.List;

public interface UserService {
    User addUser(User user);

    List<User> getUsers();
//    User getUserById(int userId);
}
