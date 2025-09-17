package com.culture.mbtmiback.heart;

import lombok.Data;


// 하트를 준사람의 정보를 받아올 수 있게 하려는 DTO
@Data
public class HeartedUserDTO {
    private int userId;
    private String name;
    private String photoUrl;
    private boolean mutualHeart; // 서로 하트인지
}
