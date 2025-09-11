package com.culture.mbtmiback.createAc;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.util.Date;
import java.util.List;


@Data
public class CreateAcModel {
    private Long  user_id;
    private String username;
    private String password;
    private String name;
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "Asia/Seoul")
    private Date birth_date;

    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "Asia/Seoul")
    private Date created_at;
    private String mbti;
    private String gender;
    private String desired_mbti;
    private String self_intro;
    private String photo_url;
    private String location;



}
