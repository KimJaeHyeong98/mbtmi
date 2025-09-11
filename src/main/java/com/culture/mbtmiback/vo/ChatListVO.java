package com.culture.mbtmiback.vo;

import lombok.Data;


@Data
public class ChatListVO {

    private Long room_id;
    private Long user1_id;
    private Long user2_id;
    private String opponent_name; // 상대방 이름
    private String opponent_pic; // 상대방 사진

}
