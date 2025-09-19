package com.culture.mbtmiback.controller;

import com.culture.mbtmiback.account.AccountModel;
import com.culture.mbtmiback.service.ChatService;
import com.culture.mbtmiback.vo.ChatListVO;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api")
public class ChatController {

    @Autowired
    private ChatService chatService;


    @GetMapping("/chat")
    public List<ChatListVO> chat(HttpSession session) {
        AccountModel user = (AccountModel) session.getAttribute("user");
        System.out.println(user);
        return chatService.loadChatList(user.getUser_id());
    }

    @PostMapping("/new_chat_create")
    public Long createChatRoom(@RequestParam Long fromUser, @RequestParam Long toUser) {
        System.out.println("(백) 채팅방 생성:" + fromUser + ("/") + toUser);
        return chatService.createRoom(fromUser, toUser);
    }
}
