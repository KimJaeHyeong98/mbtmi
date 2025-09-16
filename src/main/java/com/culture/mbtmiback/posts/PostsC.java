package com.culture.mbtmiback.posts;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
