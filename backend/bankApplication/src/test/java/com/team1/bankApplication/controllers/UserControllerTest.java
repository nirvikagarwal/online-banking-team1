package com.team1.bankApplication.controllers;

import static org.hamcrest.CoreMatchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.team1.bankApplication.dtos.PasswordResetDto;
import com.team1.bankApplication.entities.User;
import com.team1.bankApplication.security.JwtTokenProvider;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.test.web.servlet.MockMvc;

import java.time.LocalDate;

@SpringBootTest
@AutoConfigureMockMvc
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class UserControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    private ObjectMapper mapper = new ObjectMapper();
    @Test
    @Order(1)
    void testAdd() throws Exception{
        User user = new User();
        user.setFirstName("John");
        user.setMiddleName(null);
        user.setLastName("Doe");
        user.setFatherName("Sam Doe");
        user.setEmail("john.doe@gmail.com");
        user.setDob(LocalDate.parse("2000-12-10"));
        user.setMobile("9088823459");
        user.setPan("ABIDE1234Z");
        user.setPassword("password");
        user.setAddress("123 Main St");

        mapper.registerModule(new JavaTimeModule());
        String jsonUser = mapper.writeValueAsString(user);


        mockMvc.perform(post("/api/users")
                .content(jsonUser).contentType("application/json"))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.firstName").value("John"));

    }

    @Test
    @Order(2)
    void testGetUsers() throws Exception{
        mockMvc.perform(get("/api/users").header("Authorization", "Bearer "+ getJwtToken()))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", Matchers.hasSize(6)));
    }

    @Test
    void testGetAccountsOfUser() {
    }

    @Test
    void testGetUser() throws Exception{
        mockMvc.perform(get("/api/users/4").header("Authorization", "Bearer "+ getJwtToken()))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.firstName").value("Rohit"));
    }

    @Test
    void testGetUserDetails() throws Exception {
        mockMvc.perform(get("/api/users/9").header("Authorization", "Bearer "+ getJwtToken()))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.firstName").value("Aman"));
    }

    @Test
    void testUpdateUser() {
    }

    @Test
    void testDeleteUser() throws Exception {
        mockMvc.perform(delete("/api/users/7"))
                .andExpect(status().isOk());
        mockMvc.perform(get("/api/users/7"))
                .andExpect(status().isNotFound());
    }

    @Test
    void testHandleResetPassword() throws Exception {
        PasswordResetDto passwordResetDto = new PasswordResetDto();
        passwordResetDto.setEmail("hastings.john@gmail.com");
        passwordResetDto.setMobile("7126543789");
        passwordResetDto.setDob(LocalDate.of(1980, 10, 6));
        passwordResetDto.setNewPassword("newPassword");

        mapper.registerModule(new JavaTimeModule());
        String jsonPasswordResetDto = mapper.writeValueAsString(passwordResetDto);


        mockMvc.perform(post("/api/users/resetPassword")
                        .content(jsonPasswordResetDto).contentType("application/json"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").value("Password reset successfully"));

    }

    private String getJwtToken() {
        UsernamePasswordAuthenticationToken
                authToken = new UsernamePasswordAuthenticationToken("aman@gmail.com", "Password@123");
        return jwtTokenProvider.generateToken(authToken.getName());
    }
}
