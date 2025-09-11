package com.culture.mbtmiback.mapper;

import com.culture.mbtmiback.vo.ChatListVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface ChatMapper {

    @Select("""
            SELECT
            cr.room_id,
            CASE WHEN cr.user1_id = #{userId} THEN cr.user1_id ELSE cr.user2_id END AS user1_id,
            CASE WHEN cr.user1_id = #{userId} THEN cr.user2_id ELSE cr.user1_id END AS user2_id,
            u.name AS opponent_name, u.photo_url as opponent_pic
            FROM chat_room cr
            JOIN users u
            ON u.user_id = (CASE WHEN cr.user1_id = #{userId} THEN cr.user2_id ELSE cr.user1_id END)
            WHERE (cr.user1_id = #{userId} OR cr.user2_id = #{userId})
            """)
    List<ChatListVO> selectChatList(Long userId);
}
