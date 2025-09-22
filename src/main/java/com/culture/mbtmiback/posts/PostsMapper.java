package com.culture.mbtmiback.posts;


import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface PostsMapper {
    // 게시글 전체 조회
    @Select(
            "SELECT p.post_id, p.user_id, p.text, p.image_url, " +
                    "(SELECT COUNT(*) FROM post_likes pl WHERE pl.post_id = p.post_id) AS like_count, " +
                    "p.created_at, u.name, u.mbti, u.location, u.photo_url, u.birth_date " +
                    "FROM posts p " +
                    "JOIN users u ON p.user_id = u.user_id " +
                    "ORDER BY p.created_at DESC"
    )
    List<PostsModel> getAllPosts();

   @Delete("delete from posts where post_id=#{post_id}")
    int deletePost(@Param("post_id") Long postId);
    // 게시글 등록
    @Insert("INSERT INTO posts (post_id, user_id, text, image_url, created_at, like_count) " +
            "VALUES (posts_seq.NEXTVAL, #{userId}, #{text}, #{imageUrl,jdbcType=VARCHAR}, SYSDATE, 0)")
    void insertPost(
            @Param("userId") Long userId,
            @Param("text") String text,
            @Param("imageUrl") String imageUrl
    );

    // 좋아요 관련 모두 Long으로 변경
    @Select("""
            SELECT CASE WHEN COUNT(*) > 0 THEN 1 ELSE 0 END
            FROM post_likes
            WHERE post_id = #{postId} AND user_id = #{userId}
        """)
    boolean hasLiked(@Param("postId") Long postId, @Param("userId") Long userId);

    @Insert("""
            INSERT INTO post_likes (post_id, user_id, created_at)
            VALUES ( #{postId}, #{userId}, SYSDATE)
        """)
    void insertLike(@Param("postId") Long postId, @Param("userId") Long userId);

    @Delete("""
            DELETE FROM post_likes
            WHERE post_id = #{postId} AND user_id = #{userId}
        """)
    void deleteLike(@Param("postId") Long postId, @Param("userId") Long userId);

    // 게시글 좋아요 수
    @Select("SELECT COUNT(*) FROM post_likes WHERE post_id = #{postId}")
    int getLikeCount(@Param("postId") Long postId);

    @Update("UPDATE posts SET like_count = like_count + 1 WHERE post_id = #{postId}")
    void increaseLikeCount(@Param("postId") Long postId);

    @Update("UPDATE posts SET like_count = like_count - 1 WHERE post_id = #{postId}")
    void decreaseLikeCount(@Param("postId") Long postId);


    @Update("UPDATE posts SET text = #{text},image_url = #{fileName, jdbcType = VARCHAR} WHERE post_id=#{postId} AND user_id = #{userId}")
    int updatePost(
           @Param("postId") Long postId,
           @Param("userId") Long userId,
           @Param("text") String text,
           @Param("fileName") String fileName);


    // PostsMapper.java
    @Select("SELECT p.post_id, p.user_id, p.text, p.image_url, p.like_count, p.created_at, " +
            "u.name, u.mbti " +
            "FROM posts p " +
            "JOIN users u ON p.user_id = u.user_id " +
            "WHERE p.post_id = #{postId}")
    PostsModel getPostById(@Param("postId") Long postId);
}
