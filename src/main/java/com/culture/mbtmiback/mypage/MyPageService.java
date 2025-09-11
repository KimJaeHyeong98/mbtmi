package com.culture.mbtmiback.mypage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class MyPageService {

    @Autowired
    private MyPageMapper myPageMapper;


    //유저 태그 검색
    public List<TagModel> getUserTags(Long userId, String type) {
        return myPageMapper.getUserTags(userId, type);
    }

    //유저 태그 변경
    @Transactional
    public void updateUserTags(Long userId, List<String> newTags) {
        // 1. 기존 SELF 태그 삭제
        myPageMapper.deleteUserTags(userId, "SELF");

        // 2. 새 태그 INSERT
        for (String tagName : newTags) {
            myPageMapper.insertUserTag(userId, tagName, "SELF");
        }
    }

    //유저 취미 검색
    public List<HobbyModel> getUserHobbys(Long userId, String type) {
        return myPageMapper.getUserHobbys(userId, type);
    }


    //유저 취미 변경
    @Transactional
    public void updateHobbies(Long userId, List<String> newTags) {
        // 1. 기존 SELF 태그 삭제
        myPageMapper.deleteUserHobbies(userId, "SELF");

        // 2. 새 태그 INSERT
        for (String tagName : newTags) {
            myPageMapper.insertUserHobbies(userId, tagName, "SELF");
        }
    }

    //유저 태그 검색
    public List<TagModel> getDesiredtags(Long userId, String type) {
        return myPageMapper.getUserTags(userId, type);
    }

    //유저 취미 검색
    public List<HobbyModel> getDesiredHobbys(Long userId, String type) {
        return myPageMapper.getDesiredHobbys(userId, type);
    }


    @Transactional
    public void updateDesiredInfo(Long userId, String wantedMbti, List<String> wantedTags, List<String> wantedHobbies) {
        // 1. MBTI 업데이트
        myPageMapper.updateDesiredMbti(userId, wantedMbti);

        // 2. 성격 태그 갱신
        System.out.println("==== 원하는 성격 업데이트 시작 ====");
        myPageMapper.deleteDesiredTags(userId);
        for (String tag : wantedTags) {
            System.out.println("넘어온 태그 = [" + tag + "]");
            int result = myPageMapper.insertDesiredTag(userId, tag);
            System.out.println("삽입 결과 = " + result);
        }


        // 3. 취미 갱신
        myPageMapper.deleteDesiredHobbies(userId);
        for (String hobby : wantedHobbies) {
            myPageMapper.insertDesiredHobby(userId, hobby);
        }
    }

    // 아이디 중복체크
    public boolean isUsernameTaken(String username) {
        return myPageMapper.countByUsername(username) > 0;
    }

    //
    @Transactional
    public void updateUserProfile(Long userId, String name, String location, String selfIntro, String profileFileName) {
        myPageMapper.updateUserProfile(userId, name, location, selfIntro, profileFileName);
    }

}
