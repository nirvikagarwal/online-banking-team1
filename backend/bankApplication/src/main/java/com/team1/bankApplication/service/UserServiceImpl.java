package com.team1.bankApplication.service;

import com.team1.bankApplication.dtos.PasswordResetDto;
import com.team1.bankApplication.entities.User;
import com.team1.bankApplication.exceptions.UserNotFoundException;
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
        return userRepository.save(user);
    }

    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserByUserId(int userId) throws UserNotFoundException {
        return userRepository.findByUserId(userId)
                .orElseThrow(() -> new UserNotFoundException());
    }

    @Override
    public User updateUser(int userId, User userDetails) throws UserNotFoundException {
        User user = userRepository.findByUserId(userId)
                .orElseThrow(UserNotFoundException::new);
        user.setFirstName(userDetails.getFirstName());
        user.setMiddleName(userDetails.getMiddleName());
        user.setLastName(userDetails.getLastName());
        user.setFatherName(userDetails.getFatherName());
        user.setEmail(userDetails.getEmail());
        user.setDob(userDetails.getDob());
        user.setMobile(userDetails.getMobile());
        user.setAddress(userDetails.getAddress());
        user.setPan(userDetails.getPan());

        return userRepository.save(user);
    }

    @Override
    public void deleteUser(int userId) throws UserNotFoundException {
        User user = userRepository.findByUserId(userId)
                .orElseThrow(() -> new UserNotFoundException());
        userRepository.delete(user);
    }

    @Override
    public User getUserByEmail(String email) throws UserNotFoundException {
        return userRepository.findOneByEmail(email)
                .orElseThrow(() -> new UserNotFoundException());
    }

    @Override
    public void resetUserPassword(User user, String newPassword) {
        user.setPassword(PasswordEncoder.generate(newPassword));
        userRepository.save(user);
    }

    @Override
    public ResponseEntity<Object> handleResetPassword(PasswordResetDto passwordResetDto) throws UserNotFoundException {
        User user = userRepository.findOneByEmail(passwordResetDto.getEmail())
                .orElseThrow(() -> new UserNotFoundException());
        if (user.getMobile().equals(passwordResetDto.getMobile()) && user.getDob().equals(passwordResetDto.getDob())) {
            resetUserPassword(user, passwordResetDto.getNewPassword());
            return ResponseEntity.ok("Password reset successfully");
        }
        return new ResponseEntity<>("Invalid User details", HttpStatus.BAD_REQUEST);
    }
}
