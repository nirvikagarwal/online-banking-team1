package com.team1.bankApplication.repositories;

import com.team1.bankApplication.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findByUserId(int userId);
    User findOneByEmail(String email);
}
