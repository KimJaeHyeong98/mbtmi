package com.culture.mbtmiback.delAccount;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Transactional
    public boolean deleteUserById(Long userId) {
        jdbcTemplate.update("DELETE FROM USER_TAGS WHERE user_id = ?", userId);
        jdbcTemplate.update("DELETE FROM POSTS WHERE user_id = ?", userId);
        jdbcTemplate.update("DELETE FROM USER_HOBBIES WHERE user_id = ?", userId);
        jdbcTemplate.update("DELETE FROM HEARTS WHERE from_user = ? OR to_user = ?", userId, userId);
        int rows = jdbcTemplate.update("DELETE FROM USERS WHERE user_id = ?", userId);

        // USERS 테이블에서 삭제가 됐는지 확인
        return rows > 0;
    }


//    public boolean deleteUserById(Long userId) {
//        String sql = "START TRANSACTION;" +
//                "DELETE FROM USER_TAGS WHERE user_id = ?;" +
//                "DELETE FROM POSTS WHERE user_id = ?;" +
//                "DELETE FROM USER_HOBBIES WHERE user_id = ?;" +
//                "DELETE FROM HEARTS WHERE from_user = ? OR to_user = ?;" +
//                "ROLLBACK;" +
//                "DELETE FROM USERS WHERE user_id = ?";
//
//        int rows = jdbcTemplate.update(sql, userId);
//        return rows > 0;
//    }
}