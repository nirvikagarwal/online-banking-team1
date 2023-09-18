package com.team1.bankApplication.controllers;

import com.team1.bankApplication.dtos.BeneficiaryDto;
import com.team1.bankApplication.entities.Beneficiary;
import com.team1.bankApplication.entities.User;
import com.team1.bankApplication.service.BeneficiaryService;
import com.team1.bankApplication.service.UserService;
import com.team1.bankApplication.utils.UserExtract;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/beneficiary")
@CrossOrigin
public class BeneficiaryController {
    @Autowired
    private UserService userService;

    @Autowired
    private BeneficiaryService beneficiaryService;

    @PostMapping
    public ResponseEntity<Beneficiary> add(@Valid @RequestBody BeneficiaryDto beneficiaryDto, Principal principal) {
        User user = UserExtract.getLoggedInUser(principal);
        Beneficiary beneficiary = beneficiaryService.addBeneficiary(beneficiaryDto, user);
        return new ResponseEntity<>(beneficiary, HttpStatus.CREATED);
    }

    @GetMapping(path = "/{id}")
    public Beneficiary getBeneficiary(@PathVariable int id) {
        return beneficiaryService.getBeneficiary(id);
    }

    @GetMapping(path = "/getAll")
    public List<Beneficiary> getBeneficiaryOfUser(Principal principal) {
        User user = UserExtract.getLoggedInUser(principal);
        return beneficiaryService.getBeneficiaryByUserId(user.getUserId());
    }

}
