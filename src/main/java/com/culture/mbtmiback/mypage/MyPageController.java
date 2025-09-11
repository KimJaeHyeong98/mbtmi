package com.culture.mbtmiback.mypage;

import com.culture.mbtmiback.account.AccountModel;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api")
public class MyPageController {

    @Autowired
    private MyPageService myPageService;


    //유저 본인 태그 검색
    @GetMapping("/user/tags")
    public List<TagModel> getUserTags(@RequestParam String type, HttpSession session) {
        AccountModel sessionUser = (AccountModel) session.getAttribute("user");
        System.out.println("인텔리제이 서버: /user/tags 호출됨");
        System.out.println("세션 user: " + sessionUser);

        if (sessionUser == null) {
            return List.of(); // 세션 없으면 빈 리스트
        }

        return myPageService.getUserTags(sessionUser.getUser_id(), type);
    }
    //유저 본인 태그 변경
    @PutMapping("/update-tags")
    public ResponseEntity<Void> updateTags(@RequestBody List<String> tags, HttpSession session) {
        AccountModel user = (AccountModel) session.getAttribute("user");
        if (user == null) return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();

        myPageService.updateUserTags((long) user.getUser_id(), tags);
        return ResponseEntity.ok().build();
    }

    //유저 본인 취미 검색
    @GetMapping("/user/hobby")
    public List<HobbyModel> getUserHobbys(@RequestParam String type, HttpSession session) {
        AccountModel sessionUser = (AccountModel) session.getAttribute("user");
        System.out.println("인텔리제이 서버: /user/tags 호출됨");
        System.out.println("세션 user: " + sessionUser);

        if (sessionUser == null) {
            return List.of(); // 세션 없으면 빈 리스트
        }

        return myPageService.getUserHobbys(sessionUser.getUser_id(), type);
    }

    //유저 본인 취미 변경
    @PutMapping("/update-hobbies")
    public ResponseEntity<Void> updateHobbies(@RequestBody List<String> tags, HttpSession session) {
        AccountModel user = (AccountModel) session.getAttribute("user");
        if (user == null) return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();

        myPageService.updateHobbies((long) user.getUser_id(), tags);
        return ResponseEntity.ok().build();
    }



    //상대방 성격 태그 검색
    @GetMapping("/wanted/tags")
    public List<TagModel> getDesiredtags(@RequestParam String type, HttpSession session) {
        AccountModel sessionUser = (AccountModel) session.getAttribute("user");
        System.out.println("인텔리제이 서버: /user/tags 호출됨");
        System.out.println("세션 user: " + sessionUser);

        if (sessionUser == null) {
            return List.of(); // 세션 없으면 빈 리스트
        }

        return myPageService.getDesiredtags(sessionUser.getUser_id(), type);
    }


    //상대방  취미 검색
    @GetMapping("/wanted/hobby")
    public List<HobbyModel> getDesiredHobbys(@RequestParam String type, HttpSession session) {
        AccountModel sessionUser = (AccountModel) session.getAttribute("user");
        System.out.println("인텔리제이 서버: /user/tags 호출됨");
        System.out.println("세션 user: " + sessionUser);

        if (sessionUser == null) {
            return List.of(); // 세션 없으면 빈 리스트
        }

        return myPageService.getDesiredHobbys(sessionUser.getUser_id(), type);
    }



    @PutMapping("/update/desired")
    public ResponseEntity<String> updateDesired(@RequestBody DesiredModel desiredModel,
                                                HttpSession session) {
        AccountModel sessionUser = (AccountModel) session.getAttribute("user");
        if (sessionUser == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("로그인 필요");
        }

        System.out.println("업데이트 요청 유저ID: " + sessionUser.getUser_id());
        System.out.println("전달받은 MBTI: " + desiredModel.getWantedMbti());
        System.out.println("전달받은 Tags: " + desiredModel.getWantedTags());
        System.out.println("전달받은 Hobbies: " + desiredModel.getWantedHobbies());

        // DB 업데이트
        myPageService.updateDesiredInfo(sessionUser.getUser_id(), desiredModel.getWantedMbti(), desiredModel.getWantedTags(), desiredModel.getWantedHobbies());

        // 세션 반영
        sessionUser.setDesired_mbti(desiredModel.getWantedMbti());
        session.setAttribute("user", sessionUser);

        return ResponseEntity.ok("업데이트 완료");
    }

    //아이디 중복체크
    @GetMapping("/users/check-username")
    public ResponseEntity<Map<String, Object>> checkUsername(@RequestParam String username) {
        boolean exists = myPageService.isUsernameTaken(username);
        return ResponseEntity.ok(Map.of("exists", exists));
    }

    //개인정보 수정
    @PostMapping("/update/profile")
    public ResponseEntity<String> updateProfile(
            @RequestPart("name") String name,
            @RequestPart("location") String location,
            @RequestPart("self_intro") String selfIntro,
            @RequestPart(value = "profileFile", required = false) MultipartFile profileFile,
            HttpSession session
    ) {
        try {
            AccountModel sessionUser = (AccountModel) session.getAttribute("user");
            if (sessionUser == null) return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("로그인 필요");

            String fileName = null;
            if (profileFile != null && !profileFile.isEmpty()) {
                fileName = UUID.randomUUID() + "_" + profileFile.getOriginalFilename();
                Path uploadDir = Paths.get(System.getProperty("user.dir"), "uploads");
                Files.createDirectories(uploadDir);
                Path savePath = uploadDir.resolve(fileName);
                profileFile.transferTo(savePath.toFile());
                System.out.println("파일 저장 완료: " + savePath.toAbsolutePath());
            }

            myPageService.updateUserProfile(sessionUser.getUser_id(), name, location, selfIntro, fileName);

            sessionUser.setName(name);
            sessionUser.setLocation(location);
            sessionUser.setSelf_intro(selfIntro);
            if (fileName != null) sessionUser.setPhoto_url(fileName);
            session.setAttribute("user", sessionUser);

            return ResponseEntity.ok("프로필 업데이트 완료");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("서버 에러: " + e.getMessage());
        }
    }



}
