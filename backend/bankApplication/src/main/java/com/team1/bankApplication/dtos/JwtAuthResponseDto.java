package com.team1.bankApplication.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class JwtAuthResponseDto {

    private String accessToken;
    private String tokenType="Bearer";

}
