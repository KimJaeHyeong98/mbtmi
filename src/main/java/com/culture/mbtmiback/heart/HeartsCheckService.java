package com.culture.mbtmiback.heart;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HeartsCheckService {

    private final HeartsCheckMapper heartsCheckMapper;

    public HeartsCheckService(HeartsCheckMapper heartsCheckMapper) {
        this.heartsCheckMapper = heartsCheckMapper;
    }

    //하트가 있는지? // 잘못만듬. 후에 삭제예정
    public boolean hasHearts(int fromUser, int toUser) {
        return heartsCheckMapper.findByUsers(fromUser, toUser);
    }
    // ✅ 상호 하트 여부 확인 (추가) (신설)
    public boolean isMutualHearts(int fromUser, int toUser) {
        boolean u1toU2 = hasHearts(fromUser, toUser);
        boolean u2toU1 = hasHearts(toUser, fromUser);
        return u1toU2 && u2toU1;
    }

    //내가 하트한 유저 목록 가져오기
    public List<HeartedUserDTO> getHeartedUsers(int fromUser) {
        return heartsCheckMapper.findHeartedUsers(fromUser);
    }

    //내가 받은 하트목록 갖고오기
    public List<HeartedUserDTO> whoHeartedToMe(int toUser){
        return heartsCheckMapper.findUsersWhoHeartedMe(toUser);
    }

    public boolean checkHearts(int fromUser, int toUser) {
        // X가 이미 있으면 먼저 삭제
        if (heartsCheckMapper.findByUsersX(fromUser, toUser)) {
            heartsCheckMapper.deleteHeartX(fromUser, toUser);
        }
        boolean haveHeart = heartsCheckMapper.findByUsersHeart(fromUser, toUser);
        if (haveHeart) {
            heartsCheckMapper.deleteHeart(fromUser, toUser);
            return false;
        } else {
            heartsCheckMapper.insertHeart(fromUser, toUser);
            return true;
        }
    }

    // X 토글
    public boolean checkHeartsX(int fromUser, int toUser) {
        // HEART가 이미 있으면 먼저 삭제
        if (heartsCheckMapper.findByUsersHeart(fromUser, toUser)) {
            heartsCheckMapper.deleteHeart(fromUser, toUser);
        }
        boolean haveX = heartsCheckMapper.findByUsersX(fromUser, toUser);
        if (haveX) {
            heartsCheckMapper.deleteHeartX(fromUser, toUser);
            return false;
        } else {
            heartsCheckMapper.insertHeartX(fromUser, toUser);
            return true;
        }
    }



    public List<Long> getMyHearts(Long userId) {
        return heartsCheckMapper.findMyActions(userId, "HEART");
    }

    public List<Long> getMyX(Long userId) {
        return heartsCheckMapper.findMyActions(userId, "X");
    }


}
