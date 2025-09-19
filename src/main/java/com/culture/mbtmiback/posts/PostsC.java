package com.culture.mbtmiback.posts;


import com.culture.mbtmiback.account.AccountModel;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/posts")
public class PostsC {

    @Autowired
    private PostsService postsService;

    @GetMapping("/postsmain")
    public ResponseEntity<List<PostsModel>> getAllPosts(HttpSession session) {
        // 1. 세션에서 로그인된 사용자 ID를 가져옵니다.
        AccountModel sessionUser = (AccountModel) session.getAttribute("user");
        // 로그인이 안 되어 있다면 -1 (또는 0)과 같은 임시 ID를 사용하거나 비로그인 처리를 합니다.
        Long currentUserId = (sessionUser != null) ? sessionUser.getUser_id() : null;

        // 2. Service에 게시글 목록과 사용자 ID를 전달합니다.
        List<PostsModel> posts = postsService.getAllPosts(currentUserId);
        return ResponseEntity.ok(posts);
    }


    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> createPost(
            @RequestParam("text") String text,
            @RequestPart(value = "file", required = false) MultipartFile file,
            HttpSession session
    )


    {
        if(file !=null) {
            System.out.println(text+file.getContentType());
        } else{
            System.out.println("text: " + text + ", file 없음");
        }

        try {
            AccountModel sessionUser = (AccountModel) session.getAttribute("user");
            if (sessionUser == null) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("로그인 필요");
            }

            String fileName = null;
            if (file != null && !file.isEmpty()) {
                fileName = UUID.randomUUID() + "_" + file.getOriginalFilename();
                Path uploadDir = Paths.get(System.getProperty("user.dir"), "uploads");
                Files.createDirectories(uploadDir);
                Path savePath = uploadDir.resolve(fileName);
                file.transferTo(savePath.toFile());
                System.out.println("파일 저장 완료: " + savePath.toAbsolutePath());
            }

            // DB insert (user_id, text, image_url)
            postsService.insertPost(sessionUser.getUser_id(), text, fileName);

            return ResponseEntity.ok("게시글 등록 완료");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("서버 에러: " + e.getMessage());
        }

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

    // 좋아요 토글
    @PostMapping("/toggleLike")
    public ResponseEntity<Map<String, Object>> toggleLike(
            @RequestParam Long postId,
            @RequestParam Long userId
    ) {
        System.out.println("toggleLike 호출 - postId: " + postId + ", userId: " + userId);
        try {
            boolean liked = postsService.toggleLike(postId, userId);
            int likeCount = postsService.getLikeCount(postId);

            Map<String, Object> result = new HashMap<>();
            result.put("liked", liked);
            result.put("likeCount", likeCount);

            return ResponseEntity.ok(result);
        } catch (Exception e) {
            e.printStackTrace(); // 어떤 예외가 나는지 콘솔 확인
            return ResponseEntity.status(500).body(Map.of("error", e.getMessage()));
        }
    }


}
