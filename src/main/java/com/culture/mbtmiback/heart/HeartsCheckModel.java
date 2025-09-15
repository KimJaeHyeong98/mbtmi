package com.culture.mbtmiback.heart;


import lombok.Data;

import java.util.Date;

@Data
public class HeartsCheckModel {
    private int heartId;     // HEART_ID (PK)
    private int fromUser;    // FROM_USER (하트를 누른 유저 ID)
    private int toUser;      // TO_USER (하트를 받은 유저 ID)
    private Date createdAt;  // CREATED_AT (하트 누른 시각, 기본값 SYSDATE)
}