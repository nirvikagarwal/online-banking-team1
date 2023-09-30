package com.team1.bankApplication.service;

import com.team1.bankApplication.dtos.PasswordResetDto;
import com.team1.bankApplication.entities.User;
import com.team1.bankApplication.exceptions.UserNotFoundException;
import com.team1.bankApplication.repositories.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

public class UserServiceImplTest {

    @InjectMocks
    private UserServiceImpl userService;

    @Mock
    private UserRepository userRepository;

    @BeforeEach
    public void init() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testAddUser() {
        User user = new User(
                1,
                "John",
                null,
                "Doe",
                "Sam Doe",
                "test@gmail.com",
                LocalDate.parse("2000-12-10"),
                "9088823456",
                "ABIDE1234F",
                "123 Main St",
                "password",
                true);

        when(userRepository.save(any(User.class))).thenReturn(user);

        User addedUser = userService.addUser(user);
        assertEquals("John", addedUser.getFirstName());
        assertEquals("test@gmail.com", addedUser.getEmail());
        assertNull(addedUser.getMiddleName());
        assertEquals("Doe", addedUser.getLastName());
        assertEquals("Sam Doe", addedUser.getFatherName());
        assertEquals(LocalDate.parse("2000-12-10"), addedUser.getDob());
        assertEquals("9088823456", addedUser.getMobile());
        assertEquals("ABIDE1234F", addedUser.getPan());
        assertEquals("123 Main St", addedUser.getAddress());
        assertTrue(addedUser.isAdmin());
    }

    @Test
    public void testGetUsers() {
        List<User> userList = new ArrayList<>();
        userList.add(new User());
        userList.add(new User());

        when(userRepository.findAll()).thenReturn(userList);

        List<User> users = userService.getUsers();
        assertEquals(2, users.size());
    }

    @Test
    public void testGetUserByUserId() {
        User user = new User();
        user.setUserId(1);

        when(userRepository.findByUserId(1)).thenReturn(Optional.of(user));

        User retrievedUser = userService.getUserByUserId(1);
        assertEquals(1, retrievedUser.getUserId());
    }

    @Test
    public void testGetUserByEmail() {
        User user = new User();
        user.setEmail("test@gmail.com");
        when(userRepository.findOneByEmail("test@gmail.com")).thenReturn(Optional.of(user));

        User retrievedUser = userService.getUserByEmail("test@gmail.com");
        assertEquals("test@gmail.com", retrievedUser.getEmail());
    }

    @Test
    public void testUpdateUser() {
        User user = new User();
        user.setUserId(1);

        User userDetails = new User();
        userDetails.setFirstName("UpdatedFirstName");

        when(userRepository.findByUserId(1)).thenReturn(Optional.of(user));
        when(userRepository.save(any(User.class))).thenReturn(user);

        User updatedUser = userService.updateUser(1, userDetails);
        assertEquals("UpdatedFirstName", updatedUser.getFirstName());
    }

    @Test
    public void testDeleteUser() {
        User user = new User();
        user.setUserId(1);

        when(userRepository.findByUserId(1)).thenReturn(Optional.of(user));

        userService.deleteUser(1);
    }

    @Test
    public void testResetUserPassword() {
        User user = new User();
        when(userRepository.save(any(User.class))).thenReturn(user);

        userService.resetUserPassword(user, "newPassword");
        assertTrue(new BCryptPasswordEncoder().matches("newPassword", user.getPassword()));
    }

    @Test
    public void testHandleResetPasswordValid() {
        PasswordResetDto passwordResetDto = new PasswordResetDto();
        passwordResetDto.setEmail("test@example.com");
        passwordResetDto.setMobile("1234567890");
        passwordResetDto.setDob(LocalDate.of(2000, 1, 1));
        passwordResetDto.setNewPassword("newPassword");

        // Create a user with matching email, mobile, and DOB
        User user = new User();
        user.setEmail("test@example.com");
        user.setMobile("1234567890");
        user.setDob(LocalDate.of(2000, 1, 1));

        when(userRepository.findOneByEmail("test@example.com")).thenReturn(Optional.of(user));

        ResponseEntity<Object> responseEntity = userService.handleResetPassword(passwordResetDto);
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals("Password reset successfully", responseEntity.getBody());
    }

    @Test
    public void testHandleResetPasswordInvalidUser() {
        // Create a PasswordResetDto with valid input
        PasswordResetDto passwordResetDto = new PasswordResetDto();
        passwordResetDto.setEmail("test@example.com");
        passwordResetDto.setMobile("1234567890");
        passwordResetDto.setDob(LocalDate.of(2000, 1, 1));
        passwordResetDto.setNewPassword("newPassword");

        // No user with the provided email
        when(userRepository.findOneByEmail("test@example.com")).thenReturn(Optional.empty());
        try {
            ResponseEntity<Object> responseEntity = userService.handleResetPassword(passwordResetDto);
        } catch (UserNotFoundException e) {
            assertEquals(HttpStatus.NOT_FOUND, e.getStatus());
            assertEquals("Invalid User ID", e.getMessage());
        }
    }

    @Test
    public void testHandleResetPasswordInvalidDetails() {
        PasswordResetDto passwordResetDto = new PasswordResetDto();
        passwordResetDto.setEmail("test@example.com");
        passwordResetDto.setMobile("1234567890");
        passwordResetDto.setDob(LocalDate.of(2000, 1, 1));
        passwordResetDto.setNewPassword("newPassword");

        User user = new User();
        user.setEmail("test@example.com");
        user.setMobile("9876543210"); // Different mobile number

        when(userRepository.findOneByEmail("test@example.com")).thenReturn(Optional.of(user));

        ResponseEntity<Object> responseEntity = userService.handleResetPassword(passwordResetDto);
        assertEquals(HttpStatus.BAD_REQUEST, responseEntity.getStatusCode());
        assertEquals("Invalid User details", responseEntity.getBody());
    }
}
