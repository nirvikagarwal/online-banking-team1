package com.team1.bankApplication.service;

import com.team1.bankApplication.dtos.PasswordResetDto;
import com.team1.bankApplication.entities.User;
import com.team1.bankApplication.repositories.UserRepository;
import com.team1.bankApplication.utils.PasswordEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User addUser(User user) {
        user.setPassword(PasswordEncoder.generate(user.getPassword()));
        User newUser = userRepository.save(user);
        return newUser;
    }

    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserByUserId(int userId) {
        return userRepository.findByUserId(userId);
    }

    @Override
    public User updateUser(int userId, User userDetails) {
        User user = userRepository.findByUserId(userId);
        user.setFirstName(userDetails.getFirstName());
        user.setMiddleName(userDetails.getMiddleName());
        user.setLastName(userDetails.getLastName());
        user.setFatherName(userDetails.getFatherName());
        user.setEmail(userDetails.getEmail());
        user.setDob(userDetails.getDob());
        user.setMobile(userDetails.getMobile());
        user.setAddress(userDetails.getAddress());
        user.setPan(userDetails.getPan());

        User updatedUser = userRepository.save(user);
        return updatedUser;
    }

    @Override
    public void deleteUser(int userId) {
        User user = userRepository.findByUserId(userId);
        userRepository.delete(user);
    }

    @Override
    public User getUserByEmail(String email) {
        User user = userRepository.findOneByEmail(email);
        return user;
    }

    @Override
    public void resetUserPassword(User user, String newPassword) {
        user.setPassword(PasswordEncoder.generate(newPassword));
        userRepository.save(user);
    }

    @Override
    public ResponseEntity<Object> handleResetPassword(PasswordResetDto passwordResetDto) {
        User user = userRepository.findOneByEmail(passwordResetDto.getEmail());
        if (user == null)
            return new ResponseEntity<>("User doesn't exist", HttpStatus.BAD_REQUEST);
        if (user.getMobile().equals(passwordResetDto.getMobile()) && user.getDob().equals(passwordResetDto.getDob())) {
            resetUserPassword(user, passwordResetDto.getNewPassword());
            return ResponseEntity.ok("Password reset successfully");
        }
        return new ResponseEntity<>("Invalid User details", HttpStatus.BAD_REQUEST);
    }
}
