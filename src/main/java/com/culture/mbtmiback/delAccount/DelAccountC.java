package com.culture.mbtmiback.delAccount;

import com.culture.mbtmiback.account.AccountModel;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/deleteUser")
public class DelAccountC {

    @Autowired
    private UserService userService;

    @DeleteMapping
    public ResponseEntity<String> DelUser(HttpSession session) {
        AccountModel user = (AccountModel) session.getAttribute("user");
        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("로그인 필요");
        }

        boolean deleted = userService.deleteUserById(user.getUser_id());
        if (deleted) {
            session.invalidate(); // 세션 삭제
            return ResponseEntity.ok("탈퇴 완료");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("사용자 없음");
        }
    }
}