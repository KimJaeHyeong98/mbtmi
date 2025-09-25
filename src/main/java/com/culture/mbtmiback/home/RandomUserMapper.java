package com.culture.mbtmiback.home;

import com.culture.mbtmiback.account.AccountModel;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface RandomUserMapper {

//    @Select("""
//                  SELECT *
//                  FROM (
//                      SELECT USER_ID, USERNAME, NAME, MBTI, DESIRED_MBTI, SELF_INTRO, PHOTO_URL
//                      FROM USERS
//                      WHERE USER_ID != #{currentUserId} AND USER_ID != 1
//                      ORDER BY DBMS_RANDOM.VALUE
//                  )
//                  WHERE ROWNUM <= 5
//            """)
//    ListloadRandomUsers findRandomUserExcept(@Param("currentUserId") Long currentUserId);

    @Select("""
                SELECT *
                FROM (
                    SELECT USER_ID,
                           USERNAME,
                           NAME,
                           MBTI,
                           DESIRED_MBTI,
                           SELF_INTRO,
                           PHOTO_URL,
                           NVL(GENDER, 'UNKNOWN') AS GENDER,
                           TRUNC(MONTHS_BETWEEN(SYSDATE, BIRTH_DATE)/12) AS AGE
                    FROM USERS
                    WHERE USER_ID != #{currentUserId}
                     AND USER_ID != 1
                     AND (#{gender,jdbcType=VARCHAR} IS NULL OR NVL(GENDER, 'UNKNOWN') = #{gender,jdbcType=VARCHAR})
                     AND (#{location,jdbcType=VARCHAR} IS NULL OR LOCATION = #{location,jdbcType=VARCHAR})
                     AND (
                         (#{ageDown,jdbcType=INTEGER} IS NULL AND #{ageUp,jdbcType=INTEGER} IS NULL)
                         OR TRUNC(MONTHS_BETWEEN(SYSDATE, BIRTH_DATE)/12)\s
                            BETWEEN NVL(#{ageDown,jdbcType=INTEGER}, 0) AND NVL(#{ageUp,jdbcType=INTEGER}, 200)
                    )
                    ORDER BY DBMS_RANDOM.VALUE
                )
                WHERE ROWNUM <= 20
            """)
    List<RandomUserModel> findRandomUserExcept(
            @Param("currentUserId") Long currentUserId,
            @Param("gender") String gender,
            @Param("ageDown") Integer ageDown,
            @Param("ageUp") Integer ageUp,
            @Param("location") String location
    );

    @Select("SELECT *\n" +
            "FROM USER_TAGS ut, tags t\n" +
            "WHERE ut.TAG_ID = t.TAG_ID and  ut.USER_ID = #{userId} and ut.type = 'SELF'")
    List<TagModel> findTagsByUser(Long userId);

    @Select("""
    SELECT uh.user_id, uh.hobby_id, h.hobby_name, uh.type
    FROM USER_HOBBIES uh
    JOIN HOBBIES h ON uh.hobby_id = h.hobby_id
    WHERE uh.user_id = #{userId} AND uh.type = 'SELF'
""")
    List<HobbyModel> findHobbiesByUser(Long userId);
}
