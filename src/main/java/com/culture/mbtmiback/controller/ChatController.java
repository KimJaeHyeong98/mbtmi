package com.culture.mbtmiback.controller;

import com.culture.mbtmiback.account.AccountModel;
import com.culture.mbtmiback.service.ChatService;
import com.culture.mbtmiback.vo.ChatListVO;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("/api")
@RestController
public class ChatController {

    @Autowired
    private ChatService chatService;


    @GetMapping("/chat")
    public List<ChatListVO> chat(HttpSession session) {
        AccountModel user = (AccountModel) session.getAttribute("user");
        System.out.println(user);
        return chatService.loadChatList(user.getUser_id());
    }

}
