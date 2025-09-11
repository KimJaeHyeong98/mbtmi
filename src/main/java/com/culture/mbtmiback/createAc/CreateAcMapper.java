package com.culture.mbtmiback.createAc;

import com.culture.mbtmiback.account.AccountModel;
import org.apache.ibatis.annotations.*;

@Mapper
public interface CreateAcMapper {

    @Insert("INSERT INTO USERS (user_id, username, password, name, created_at,birth_date, mbti,desired_mbti,self_intro,location,gender) " +
            "VALUES (USERS_SEQ.NEXTVAL, #{username}, #{password}, #{name}, SYSDATE, #{birth_date},#{mbti},#{desired_mbti},#{self_intro},#{location},#{gender})")
    @SelectKey(statement = "SELECT USERS_SEQ.CURRVAL FROM DUAL", keyProperty = "user_id", before = false, resultType = Long.class)
    void signUp(CreateAcModel ac);


    @Insert("INSERT INTO USER_TAGS(user_id, tag_id, type) VALUES(#{userId}, (SELECT tag_id FROM TAGS WHERE tag_name = #{tagName}), #{type})")
    void insertUserTag(@Param("userId") Long userId, @Param("tagName") String tagName, @Param("type") String type);

    @Insert("INSERT INTO USER_HOBBIES(user_id, hobby_id, type) VALUES(#{userId},(SELECT hobby_id FROM HOBBIES WHERE hobby_name=#{hobbyName}), #{type})")
    void insertUserHobby(@Param("userId") Long userId, @Param("hobbyName") String hobbyName, @Param("type") String type);

//    유저 아이디 중복 검사 username이 존재하면 username값 리턴, 없으면 null
    @Select("SELECT username FROM USERS WHERE username = #{username}")
    String findUsername(@Param("username") String username);

}
