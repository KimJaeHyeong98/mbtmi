package com.culture.mbtmiback.posts;

import oracle.jdbc.proxy.annotation.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostsService {

    @Autowired
    private PostsMapper postsMapper;


    // 모든 게시글 가져오기
    public List<PostsModel> getAllPosts() {
        return postsMapper.getAllPosts();
    }

    public void insertPost(Long userId, String text, String fileName) {
        postsMapper.insertPost(userId, text, fileName);
    }
    public int deletePost(Long postId) {
        return postsMapper.deletePost(postId);
    }
}
