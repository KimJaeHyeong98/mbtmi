CREATE TABLE USERS (
                       user_id       NUMBER PRIMARY KEY,                 -- PK
                       username      VARCHAR2(50) UNIQUE NOT NULL,       -- 아이디
                       password      VARCHAR2(100) NOT NULL,             -- 비밀번호
                       name          VARCHAR2(50) NOT NULL,              -- 이름
                       birth_date    DATE,                               -- 생년월일
                       created_at    DATE DEFAULT SYSDATE,               -- 생성일
                       mbti          VARCHAR2(4),                        -- 본인 MBTI
                       desired_mbti  VARCHAR2(4),                        -- 원하는 상대방 MBTI
                       self_intro    VARCHAR2(1000),                     -- 자기소개
                       photo_url     VARCHAR2(255)                       -- 프로필 사진 경로

);
SELECT * FROM users WHERE username='123' AND password='1234';

create sequence users_seq;

select * from user_tags;

insert into user_tags values (22,1,'DESIRED');

select * from USERS;

-- 만약 1000자도 부족할 수 있다면
ALTER TABLE USERS MODIFY photo_url CLOB;

select * from USER_HOBBIES;

insert into users values (users_seq.nextval,'system',1234,'admin','1994-03-17',sysdate,'ESTP','INFP','안녕하세요 많은 이용 바랍니다','pig.png');
insert into users values (users_seq.nextval,'yjm',123,'유지민','2000-04-11',sysdate,'ENTP','INFP','안녕하세요 유지민입니다','karina.png');

insert into users values (users_seq.nextval,'123',123,'유지민','2000-04-11',sysdate,'ENTP','INFP','안녕하세요 유지민입니다','karina.png');

ALTER TABLE USERS
    ADD email VARCHAR2(50);

UPDATE USERS SET email = 'temp@example.com' WHERE email IS NULL;

ALTER TABLE USERS
    MODIFY email VARCHAR2(50) NOT NULL;

ALTER TABLE USERS
    ADD location VARCHAR2(50);

MERGE INTO USERS u
USING (
    SELECT user_id,
           ROW_NUMBER() OVER (ORDER BY DBMS_RANDOM.VALUE) AS rn
    FROM USERS
    WHERE location IS NULL
) t
ON (u.user_id = t.user_id)
WHEN MATCHED THEN
    UPDATE SET u.location = CASE MOD(t.rn - 1, 17) + 1
                                WHEN 1 THEN '서울특별시'
                                WHEN 2 THEN '부산광역시'
                                WHEN 3 THEN '대구광역시'
                                WHEN 4 THEN '인천광역시'
                                WHEN 5 THEN '광주광역시'
                                WHEN 6 THEN '대전광역시'
                                WHEN 7 THEN '울산광역시'
                                WHEN 8 THEN '세종특별자치시'
                                WHEN 9 THEN '경기도'
                                WHEN 10 THEN '강원도'
                                WHEN 11 THEN '충청북도'
                                WHEN 12 THEN '충청남도'
                                WHEN 13 THEN '전라북도'
                                WHEN 14 THEN '전라남도'
                                WHEN 15 THEN '경상북도'
                                WHEN 16 THEN '경상남도'
                                WHEN 17 THEN '제주특별자치도'
        END;

-- 오늘의 글 테이블
CREATE TABLE POSTS
( post_id NUMBER PRIMARY KEY,
  user_id NUMBER NOT NULL,
  text VARCHAR2(1000) NOT NULL,
  image_url VARCHAR2(255),
  like_count NUMBER DEFAULT 0 NOT NULL,
  created_at DATE DEFAULT SYSDATE NOT NULL,
  CONSTRAINT fk_posts_user FOREIGN KEY (user_id) REFERENCES USERS(user_id) ON DELETE CASCADE );

CREATE SEQUENCE posts_seq START WITH 1 INCREMENT BY 1;

--오늘의 글 좋아요 테이블
CREATE TABLE POST_LIKES (
post_id    NUMBER NOT NULL,
user_id    NUMBER NOT NULL,
created_at DATE DEFAULT SYSDATE NOT NULL,
CONSTRAINT pk_post_likes PRIMARY KEY (post_id, user_id),
CONSTRAINT fk_pl_post   FOREIGN KEY (post_id) REFERENCES POSTS(post_id) ON DELETE CASCADE,
CONSTRAINT fk_pl_user   FOREIGN KEY (user_id) REFERENCES USERS(user_id) ON DELETE CASCADE
);
SELECT constraint_name, column_name
FROM user_cons_columns
WHERE table_name = 'USERS';

select * from users order by user_id;




CREATE SEQUENCE hearts_seq
    START WITH 1
    INCREMENT BY 1
    NOCACHE
    NOCYCLE;

SELECT user_id, username, name, photo_url FROM users WHERE username = 'user30';

--더미 데이터, post테스트
INSERT INTO posts (post_id, user_id, text, image_url, like_count)
VALUES (posts_seq.NEXTVAL, 117, '첫 글 테스트입니다!', 'abc123.jpg', 0);

SELECT p.*, u.name, u.photo_url
FROM posts p JOIN users u ON u.user_id = p.user_id
ORDER BY p.created_at DESC;

--좋아요 테스트
-- user_id=117이 방금 글(post_id=?에) 좋아요
INSERT INTO post_likes (post_id, user_id) VALUES (:postId, 117);
UPDATE posts SET like_count = like_count + 1 WHERE post_id = :postId;

select * from posts;

INSERT INTO POSTS (
    post_id, user_id, text, image_url
) VALUES (
             posts_seq.NEXTVAL,   -- 글 번호 시퀀스
             185,                   -- 작성자 (곽여름 user_id)
             '그래도 해야지',
             'rrr.jpeg'
         );


INSERT INTO POST_LIKES (post_id, user_id)
VALUES (3, 22);  -- post_id=1번 글에 user_id=2번 유저가 좋아요

select * from POSTS;

select * from POST_LIKES;

select Count(post_id) as count from post_likes where post_id = 3;

select * from POSTS;


SELECT
    p.post_id,
    p.user_id,
    p.text,
    p.image_url,
    p.created_at,
    u.name,
    u.mbti,
    COUNT(pl.user_id) AS like_count
FROM posts p
         JOIN users u ON p.user_id = u.user_id
         LEFT JOIN post_likes pl ON p.post_id = pl.post_id
GROUP BY
    p.post_id, p.user_id, p.text, p.image_url, p.created_at, u.name, u.mbti
ORDER BY p.created_at DESC;
