package com.culture.mbtmiback.posts;


import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface PostsMapper {
    // 게시글 전체 조회
    @Select("SELECT p.post_id, p.user_id, p.text, p.image_url, p.created_at, " +
            "u.name, u.mbti, u.location, u.photo_url, u.birth_date " +
            "FROM posts p " +
            "JOIN users u ON p.user_id = u.user_id " +
            "ORDER BY p.created_at DESC")
    List<PostsModel> getAllPosts();

   @Delete("delete from posts where post_id=#{post_id}")
    int deletePost(@Param("post_id") Long postId);
    // 게시글 등록
    @Insert("INSERT INTO posts (post_id, user_id, text, image_url, created_at) " +
            "VALUES (posts_seq.NEXTVAL, #{userId}, #{text}, #{imageUrl,jdbcType=VARCHAR}, SYSDATE)")
    void insertPost(
            @Param("userId") Long userId,
            @Param("text") String text,
            @Param("imageUrl") String imageUrl
    );

    @Update("UPDATE posts SET text = #{text},image_url = #{fileName, jdbcType = VARCHAR} WHERE post_id=#{postId} AND user_id = #{userId}")
    int updatePost(
           @Param("postId") Long postId,
           @Param("userId") Long userId,
           @Param("text") String text,
           @Param("fileName") String fileName);


    // PostsMapper.java
    @Select("SELECT p.post_id, p.user_id, p.text, p.image_url, p.created_at, " +
            "u.name, u.mbti " +
            "FROM posts p " +
            "JOIN users u ON p.user_id = u.user_id " +
            "WHERE p.post_id = #{postId}")
    PostsModel getPostById(@Param("postId") Long postId);
}
