package com.culture.mbtmiback.createAc;

import com.culture.mbtmiback.account.AccountModel;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

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
    public void signUp(@RequestBody ModelWrapper modelWrapper,HttpSession session) {
        System.out.println("태그 제외 정보들 : " + modelWrapper.getCreateAcModel());
        System.out.println("태그 정보들 : " + modelWrapper.getCreateUserTagsModel());
        System.out.println("원하는 태그 정보들 : " + modelWrapper.getCreateUserDesiredTagsModel());
        System.out.println(1);

        CreateAcModel ac = modelWrapper.getCreateAcModel();
        CreateUserTagsModel my_tags = modelWrapper.getCreateUserTagsModel();
        CreateUserDesiredTagsModel de_Tags = modelWrapper.getCreateUserDesiredTagsModel();

        createAcService.signUp(ac,my_tags,de_Tags);
    }
}
