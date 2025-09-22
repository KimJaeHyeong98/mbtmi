package com.culture.mbtmiback.heart;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/hearts")
public class HeartsCheckC {

    private final HeartsCheckService heartsCheckService;

    public HeartsCheckC(HeartsCheckService heartsCheckService) {
        this.heartsCheckService = heartsCheckService;
    }

    // 특정 유저가 특정 유저에게 하트를 눌렀는지 확인 // 잘못만듬. (단방향)
    @PostMapping("/both_check")
    public ResponseEntity<Boolean> checkHeart(
            @RequestParam int fromUser,
            @RequestParam int toUser
    ) {
        boolean hasHeart = heartsCheckService.hasHearts(fromUser, toUser);
        return ResponseEntity.ok(hasHeart);
    }

    // 서로 하트 눌렀는지 확인가능하게 (양방향)
    @PostMapping("/mutual_check")
    public ResponseEntity<Boolean> checkMutualHeart(
            @RequestParam int fromUser,
            @RequestParam int toUser
    ) {
        System.out.println("서로 하트 눌렀는지 확인");
        return ResponseEntity.ok(heartsCheckService.isMutualHearts(fromUser, toUser));
    }


    // 하트 토글 (❤️ 추가 / 🤍 해제)
    @PostMapping("/toggle")
    public ResponseEntity<Boolean> toggleHeart(
            @RequestParam int fromUser,
            @RequestParam int toUser
    ) {
        boolean result = heartsCheckService.checkHearts(fromUser, toUser);
        if (result == true) {
            System.out.println("하트등록됨(백)" + "선택한유저:" + toUser);
        } else {
            System.out.println("하트해제됨(백)" + "선택해제유저:" + toUser);
        }
        return ResponseEntity.ok(result);
    }

    // 내가 하트한 유저 목록 가져오기
    @GetMapping("/hearted/{fromUser}")
    public ResponseEntity<List<HeartedUserDTO>> getHeartedUsers(
            @PathVariable int fromUser
    ) {
        List<HeartedUserDTO> users = heartsCheckService.getHeartedUsers(fromUser);
        System.out.println("내가 하트한 유저들:" + users);
        return ResponseEntity.ok(users);
    }

    // 나를 하트한 유저 목록 가져오기
    @GetMapping("/who_hearted_me/{toUser}")
    public ResponseEntity<List<HeartedUserDTO>> whoHeartedToMe(
            @PathVariable int toUser
    ) {
        List<HeartedUserDTO> users = heartsCheckService.whoHeartedToMe(toUser);
        System.out.println("나를 하트한 유저들:" +  users);
        return ResponseEntity.ok(users);
    }

    // 관심없음 토글 (x️ 추가 / x 해제)
    @PostMapping("/toggleX")
    public ResponseEntity<Boolean> toggleHeartX(
            @RequestParam int fromUser,
            @RequestParam int toUser
    ) {
        boolean result = heartsCheckService.checkHeartsX(fromUser, toUser);
        if (result == true) {
            System.out.println("관심없음 등록됨" + "선택한유저:" + toUser);
        } else {
            System.out.println("관심없음 등록됨해체됨" + "선택해제유저:" + toUser);
        }
        return ResponseEntity.ok(result);
    }


    @GetMapping("/my/{userId}")
    public ResponseEntity<List<Long>> getMyHearts(@PathVariable Long userId) {
        return ResponseEntity.ok(heartsCheckService.getMyHearts(userId));
    }

    @GetMapping("/myX/{userId}")
    public ResponseEntity<List<Long>> getMyX(@PathVariable Long userId) {
        return ResponseEntity.ok(heartsCheckService.getMyX(userId));
    }


}
