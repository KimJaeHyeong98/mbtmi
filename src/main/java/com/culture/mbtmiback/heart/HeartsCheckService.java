package com.culture.mbtmiback.heart;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HeartsCheckService {

    private final HeartsCheckMapper heartsCheckMapper;

    public HeartsCheckService(HeartsCheckMapper heartsCheckMapper) {
        this.heartsCheckMapper = heartsCheckMapper;
    }

    //하트가 있는지?
    public boolean hasHearts(int fromUser, int toUser) {
        return heartsCheckMapper.findByUsers(fromUser, toUser);
    }

    //하트누르는거 (추가,해제)
    public boolean checkHearts(int fromUser, int toUser) {
        boolean haveHearts = heartsCheckMapper.findByUsers(fromUser, toUser);
        System.out.println("have하트" + haveHearts);
        if (haveHearts) {
            heartsCheckMapper.deleteHeart(fromUser, toUser);
            return false;
        } else {
            heartsCheckMapper.insertHeart(fromUser, toUser);
            return true;
        }

    }

    //내가 하트한 유저 목록 가져오기
    public List<HeartedUserDTO> getHeartedUsers(int fromUser) {
        return heartsCheckMapper.findHeartedUsers(fromUser);
    }


}
