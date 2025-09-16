package com.culture.mbtmiback;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.nio.file.Paths;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    // application.properties 의 app.upload.dir 값 주입
    @Value("${app.upload.dir}")
    private String uploadDir;   // 예: C:/finalDB/postUpload/  또는 ./uploads/

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOriginPatterns(
                        "http://localhost:*",
                        "http://127.0.0.1:*"
                        // 필요하면 사내망/휴대폰 테스트용: "http://192.168.*.*:*"
                )
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true);
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // 1) 우리가 저장하는 업로드 디렉토리를 /img/** 로 노출
        String abs = Paths.get(uploadDir).toAbsolutePath().normalize().toString();
        registry.addResourceHandler("/img/**")
                .addResourceLocations("file:" + abs + "/");

        // 2) 팀원이 쓰던 상대경로 매핑을 유지하고 싶다면 그대로 둠(선택)
        String teamAbs = Paths.get(System.getProperty("user.dir"), "uploads")
                .toAbsolutePath().normalize().toString();
        registry.addResourceHandler("/uploads/**")
                .addResourceLocations("file:" + teamAbs + "/");
    }
}
