package com.culture.mbtmiback.heart;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/hearts")
public class HeartsCheckC {

    private final HeartsCheckService heartsCheckService;

    public HeartsCheckC(HeartsCheckService heartsCheckService) {
        this.heartsCheckService = heartsCheckService;
    }

}
