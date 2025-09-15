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

select * from USERS;

ALTER TABLE USERS ADD login_type VARCHAR2(20) DEFAULT 'NORMAL' NOT NULL;
ALTER TABLE USERS ADD provider_uid VARCHAR2(100);
ALTER TABLE USERS ADD email_verified CHAR(1) DEFAULT 'N' NOT NULL;

ALTER TABLE USERS ADD email VARCHAR2(50);

UPDATE USERS
SET email = 'temp_' || user_id || '@example.com'
WHERE email IS NULL;

ALTER TABLE USERS MODIFY email VARCHAR2(50) NOT NULL;
ALTER TABLE USERS ADD CONSTRAINT uq_users_email UNIQUE (email);




SELECT * FROM users WHERE username='123' AND password='1234';

create sequence users_seq;

select * from USERS;


insert into users values (users_seq.nextval,'system',1234,'admin','1994-03-17',sysdate,'ESTP','INFP','안녕하세요 많은 이용 바랍니다','pig.png');
insert into users values (users_seq.nextval,'yjm',123,'유지민','2000-04-11',sysdate,'ENTP','INFP','안녕하세요 유지민입니다','karina.png');

CREATE TABLE TAGS (
                      tag_id    NUMBER PRIMARY KEY,
                      tag_name  VARCHAR2(100) NOT NULL
);

CREATE TABLE USER_TAGS (
                           user_id   NUMBER REFERENCES USERS(user_id),
                           tag_id    NUMBER REFERENCES TAGS(tag_id),
                           type      VARCHAR2(20) CHECK (type IN ('SELF', 'DESIRED')),  -- 본인/원하는 상대 구분
                           CONSTRAINT pk_user_tags PRIMARY KEY (user_id, tag_id, type)
);

CREATE TABLE HOBBIES (
                         hobby_id    NUMBER PRIMARY KEY,
                         hobby_name  VARCHAR2(100) NOT NULL
);

CREATE TABLE USER_HOBBIES (
                              user_id   NUMBER REFERENCES USERS(user_id),
                              hobby_id  NUMBER REFERENCES HOBBIES(hobby_id),
                              type      VARCHAR2(20) CHECK (type IN ('SELF', 'DESIRED')),  -- 본인/원하는 상대 구분
                              CONSTRAINT pk_user_hobbies PRIMARY KEY (user_id, hobby_id, type)
);

CREATE TABLE HEARTS (
                        heart_id    NUMBER PRIMARY KEY,
                        from_user   NUMBER REFERENCES USERS(user_id),
                        to_user     NUMBER REFERENCES USERS(user_id),
                        created_at  DATE DEFAULT SYSDATE
);



select * from TAGS;


select  * from USERS order by  user_id;


select * from HOBBIES;


select  * from USER_HOBBIES;



SELECT


    u.name,


    t.tag_name,
    ut.type
FROM
    users u
        JOIN
    user_tags ut
    ON u.user_id = ut.user_id
        JOIN
    tags t
    ON ut.tag_id = t.tag_id
WHERE
    u.user_id BETWEEN 21 AND 29  -- user02~user10
ORDER BY
    u.user_id, t.tag_id;

select * from TAGS;


-- user02 (ID: 21)
INSERT INTO USER_HOBBIES VALUES (21,1,'DESIRED');
INSERT INTO USER_HOBBIES VALUES (21,4,'DESIRED');
INSERT INTO USER_HOBBIES VALUES (21,5,'DESIRED');
INSERT INTO USER_HOBBIES VALUES (21,10,'DESIRED');
INSERT INTO USER_HOBBIES VALUES (21,12,'DESIRED');
INSERT INTO USER_HOBBIES VALUES (21,14,'DESIRED');

-- user03 (ID: 22)
INSERT INTO user_tags VALUES (22,2,'SELF');
INSERT INTO user_tags VALUES (22,3,'SELF');
INSERT INTO user_tags VALUES (22,6,'SELF');
INSERT INTO user_tags VALUES (22,11,'SELF');
INSERT INTO user_tags VALUES (22,15,'SELF');
INSERT INTO user_tags VALUES (22,18,'SELF');

-- user04 (ID: 23)
INSERT INTO user_tags VALUES (23,1,'SELF');
INSERT INTO user_tags VALUES (23,7,'SELF');
INSERT INTO user_tags VALUES (23,8,'SELF');
INSERT INTO user_tags VALUES (23,16,'SELF');
INSERT INTO user_tags VALUES (23,17,'SELF');
INSERT INTO user_tags VALUES (23,19,'SELF');

-- user05 (ID: 24)
INSERT INTO user_tags VALUES (24,2,'SELF');
INSERT INTO user_tags VALUES (24,4,'SELF');
INSERT INTO user_tags VALUES (24,9,'SELF');
INSERT INTO user_tags VALUES (24,13,'SELF');
INSERT INTO user_tags VALUES (24,20,'SELF');
INSERT INTO user_tags VALUES (24,21,'SELF');

-- user06 (ID: 25)
INSERT INTO user_tags VALUES (25,3,'SELF');
INSERT INTO user_tags VALUES (25,5,'SELF');
INSERT INTO user_tags VALUES (25,6,'SELF');
INSERT INTO user_tags VALUES (25,22,'SELF');
INSERT INTO user_tags VALUES (25,23,'SELF');
INSERT INTO user_tags VALUES (25,24,'SELF');

-- user07 (ID: 26)
INSERT INTO user_tags VALUES (26,7,'SELF');
INSERT INTO user_tags VALUES (26,8,'SELF');
INSERT INTO user_tags VALUES (26,9,'SELF');
INSERT INTO user_tags VALUES (26,25,'SELF');
INSERT INTO user_tags VALUES (26,26,'SELF');
INSERT INTO user_tags VALUES (26,27,'SELF');

-- user08 (ID: 27)
INSERT INTO user_tags VALUES (27,1,'SELF');
INSERT INTO user_tags VALUES (27,2,'SELF');
INSERT INTO user_tags VALUES (27,5,'SELF');
INSERT INTO user_tags VALUES (27,10,'SELF');
INSERT INTO user_tags VALUES (27,14,'SELF');
INSERT INTO user_tags VALUES (27,18,'SELF');

-- user09 (ID: 28)
INSERT INTO user_tags VALUES (28,3,'SELF');
INSERT INTO user_tags VALUES (28,4,'SELF');
INSERT INTO user_tags VALUES (28,6,'SELF');
INSERT INTO user_tags VALUES (28,11,'SELF');
INSERT INTO user_tags VALUES (28,15,'SELF');
INSERT INTO user_tags VALUES (28,19,'SELF');

-- user10 (ID: 29)
INSERT INTO user_tags VALUES (29,5,'SELF');
INSERT INTO user_tags VALUES (29,7,'SELF');
INSERT INTO user_tags VALUES (29,8,'SELF');
INSERT INTO user_tags VALUES (29,16,'SELF');
INSERT INTO user_tags VALUES (29,20,'SELF');
INSERT INTO user_tags VALUES (29,21,'SELF');

----------------------------
-- chat

create table chat_room (
    room_id number(3)  NOT NULL,
    user1_id NUMBER(10) NOT NULL,
    user2_id NUMBER(10) NOT NULL
);
create sequence chat_room_seq;


insert into chat_room values (chat_room_seq.nextval, 10, 20);
insert into chat_room values (chat_room_seq.nextval, 10, 21);
insert into chat_room values (chat_room_seq.nextval, 10, 22);
insert into chat_room values (chat_room_seq.nextval, 4, 1);
insert into chat_room values (chat_room_seq.nextval, 2, 4);

select * from chat_room where user1_id = 4 or user2_id = 4;

SELECT
    cr.room_id,
    CASE WHEN cr.user1_id = 4 THEN cr.user1_id ELSE cr.user2_id END AS user1_id,
    CASE WHEN cr.user1_id = 4 THEN cr.user2_id ELSE cr.user1_id END AS user2_id,
    u.name AS opponent_name, u.photo_url as opponent_pic
FROM chat_room cr
         JOIN users u
              ON u.user_id = (CASE WHEN cr.user1_id = 4 THEN cr.user2_id ELSE cr.user1_id END)
WHERE (cr.user1_id = 4 OR cr.user2_id = 4);

SELECT * FROM hearts WHERE from_user = 4;

SELECT
    u.user_id AS userId,
    u.name,
    u.photo_url AS photoUrl
FROM HEARTS h
         JOIN USERS u
              ON h.to_user = u.user_id
WHERE h.from_user = 4;