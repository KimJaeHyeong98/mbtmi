package com.culture.mbtmiback.account;

import com.culture.mbtmiback.mypage.TagModel;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface AccountMapper {
    //유저 sign up
//    @Insert("INSERT INTO USERS (username, password,name,birth_date,mbti,desired_mbti,self_intro,email,photourl,location) VALUES (#{username}, #{password},#{name},#{birth_date},#{mbti},#{desired_mbti},#{self_intro},#{email},#{photo_url},#{location})")
//    void signUp(AccountModel account);


    @Insert("INSERT INTO USERS (user_id, username, password, name, created_at,birth_date) " +
                "VALUES (USERS_SEQ.NEXTVAL, #{username}, #{password}, #{name}, SYSDATE, #{birth_date})")
    @SelectKey(statement = "SELECT USERS_SEQ.CURRVAL FROM DUAL", keyProperty = "user_id", before = false, resultType = Long.class)
    void signUp(AccountModel account);

    //유저 login
    @Select("SELECT * FROM USERS WHERE USERNAME = #{username} AND PASSWORD = #{password}")
    AccountModel login(@Param("username") String username, @Param("password") String password);


    //유저 mbti 수정
    @Update("UPDATE USERS SET MBTI = #{mbti} WHERE USER_ID = #{userId}")
    int updateMbti(@Param("userId") Long userId, @Param("mbti") String mbti);



}
