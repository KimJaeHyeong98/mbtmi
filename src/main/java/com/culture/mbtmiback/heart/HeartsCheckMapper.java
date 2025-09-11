package com.culture.mbtmiback.heart;

import lombok.Data;
import org.apache.ibatis.annotations.*;

import java.util.List;
@Mapper
public interface HeartsCheckMapper {

    // 특정 유저가 특정 유저에게 하트를 눌렀는지 확인
    @Select("SELECT CASE WHEN COUNT(*) > 0 THEN 1 ELSE 0 END " +
            "FROM HEARTS " +
            "WHERE from_user = #{fromUser} AND to_user = #{toUser}")
    boolean findByUsers(@Param("fromUser") int fromUser, @Param("toUser") int toUser);

    // 하트 추가
    @Insert("INSERT INTO HEARTS (heart_id, from_user, to_user, created_at) " +
            "VALUES (hearts_seq.NEXTVAL, #{fromUser}, #{toUser}, SYSDATE)")
    void insertHeart(@Param("fromUser") int fromUser, @Param("toUser") int toUser);

    // 하트 삭제
    @Delete("DELETE FROM HEARTS " +
            "WHERE from_user = #{fromUser} AND to_user = #{toUser}")
    void deleteHeart(@Param("fromUser") int fromUser, @Param("toUser") int toUser);

    // 내가 하트한 유저 목록 가져오기
    @Select("SELECT to_user FROM HEARTS WHERE from_user = #{fromUser}")
    List<Integer> findHeartedUserIds(@Param("fromUser") int fromUser);
}