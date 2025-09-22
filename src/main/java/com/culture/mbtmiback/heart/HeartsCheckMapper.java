package com.culture.mbtmiback.heart;

import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface HeartsCheckMapper {

    // 특정 유저가 특정 유저에게 어떤 상태든 눌렀는지 확인 (HEART, X 구분 없음)
    @Select("""
                SELECT CASE WHEN COUNT(*) > 0 THEN 1 ELSE 0 END
                FROM HEARTS
                WHERE from_user = #{fromUser}
                  AND to_user = #{toUser}
            """)
    boolean findByUsers(@Param("fromUser") int fromUser, @Param("toUser") int toUser);


    // ❤️ HEART 전용 ----------------------------

    // HEART가 있는지 확인
    @Select("""
                SELECT CASE WHEN COUNT(*) > 0 THEN 1 ELSE 0 END
                FROM HEARTS
                WHERE from_user = #{fromUser}
                  AND to_user = #{toUser}
                  AND action_type = 'HEART'
            """)
    boolean findByUsersHeart(@Param("fromUser") int fromUser, @Param("toUser") int toUser);

    // HEART 추가
    @Insert("""
                INSERT INTO HEARTS (heart_id, from_user, to_user, action_type, created_at)
                VALUES (hearts_seq.NEXTVAL, #{fromUser}, #{toUser}, 'HEART', SYSDATE)
            """)
    void insertHeart(@Param("fromUser") int fromUser, @Param("toUser") int toUser);

    // HEART 삭제
    @Delete("""
                DELETE FROM HEARTS
                WHERE from_user = #{fromUser}
                  AND to_user = #{toUser}
                  AND action_type = 'HEART'
            """)
    void deleteHeart(@Param("fromUser") int fromUser, @Param("toUser") int toUser);


    // ❌ X 전용 ----------------------------

    // X가 있는지 확인
    @Select("""
                SELECT CASE WHEN COUNT(*) > 0 THEN 1 ELSE 0 END
                FROM HEARTS
                WHERE from_user = #{fromUser}
                  AND to_user = #{toUser}
                  AND action_type = 'X'
            """)
    boolean findByUsersX(@Param("fromUser") int fromUser, @Param("toUser") int toUser);

    // X 추가
    @Insert("""
                INSERT INTO HEARTS (heart_id, from_user, to_user, action_type, created_at)
                VALUES (hearts_seq.NEXTVAL, #{fromUser}, #{toUser}, 'X', SYSDATE)
            """)
    void insertHeartX(@Param("fromUser") int fromUser, @Param("toUser") int toUser);

    // X 삭제
    @Delete("""
                DELETE FROM HEARTS
                WHERE from_user = #{fromUser}
                  AND to_user = #{toUser}
                  AND action_type = 'X'
            """)
    void deleteHeartX(@Param("fromUser") int fromUser, @Param("toUser") int toUser);


    // 내가 하트한 유저 목록 가져오기 (HEART만)
    @Select("""
                SELECT 
                    u.user_id AS userId,
                    u.name,
                    u.photo_url AS photoUrl,
                    CASE WHEN h2.from_user IS NOT NULL THEN 1 ELSE 0 END AS mutualHeart
                FROM HEARTS h
                JOIN USERS u 
                    ON h.to_user = u.user_id
                LEFT JOIN HEARTS h2 
                    ON h2.from_user = u.user_id
                   AND h2.to_user = h.from_user
                WHERE h.from_user = #{fromUser}
                  AND h.action_type = 'HEART'
            """)
    List<HeartedUserDTO> findHeartedUsers(@Param("fromUser") int fromUser);

    //나한테 하트를 준 인간 조회
    @Select("""
                SELECT 
                    u.user_id AS userId,
                    u.name,
                    u.photo_url AS photoUrl,
                    CASE WHEN h2.to_user IS NOT NULL THEN 1 ELSE 0 END AS mutualHeart
                FROM HEARTS h
                JOIN USERS u 
                    ON h.from_user = u.user_id
                LEFT JOIN HEARTS h2 
                    ON h2.from_user = #{toUser}
                   AND h2.to_user = u.user_id
                WHERE h.to_user = #{toUser}
                  AND h.action_type = 'HEART'
            """)
    List<HeartedUserDTO> findUsersWhoHeartedMe(@Param("toUser") int toUser);

    // Mapper
    @Select("SELECT to_user FROM HEARTS WHERE from_user = #{userId} AND action_type = #{actionType}")
    List<Long> findMyActions(@Param("userId") Long userId, @Param("actionType") String actionType);

}


