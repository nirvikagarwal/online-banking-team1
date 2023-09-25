package com.team1.bankApplication.utils;

import com.team1.bankApplication.entities.User;
import org.springframework.security.core.Authentication;

import java.security.Principal;

public class UserExtract {
    public static User getLoggedInUser(Principal principal) {
        return  (User)((Authentication) principal).getPrincipal();
    }

    public static boolean isAdmin(Principal principal) {
        return getLoggedInUser(principal).isAdmin();
    }
}
