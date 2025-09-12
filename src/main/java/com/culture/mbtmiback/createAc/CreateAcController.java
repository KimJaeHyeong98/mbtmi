package com.culture.mbtmiback.createAc;

import com.culture.mbtmiback.account.AccountModel;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Map;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api")
public class CreateAcController {

    @Autowired
    private CreateAcService createAcService;



    @GetMapping("/users/exists")
    public Map<String, Boolean> exists(@RequestParam String username) {
        boolean exists = createAcService.usernameExists(username);
        return Map.of("exists", exists);
    }


    @PostMapping("/signup")
    public Map<String, Object> signUp(@RequestBody ModelWrapper modelWrapper) {
        System.out.println("태그 제외 정보들 : " + modelWrapper.getCreateAcModel());
        System.out.println("태그 정보들 : " + modelWrapper.getCreateUserTagsModel());
        System.out.println("원하는 태그 정보들 : " + modelWrapper.getCreateUserDesiredTagsModel());
        System.out.println("받은 전체 데이터 : " + modelWrapper);

        CreateAcModel ac = modelWrapper.getCreateAcModel();
        CreateUserTagsModel my_tags = modelWrapper.getCreateUserTagsModel();
        CreateUserDesiredTagsModel de_Tags = modelWrapper.getCreateUserDesiredTagsModel();

        // 서비스에서 insert 후 pk(userId) 리턴 받기
        Long userId = createAcService.signUp(ac, my_tags, de_Tags);

        System.out.println(userId);

        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("userId", userId); // ✅ 프론트에서 쓸 수 있음
        return response;
    }


    @PostMapping("/profilephoto")
    public ResponseEntity<String> profilePhoto(@RequestPart("userId") String userIdStr, @RequestPart(value = "profileFile", required = false) MultipartFile profileFile) {



        try {
            Long userId = Long.parseLong(userIdStr);
            System.out.println("받은 userId: " + userId);
            System.out.println("받은 파일: " + profileFile);

            if (profileFile != null && !profileFile.isEmpty()) {
                String fileName = UUID.randomUUID() + "_" + profileFile.getOriginalFilename();
                Path uploadDir = Paths.get(System.getProperty("user.dir"), "uploads");
                Files.createDirectories(uploadDir);
                Path savePath = uploadDir.resolve(fileName);
                profileFile.transferTo(savePath.toFile());

                // DB에 userId + fileName 저장 로직
                createAcService.updateUserProfilePhoto(userId, fileName);

                return ResponseEntity.ok("프로필 사진 업로드 완료");
            } else {
                return ResponseEntity.badRequest().body("파일이 없습니다");
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("서버 에러: " + e.getMessage());
        }

    }

}

