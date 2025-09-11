package com.culture.mbtmiback.createAc;

import com.culture.mbtmiback.account.AccountModel;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class CreateAcController {

    @Autowired
    private CreateAcService createAcService;


    @PostMapping("/signup")
    public Map<String, Object> signUp(@RequestBody ModelWrapper modelWrapper) {
        System.out.println("태그 제외 정보들 : " + modelWrapper.getCreateAcModel());
        System.out.println("태그 정보들 : " + modelWrapper.getCreateUserTagsModel());
        System.out.println("원하는 태그 정보들 : " + modelWrapper.getCreateUserDesiredTagsModel());
        System.out.println("받은 전체 데이터 : " + modelWrapper);

        CreateAcModel ac = modelWrapper.getCreateAcModel();
        CreateUserTagsModel my_tags = modelWrapper.getCreateUserTagsModel();
        CreateUserDesiredTagsModel de_Tags = modelWrapper.getCreateUserDesiredTagsModel();

        createAcService.signUp(ac, my_tags, de_Tags);

        // 응답용 데이터 만들기
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("user", ac); // 필요하면 DB에서 저장된 유저 정보 가져와서 넣어도 됨
        return response;
    }

    @PostMapping("/profilephoto")
    public Map<String, Object> profilePhoto(@RequestBody ProfileModel profileModel) {
        System.out.println("사진 업로드" + profileModel.getPhoto_url());
    }

}

