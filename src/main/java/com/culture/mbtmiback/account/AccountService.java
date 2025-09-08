package com.culture.mbtmiback.account;

import com.culture.mbtmiback.mypage.MyPageMapper;
import com.culture.mbtmiback.mypage.TagModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class AccountService {

    @Autowired
    private final AccountMapper accountMapper;
    @Autowired
    private MyPageMapper myPageMapper;

    public  AccountService(AccountMapper accountMapper) {
        this.accountMapper = accountMapper;
    }

    public AccountModel login(String username, String password) {
        return accountMapper.login(username, password);
    }


    public boolean updateUser(Long userId, String mbti) {
        return accountMapper.updateMbti(userId, mbti) > 0;
    }

//    @Transactional
//    public AccountModel signUp(AccountModel accountModel, @RequestBody List<String> tags, @RequestBody List<String> hobbies) {
//
//        Long user_id = accountModel.getUser_id();
//        accountMapper.signUp(accountModel);
//
//        // 이제 여기 사이에 태그랑 취미 넣는 mapper 문법 작성하기.
//        myPageMapper.insertUserTag(user_id, "SELF");
//        myPageMapper.insertUserTag(user_id, "DESIRED");
//        myPageMapper.insertUserHobbies(user_id, "SELF");
//        myPageMapper.insertUserHobbies(user_id, "DESIRED");
//
//        return accountModel;
//    }


}
