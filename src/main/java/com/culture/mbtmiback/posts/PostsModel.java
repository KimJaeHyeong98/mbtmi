package com.culture.mbtmiback.posts;

import lombok.Data;

import java.util.Date;

@Data
public class PostsModel {
    private Long post_id;
    private Long user_id;
    private String text;
    private String image_url;
    private Date created_at;
    private String name;    // 사용자 이름
    private String mbti;    // 사용자 MBTI
    private int like_count; // 좋아요 수

    // + User 정보도 함께 보여주고 싶으면 (JOIN 결과 담기용)

}
