package com.culture.mbtmiback.posts;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/posts")
public class PostsC {

    @Autowired
    private PostsService postsService;

    @GetMapping ("/postsmain")
    public List<PostsModel> getAllPosts() {
        return postsService.getAllPosts();
    }

    // 게시글 삭제 API
    @DeleteMapping("/{postId}")
    public ResponseEntity<String> deletePost(@PathVariable Long postId) {
        int result = postsService.deletePost(postId);
        if (result > 0) {
            return ResponseEntity.ok("게시글이 삭제되었습니다.");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("해당 ID의 게시글을 찾을 수 없습니다.");
        }
    }
}
