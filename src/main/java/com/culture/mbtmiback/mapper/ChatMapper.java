package com.culture.mbtmiback.mapper;

import com.culture.mbtmiback.vo.ChatListVO;
import org.apache.ibatis.annotations.*;

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

    // 이미 존재하는 채팅방 조회
    @Select("""
        SELECT ROOM_ID 
        FROM chat_room
        WHERE (USER1_ID = #{user1Id} AND USER2_ID = #{user2Id})
           OR (USER1_ID = #{user2Id} AND USER2_ID = #{user1Id})
    """)
    Long findExistingRoom(@Param("user1Id") Long user1Id, @Param("user2Id") Long user2Id);


    //새로 만들어지는 채팅방
    @Insert("""
    INSERT INTO chat_room (ROOM_ID, USER1_ID, USER2_ID)
    VALUES (chat_room_seq.nextval, #{user1Id}, #{user2Id})
""")
    @SelectKey(
            statement = "SELECT chat_room_seq.currval FROM dual",
            keyProperty = "roomId",
            before = false,
            resultType = Long.class
    )
    Long createChatRoom(@Param("user1Id") Long user1Id, @Param("user2Id") Long user2Id);


}
