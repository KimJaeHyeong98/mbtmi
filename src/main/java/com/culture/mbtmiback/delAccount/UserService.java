package com.culture.mbtmiback.delAccount;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public boolean deleteUserById(Long userId) {
        String sql = "DELETE FROM USERS WHERE user_id = ?";
        int rows = jdbcTemplate.update(sql, userId);
        return rows > 0;
    }
}