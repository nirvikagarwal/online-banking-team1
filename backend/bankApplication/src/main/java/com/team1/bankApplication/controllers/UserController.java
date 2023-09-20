package com.team1.bankApplication.controllers;

import com.team1.bankApplication.dtos.UserDetailsResponseDto;
import com.team1.bankApplication.entities.Account;
import com.team1.bankApplication.entities.User;
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
    public List<User> getUsers() {
        return userService.getUsers();
    }

    @GetMapping(path = "/{userId}/accounts")
    public List<Account> getAccountsOfUser(@PathVariable int userId) {
        return accountService.getAccountsByUserId(userId);
    }

    @GetMapping(path = "/{userId}")
    public User getUser(@PathVariable int userId) {
        return userService.getUserByUserId(userId);
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
    public User updateUser(@PathVariable int userId, @RequestBody User userDetails) {
        return userService.updateUser(userId, userDetails);
    }

    @DeleteMapping(path = "/{userId}")
    public void deleteUser(@PathVariable int userId) {
        userService.deleteUser(userId);
    }
}
