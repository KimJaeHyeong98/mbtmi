package com.culture.mbtmiback.createAc;

import lombok.Data;

import java.util.List;

@Data
public class CreateUserTagsModel {
    private int hobby_id;
    private List<String> hobby_name;
    private int tag_id;
    private List<String> tag_name;
    private String type;
}
