package com.culture.mbtmiback.heart;

import org.springframework.stereotype.Service;

@Service
public class HeartsCheckService {

    private final HeartsCheckMapper heartsCheckMapper;

    public HeartsCheckService(HeartsCheckMapper heartsCheckMapper){
        this.heartsCheckMapper = heartsCheckMapper;
    }

}
