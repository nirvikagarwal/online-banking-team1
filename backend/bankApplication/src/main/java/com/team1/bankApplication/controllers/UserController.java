package com.team1.bankApplication.controllers;

import com.team1.bankApplication.dtos.AccountDetailsResponseDto;
import com.team1.bankApplication.dtos.PasswordResetDto;
import com.team1.bankApplication.dtos.UserDetailsResponseDto;
import com.team1.bankApplication.entities.Account;
import com.team1.bankApplication.entities.User;
import com.team1.bankApplication.exceptions.UserNotFoundException;
import com.team1.bankApplication.service.AccountService;
import com.team1.bankApplication.service.UserService;
import com.team1.bankApplication.utils.PasswordEncoder;
import com.team1.bankApplication.utils.UserExtract;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.stream.Collectors;

import static com.team1.bankApplication.utils.UserExtract.isAdmin;

@RestController
@RequestMapping("/api/users")
@CrossOrigin
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private AccountService accountService;

    @PostMapping
    public ResponseEntity<User> add(@Valid @RequestBody User user) {
        User newUser = userService.addUser(user);
        return new ResponseEntity<User>(newUser, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<Object> getUsers(Principal principal) {
        if (!isAdmin(principal)) {
            return new ResponseEntity<>("User is not ADMIN", HttpStatus.NOT_FOUND);
        }
        List<User> users = userService.getUsers();
        List<UserDetailsResponseDto> responseDtoList = users.stream()
                .map(user -> {
                    UserDetailsResponseDto dto = new UserDetailsResponseDto();
                    BeanUtils.copyProperties(user, dto);
                    return dto;
                }).collect(Collectors.toList());
        return ResponseEntity.ok(responseDtoList);
    }

    @GetMapping(path = "/{userId}/accounts")
    public ResponseEntity<Object> getAccountsOfUser(@PathVariable int userId, Principal principal) {
        User user = UserExtract.getLoggedInUser(principal);
        if (!user.isAdmin() && user.getUserId() != userId)
            return new ResponseEntity<>("User is Not ADMIN", HttpStatus.NOT_FOUND);
        List<Account> accounts = accountService.getAccountsByUserId(userId);
        List<AccountDetailsResponseDto> accountDetailsResponseDtoList = accounts.stream()
                .map(account -> {
                    AccountDetailsResponseDto dto = new AccountDetailsResponseDto();
                    BeanUtils.copyProperties(account, dto);
                    dto.setUser(account.getUser().getFirstName());
                    return dto;
                }).collect(Collectors.toList());
        return ResponseEntity.ok(accountDetailsResponseDtoList);
    }

    @GetMapping(path = "/{userId}")
    public ResponseEntity<Object> getUser(@PathVariable int userId, Principal principal) throws UserNotFoundException {
        if (!isAdmin(principal))
            return new ResponseEntity<>("Invalid User Id", HttpStatus.NOT_FOUND);
        User user = userService.getUserByUserId(userId);
        UserDetailsResponseDto dto = new UserDetailsResponseDto();
        BeanUtils.copyProperties(user,dto);
        return ResponseEntity.ok(dto);
    }

    @GetMapping(path = "/getDetails")
    public ResponseEntity<UserDetailsResponseDto> getUserDetails(Principal principal) {
        int userId = UserExtract.getLoggedInUser(principal).getUserId();
        User user = userService.getUserByUserId(userId);
        UserDetailsResponseDto responseDto = new UserDetailsResponseDto();
        BeanUtils.copyProperties(user, responseDto);
        return ResponseEntity.ok(responseDto);
    }

    @PutMapping(path = "/{userId}")
    public ResponseEntity<Object> updateUser(@PathVariable int userId, @RequestBody User userDetails, Principal principal) {
        User user = UserExtract.getLoggedInUser(principal);
        if (!user.isAdmin() && user.getUserId() != userId)
            return new ResponseEntity<>("User is Not ADMIN", HttpStatus.NOT_FOUND);
        User updatedUser = userService.updateUser(userId, userDetails);
        return ResponseEntity.ok(updatedUser);
    }

    @DeleteMapping(path = "/{userId}")
    public ResponseEntity<Object> deleteUser(@PathVariable int userId, Principal principal) {
        if (!isAdmin(principal))
            return new ResponseEntity<>("User is Not ADMIN", HttpStatus.NOT_FOUND);
        userService.deleteUser(userId);
        return ResponseEntity.ok("User Deleted Successfully");
    }

    @PostMapping(path = "/resetPassword")
    public ResponseEntity<Object> resetPassword(@RequestBody PasswordResetDto passwordResetDto) {
        return userService.handleResetPassword(passwordResetDto);
    }
}
