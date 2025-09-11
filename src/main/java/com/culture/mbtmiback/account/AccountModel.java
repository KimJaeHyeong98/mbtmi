package com.culture.mbtmiback.account;

import lombok.Data;

import java.util.Date;

@Data
public class AccountModel {

    private Long  user_id;
    private String username;
    private String password;
    private String name;
    private Date birth_date;
    private Date created_at;
    private String mbti;
    private String desired_mbti;
    private String self_intro;
    private String photo_url;
    private String location;
<<<<<<< HEAD
    private String gender;
=======
    private String email;
>>>>>>> 76c84ee1cd9ffd89c262faad08f8c5f5e9d37b49

}