package com.culture.mbtmiback.home;

import com.culture.mbtmiback.account.AccountModel;
import jakarta.servlet.http.HttpSession;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class RandomUserC {

    private final RandomUserService randomUserService;

    public RandomUserC(RandomUserService randomUserService) {
        this.randomUserService = randomUserService;
    }

    @GetMapping("/random/{currentUserId}")
    public ResponseEntity<List<RandomUserModel>> getRandomUsers(@PathVariable Long currentUserId,
                                                                @RequestParam(required = false) String gender,
                                                                @RequestParam(required = false) Integer ageDown,
                                                                @RequestParam(required = false) Integer ageUp,
                                                                @RequestParam(required = false) String location) {

        System.out.println("===== /random 호출 =====");
        System.out.println("현재 로그인한 userId: " + currentUserId);
        System.out.println("필터 조건 - gender: " + gender + ", ageDown: " + ageDown + ", ageUp: " + ageUp + ", location: " + location);

        List<RandomUserModel> randomUsers = randomUserService.getRandomUsersExceptMe(currentUserId, gender, ageDown, ageUp, location);

        if (randomUsers == null) {
            System.out.println("랜덤 유저가 존재하지 않음");
            return ResponseEntity.noContent().build();
        }

        System.out.println("랜덤 유저 반환: " + randomUsers);
        return ResponseEntity.ok(randomUsers);
    }
}
