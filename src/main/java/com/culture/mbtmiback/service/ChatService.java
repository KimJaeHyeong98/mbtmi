package com.culture.mbtmiback.service;

import com.culture.mbtmiback.mapper.ChatMapper;
import com.culture.mbtmiback.vo.ChatListVO;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class ChatService {

    private ChatMapper chatMapper;

    public List<ChatListVO> loadChatList(Long userId){
        List<ChatListVO> chatList = chatMapper.selectChatList(userId);
        System.out.println(chatList);
        return chatList;
    }


}
