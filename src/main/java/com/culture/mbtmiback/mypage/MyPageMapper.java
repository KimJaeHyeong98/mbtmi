package com.culture.mbtmiback.mypage;

import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface MyPageMapper {


    //유저 소개태그 검색
    @Select("""
                SELECT t.tag_name
                FROM USER_TAGS ut
                JOIN TAGS t ON ut.tag_id = t.tag_id
                WHERE ut.user_id = #{userId}
                  AND ut.type = #{type}
                ORDER BY t.tag_id
            """)
    List<TagModel> getUserTags(@Param("userId") Long userId,
                               @Param("type") String type);


    //유저 태그 트랜잭션 삭제+삽입
    @Delete("DELETE FROM USER_TAGS WHERE user_id = #{userId} AND type = #{type}")
    void deleteUserTags(@Param("userId") Long userId, @Param("type") String type);

    @Insert("""
        INSERT INTO USER_TAGS(user_id, tag_id, type)
        VALUES (#{userId}, (SELECT tag_id FROM TAGS WHERE tag_name = #{tagName}), #{type})
    """)
    void insertUserTag(@Param("userId") Long userId, @Param("tagName") String tagName, @Param("type") String type);


    //유저 취미 태그 검색
    @Select("""
                 SELECT h.hobby_name
                                   FROM USER_HOBBIES uh
                                   JOIN HOBBIES h ON uh.hobby_id = h.hobby_id
                                   WHERE uh.user_id = #{userId}
                                     AND uh.type = #{type}
                                   ORDER BY h.hobby_id
            """)
    List<HobbyModel> getUserHobbys(@Param("userId") Long userId,
                               @Param("type") String type);


    //유저 취미 트랜잭션 삭제+삽입
    @Delete("DELETE FROM USER_HOBBIES WHERE user_id = #{userId} AND type = #{type}")
    void deleteUserHobbies(@Param("userId") Long userId, @Param("type") String type);

    @Insert("""
        INSERT INTO USER_HOBBIES(user_id, hobby_id, type)
        VALUES (#{userId}, (SELECT hobby_id FROM HOBBIES WHERE hobby_name = #{hobbyName}), #{type})
    """)
    void insertUserHobbies(@Param("userId") Long userId, @Param("hobbyName") String tagName, @Param("type") String type);


    //상대방 성격태그 검색
    @Select("""
                SELECT t.tag_name
                FROM USER_TAGS ut
                JOIN TAGS t ON ut.tag_id = t.tag_id
                WHERE ut.user_id = #{userId}
                  AND ut.type = #{type}
                ORDER BY t.tag_id
            """)
    List<TagModel> getDesiredtags(@Param("userId") Long userId,
                               @Param("type") String type);


    //상대방 취미 태그 검색
    @Select("""
                 SELECT h.hobby_name
                                   FROM USER_HOBBIES uh
                                   JOIN HOBBIES h ON uh.hobby_id = h.hobby_id
                                   WHERE uh.user_id = #{userId}
                                     AND uh.type = #{type}
                                   ORDER BY h.hobby_id
            """)
    List<HobbyModel> getDesiredHobbys(@Param("userId") Long userId,
                                   @Param("type") String type);




    // MBTI 업데이트
    @Update("UPDATE USERS SET desired_mbti = #{mbti} WHERE user_id = #{userId}")
    int updateDesiredMbti(@Param("userId") Long userId, @Param("mbti") String mbti);

    // 원하는 성격 태그 삭제
    @Delete("DELETE FROM USER_TAGS WHERE user_id = #{userId} AND type = 'DESIRED'")
    int deleteDesiredTags(@Param("userId") Long userId);

    // 원하는 성격 태그 삽입
    @Insert("""
    INSERT INTO USER_TAGS(user_id, tag_id, type)
    SELECT #{userId}, t.tag_id, 'DESIRED'
    FROM TAGS t
    WHERE t.tag_name = #{tagName}
""")
    int insertDesiredTag(@Param("userId") Long userId, @Param("tagName") String tagName);


    // 원하는 취미 삭제
    @Delete("DELETE FROM USER_HOBBIES WHERE user_id = #{userId} AND type = 'DESIRED'")
    int deleteDesiredHobbies(@Param("userId") Long userId);

    // 원하는 취미 삽입
    @Insert("""
        INSERT INTO USER_HOBBIES(user_id, hobby_id, type)
        VALUES (#{userId}, (SELECT hobby_id FROM HOBBIES WHERE hobby_name = #{hobbyName}), 'DESIRED')
    """)
    int insertDesiredHobby(@Param("userId") Long userId, @Param("hobbyName") String hobbyName);

    // 아이디 중복체크
    @Select("SELECT COUNT(*) FROM USERS WHERE USERNAME = #{username}")
    int countByUsername(@Param("username") String username);

    @Update("""
    UPDATE USERS
    SET name = #{name},
        location = #{location},
        self_intro = #{selfIntro},
        photo_url = NVL(#{profileFileName, jdbcType=VARCHAR}, photo_url)
    WHERE user_id = #{userId}
""")
    int updateUserProfile(@Param("userId") Long userId,
                          @Param("name") String name,
                          @Param("location") String location,
                          @Param("selfIntro") String selfIntro,
                          @Param("profileFileName") String profileFileName);


}
