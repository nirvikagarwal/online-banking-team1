package com.team1.bankApplication.service;

import com.team1.bankApplication.entities.User;
import com.team1.bankApplication.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User addUser(User user) {
        User newUser = userRepository.save(user);
        return newUser;
    }

    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }
//
//    @Override
//    public User getUserById(int userId) {
//        var user = userRepository.findById(userId);
//
//    }
}
