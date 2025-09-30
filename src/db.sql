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

ALTER TABLE POSTS DROP COLUMN LIKE_COUNT;

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

<<<<<<< HEAD
SELECT
    u.user_id,
    u.username,
    -- 본인 태그
    (SELECT LISTAGG(t.tag_name, ', ') WITHIN GROUP (ORDER BY t.tag_id)
     FROM USER_TAGS ut
              JOIN TAGS t ON ut.tag_id = t.tag_id
     WHERE ut.user_id = u.user_id AND ut.type = 'SELF') AS self_tags,
    -- 원하는 상대 태그
    (SELECT LISTAGG(t.tag_name, ', ') WITHIN GROUP (ORDER BY t.tag_id)
     FROM USER_TAGS ut
              JOIN TAGS t ON ut.tag_id = t.tag_id
     WHERE ut.user_id = u.user_id AND ut.type = 'DESIRED') AS desired_tags,
    -- 본인 취미
    (SELECT LISTAGG(h.hobby_name, ', ') WITHIN GROUP (ORDER BY h.hobby_id)
     FROM USER_HOBBIES uh
              JOIN HOBBIES h ON uh.hobby_id = h.hobby_id
     WHERE uh.user_id = u.user_id AND uh.type = 'SELF') AS self_hobbies,
    -- 원하는 상대 취미
    (SELECT LISTAGG(h.hobby_name, ', ') WITHIN GROUP (ORDER BY h.hobby_id)
     FROM USER_HOBBIES uh
              JOIN HOBBIES h ON uh.hobby_id = h.hobby_id
     WHERE uh.user_id = u.user_id AND uh.type = 'DESIRED') AS desired_hobbies
FROM USERS u
ORDER BY u.user_id;



select * from HEARTS order by HEART_ID;



-- 기존 USERS 기반 HEARTS 자동 생성 예시
INSERT INTO HEARTS (heart_id, from_user, to_user, action_type, created_at)
SELECT hearts_seq.NEXTVAL,  -- 시퀀스 사용 (또는 LEVEL + MAX(heart_id)로도 가능)
       from_u.user_id,
       to_u.user_id,
       CASE WHEN MOD(LEVEL,5)=0 THEN 'X' ELSE 'HEART' END,
       SYSDATE - DBMS_RANDOM.VALUE(0,30)
FROM (SELECT user_id FROM USERS) from_u,
     (SELECT user_id FROM USERS) to_u
WHERE from_u.user_id != to_u.user_id  -- 자기 자신에게는 X
  AND ROWNUM <= 2000;                  -- 총 2000건 생성


-- HEARTS 랜덤 10,000건 생성 (Oracle)
INSERT INTO HEARTS (heart_id, from_user, to_user, action_type, created_at)
SELECT hearts_seq.NEXTVAL,   -- heart_id 시퀀스 사용
       from_u.user_id,
       to_u.user_id,
       CASE WHEN MOD(ROWNUM,5)=0 THEN 'X' ELSE 'HEART' END,  -- 5분의 1은 X, 나머지 HEART
       SYSDATE - DBMS_RANDOM.VALUE(0,30)  -- 최근 30일 랜덤 날짜
FROM (SELECT user_id FROM USERS WHERE user_id BETWEEN 21 AND 147) from_u
         CROSS JOIN (SELECT user_id FROM USERS WHERE user_id BETWEEN 21 AND 147) to_u
WHERE from_u.user_id != to_u.user_id
  AND ROWNUM <= 10000;  -- 총 10,000건 생성






-- 중복 방지 랜덤 HEARTS 생성
INSERT INTO HEARTS (heart_id, from_user, to_user, action_type, created_at)
SELECT hearts_seq.NEXTVAL,
       f.user_id,
       t.user_id,
       CASE WHEN MOD(ROWNUM,5)=0 THEN 'X' ELSE 'HEART' END,
       SYSDATE - DBMS_RANDOM.VALUE(0,30)
FROM (
         SELECT user_id FROM USERS WHERE user_id BETWEEN 21 AND 147
     ) f
         JOIN (
    SELECT user_id FROM USERS WHERE user_id BETWEEN 21 AND 147
) t ON f.user_id != t.user_id
WHERE NOT EXISTS (
    SELECT 1
    FROM HEARTS h
    WHERE h.from_user = f.user_id AND h.to_user = t.user_id
)
  AND ROWNUM <= 10000;


INSERT INTO HEARTS (heart_id, from_user, to_user, action_type, created_at)
SELECT hearts_seq.NEXTVAL,
       f.user_id,
       t.user_id,
       CASE WHEN MOD(ROWNUM,5)=0 THEN 'X' ELSE 'HEART' END,
       SYSDATE - DBMS_RANDOM.VALUE(0,30)
FROM USERS f
         CROSS JOIN USERS t
WHERE f.user_id != t.user_id
  AND NOT EXISTS (
    SELECT 1
    FROM HEARTS h
    WHERE h.from_user = f.user_id
      AND h.to_user = t.user_id
)
  AND ROWNUM <= 10000;





INSERT INTO HEARTS (heart_id, from_user, to_user, action_type, created_at)
SELECT hearts_seq.NEXTVAL, from_user, to_user,
       CASE WHEN MOD(ROWNUM,5)=0 THEN 'X' ELSE 'HEART' END,
       created_at
FROM (
         SELECT f.user_id AS from_user,
                t.user_id AS to_user,
                SYSDATE - DBMS_RANDOM.VALUE(0,30) AS created_at
         FROM USERS f
                  CROSS JOIN USERS t
         WHERE f.user_id != t.user_id
           AND NOT EXISTS (
             SELECT 1
             FROM HEARTS h
             WHERE h.from_user = f.user_id
               AND h.to_user = t.user_id
         )
     )
WHERE ROWNUM <=  10;


select * from HEARTS ;


SELECT ut.user_id, ut.tag_id, t.tag_name, ut.type
FROM USER_TAGS ut
         JOIN TAGS t ON ut.tag_id = t.tag_id
WHERE ut.user_id = 22 AND ut.type = 'DESIRED';

select * from USER_TAGS;


select * from TAGS;

SELECT uh.user_id, uh.hobby_id, h.hobby_name, uh.type
FROM USER_HOBBIES uh
         JOIN HOBBIES h ON uh.hobby_id = h.hobby_id
WHERE uh.user_id = 22 AND uh.type = 'SELF';

delete from HEARTS where HEART_ID = 9;

select * from USERS;

select * from USER_HOBBIES;





INSERT INTO HEARTS (heart_id, from_user, to_user, action_type, created_at)
SELECT hearts_seq.NEXTVAL, from_user, to_user,
       CASE WHEN MOD(ROWNUM,5)=0 THEN 'X' ELSE 'HEART' END,
       created_at
FROM (
         SELECT f.user_id AS from_user,
                t.user_id AS to_user,
                SYSDATE - DBMS_RANDOM.VALUE(0,30) AS created_at
         FROM USERS f
                  CROSS JOIN USERS t
         WHERE f.user_id != t.user_id
           AND NOT EXISTS (
             SELECT 1
             FROM HEARTS h
             WHERE h.from_user = f.user_id
               AND h.to_user = t.user_id
         )
         ORDER BY DBMS_RANDOM.VALUE()
     )
WHERE ROWNUM <= 900;








=======
>>>>>>> 2b81674d441456f37562e97f85e4a5880967e523
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

select * from USERS;

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

select Count(post_id) as count from post_likes where post_id = 27;

select * from POSTS order by post_id;

delete from POSTS where post_id = 2 ;


select * from POSTS;

select * from hearts ;
delete from USER_TAGS where USER_ID =2;
delete from USER_HOBBIES where  USER_ID= 2;
delete from USERS where USER_ID = 2;



delete from hearts where HEART_ID = 30;

select * from USERS order by  USER_ID  ;

SELECT name FROM USERS WHERE name LIKE '%오지영%' ORDER BY USER_ID;



SELECT
    p.post_id,
    p.user_id,
    p.text,
    p.image_url,
    p.created_at,
    u.name,
    u.mbti,
    u.location,
    u.photo_url,
    u.BIRTH_DATE,
    COUNT(pl.user_id) AS like_count
FROM posts p
         JOIN users u ON p.user_id = u.user_id
         LEFT JOIN post_likes pl ON p.post_id = pl.post_id
GROUP BY
    p.post_id, p.user_id, p.text, p.image_url, p.created_at, u.name, u.mbti, u.location, u.photo_url, u.BIRTH_DATE
ORDER BY p.created_at DESC;



SELECT p.post_id, p.user_id, p.text, p.image_url,
       (SELECT COUNT(*) FROM post_likes pl WHERE pl.post_id = p.post_id) AS like_count,
       p.created_at,
       u.name, u.mbti, u.location, u.photo_url, u.birth_date
FROM posts p
         JOIN users u ON p.user_id = u.user_id
ORDER BY p.created_at DESC;


SELECT * from users order by user_id;
SELECT * from users WHERE user_id = 130;

SELECT * from users WHERE name = '하준호';


SELECT name FROM USERS WHERE name LIKE '%이하늘%' ORDER BY USER_ID;

UPDATE users SET name = '하준호' WHERE user_id = 130;


ALTER TABLE users
    ADD status VARCHAR2(20) DEFAULT 'ACTIVE';



CREATE TABLE reports (
                         report_id     NUMBER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
                         reported_id   NUMBER NOT NULL,   -- 신고 당한 유저
                         reporter_id   NUMBER NOT NULL,   -- 신고한 유저
                         post_id       NUMBER NOT NULL,   -- 신고된 게시글
                         reason        VARCHAR2(200),     -- 신고 사유
                         content       VARCHAR2(1000),    -- 신고 상세 설명
                         created_at    DATE DEFAULT SYSDATE,
                         status        VARCHAR2(20) DEFAULT 'PENDING',

                         CONSTRAINT fk_reported FOREIGN KEY (reported_id) REFERENCES users(user_id),
                         CONSTRAINT fk_reporter FOREIGN KEY (reporter_id) REFERENCES users(user_id),
                         CONSTRAINT fk_post FOREIGN KEY (post_id) REFERENCES posts(post_id)
);

INSERT INTO reports (reported_id, reporter_id, post_id, reason, content)
VALUES (1, 107, 27, '욕설', '게시글 내용에 지속적으로 욕설이 포함되어 불쾌감을 주었습니다.');


SELECT * FROM reports;


SELECT r.report_id,
       u1.username AS reported_user,
       u2.username AS reporter_user,
       p.text AS post_text,
       r.reason,
       r.status,
       r.created_at
FROM reports r
         JOIN users u1 ON r.reported_id = u1.user_id
         JOIN users u2 ON r.reporter_id = u2.user_id
         JOIN posts p ON r.post_id = p.post_id
ORDER BY r.created_at DESC;
ALTER TABLE POSTS
    ADD (LIKE_COUNT NUMBER DEFAULT 0 NOT NULL);

UPDATE USERS
SET PHOTO_URL = NULL;


UPDATE JH.USERS
SET PHOTO_URL = NULL
WHERE PHOTO_URL IS NOT NULL;

COMMIT;



SELECT COUNT(*) FROM USERS WHERE PHOTO_URL IS NOT NULL;

DELETE FROM POSTS WHERE post_id = 47;

SELECT POST_ID, TEXT FROM POSTS ORDER BY post_id;


SELECT POST_ID FROM POST_LIKES ORDER BY post_id;

DELETE  FROM POST_LIKES WHERE post_id = 47;

DELETE FROM HEARTS
WHERE HEART_ID = 1940;
    ADD (LIKE_COUNT NUMBER DEFAULT 0 NOT NULL);

UPDATE USERS SET SELF_INTRO = '안녕하세요 채은성입니다' WHERE user_id = 147;
UPDATE USERS SET NAME = '이서윤' WHERE user_id = 90;
UPDATE USERS SET GENDER = 'M' WHERE user_id = 21;
COMMIT;

SELECT user_id,NAME, self_intro from USERS ORDER BY user_id;



DELETE FROM USER_HOBBIES WHERE USER_ID = 255;
DELETE FROM USER_TAGS WHERE USER_ID = 255;

DELETE FROM USERS WHERE USER_ID = 255;

SELECT * FROM USERS WHERE user_id = 255;


SELECT * FROM USERS ORDER BY user_id;


SELECT * FROM HEARTS WHERE FROM_USER = 255;
SELECT * FROM HEARTS WHERE TO_USER = 255;
DELETE FROM HEARTS WHERE HEART_ID = 1981;


SELECT * FROM POST_LIKES WHERE user_id = 267;
SELECT * FROM POSTS WHERE user_id = 267;


SELECT * FROM USER_HOBBIES WHERE user_id = 267;
SELECT * FROM USER_TAGS WHERE user_id = 267;
