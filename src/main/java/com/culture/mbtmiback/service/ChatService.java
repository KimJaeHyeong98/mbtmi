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

    public Long createRoom(Long user1Id, Long user2Id) {
        Long existingRoom = chatMapper.findExistingRoom(user1Id, user2Id);
        if (existingRoom != null) {
            System.out.println("기존채팅방호출(서비스)" + existingRoom);
            return existingRoom; // 이미 있으면 기존 roomId 반환
        }
        System.out.println("채팅방 생성(서비스)" + user1Id + "/" + user2Id);
        return chatMapper.createChatRoom(user1Id, user2Id);
    }


}
