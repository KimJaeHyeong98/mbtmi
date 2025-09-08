package com.culture.mbtmiback.mypage;

import lombok.Data;

import java.util.List;

@Data
public class DesiredModel {
    private String wantedMbti;
    private List<String> wantedTags;
    private List<String> wantedHobbies;
}
