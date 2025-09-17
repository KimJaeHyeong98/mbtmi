package com.culture.mbtmiback.posts;


import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface PostsMapper {
    // 게시글 전체 조회
    @Select("SELECT p.post_id, p.user_id, p.text, p.image_url, p.like_count, p.created_at, " +
            "u.name, u.mbti,u.location, u.photo_url, u.birth_date " +
            "FROM posts p " +
            "JOIN users u ON p.user_id = u.user_id " +
            "ORDER BY p.created_at DESC")
    List<PostsModel> getAllPosts();

   @Delete("delete from posts where post_id=#{post_id}")
    int deletePost(@Param("post_id") Long postId);
}
