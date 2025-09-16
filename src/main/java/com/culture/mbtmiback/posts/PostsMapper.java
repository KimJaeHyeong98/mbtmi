package com.culture.mbtmiback.posts;


import org.apache.ibatis.annotations.Mapper;
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

}
