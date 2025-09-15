package com.culture.mbtmiback.createAc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CreateAcService {

    @Autowired
    private CreateAcMapper createAcMapper;


    @Transactional
    public Long signUp(CreateAcModel ac,
                       CreateUserTagsModel myTags,
                       CreateUserDesiredTagsModel deTags) {

        // 1. USERS insert
        createAcMapper.signUp(ac);
        Long user_id = ac.getUser_id(); // @SelectKey 덕분에 채워짐

        // 2. 내 태그/취미 insert
        for (String hobby : myTags.getHobby_name()) {
            createAcMapper.insertUserHobby(user_id, hobby, "SELF");
        }
        for (String tag : myTags.getTag_name()) {
            createAcMapper.insertUserTag(user_id, tag, "SELF");
        }

        // 3. 원하는 태그/취미 insert
        for (String hobby : deTags.getHobby_name()) {
            createAcMapper.insertUserHobby(user_id, hobby, "DESIRED");
        }
        for (String tag : deTags.getTag_name()) {
            createAcMapper.insertUserTag(user_id, tag, "DESIRED");
        }
        return user_id;
    }

    public boolean usernameExists(String username) {
        String found = createAcMapper.findUsername(username);
        return found != null; // 있으면 true, 없으면 false
    }


    public void updateUserProfilePhoto(Long userId, String profileFileName) {
        createAcMapper.updateUserProfile(userId, profileFileName);
    }

}
