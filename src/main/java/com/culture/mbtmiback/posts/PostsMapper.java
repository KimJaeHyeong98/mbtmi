package com.culture.mbtmiback.posts;


import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface PostsMapper {
    // 게시글 전체 조회
    @Select("SELECT p.post_id, p.user_id, p.text, p.image_url, p.like_count, p.created_at, " +
            "u.name, u.mbti " +
            "FROM posts p " +
            "JOIN users u ON p.user_id = u.user_id " +
            "ORDER BY p.created_at DESC")
    List<PostsModel> getAllPosts();

    // 게시글 등록
    @Insert("INSERT INTO posts (post_id, user_id, text, image_url, created_at, like_count) " +
            "VALUES (posts_seq.NEXTVAL, #{userId}, #{text}, #{imageUrl,jdbcType=VARCHAR}, SYSDATE, 0)")
    void insertPost(
            @Param("userId") Long userId,
            @Param("text") String text,
            @Param("imageUrl") String imageUrl
    );
}
