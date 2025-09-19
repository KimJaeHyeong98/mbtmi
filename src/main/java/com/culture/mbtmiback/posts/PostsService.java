package com.culture.mbtmiback.posts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostsService {

    @Autowired
    private PostsMapper postsMapper;

    public List<PostsModel> getAllPosts(Long currentUserId) {
        List<PostsModel> posts = postsMapper.getAllPosts();

        if (currentUserId != null && posts != null && !posts.isEmpty()) {
            for (PostsModel post : posts) {
                if (post.getPost_id() != null) {
                    boolean liked = postsMapper.hasLiked(post.getPost_id(), currentUserId);
                    post.setLiked(liked);
                }
            }
        }
        return posts;
    }

    public void insertPost(Long userId, String text, String fileName) {
        postsMapper.insertPost(userId, text, fileName);
    }

    public int deletePost(Long postId) {
        return postsMapper.deletePost(postId);
    }

    // 좋아요 토글
    public boolean toggleLike(Long postId, Long userId) {
        if (postsMapper.hasLiked(postId, userId)) {
            postsMapper.deleteLike(postId, userId);
            postsMapper.decreaseLikeCount(postId);
            return false;
        } else {
            postsMapper.insertLike(postId, userId);
            postsMapper.increaseLikeCount(postId);
            return true;
        }
    }

    public int getLikeCount(Long postId) {
        return postsMapper.getLikeCount(postId);
    }

}
