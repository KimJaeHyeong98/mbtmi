import styled from "styled-components";
import logoimage from "../assets/img/mbtmi.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import ChattingRoomNav from "../chatting/ChattingRoomNav.jsx";
import BottomNav from "../globaltool/BottomNav.jsx";

import HomeModal from "../homeSearchModal/HomeModal";
import NothingResultHome from "./NothingResultHome";
const Container = styled.div`
    min-height: 100dvh;
    width: 100vw;
    overflow-x: hidden;
    display: flex;
    box-sizing: border-box;
    flex-direction: column; /* 🔥 하단 네비 배치를 위해 세로 정렬 */

    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
    position: relative; /* 🔥 하단 네비 절대위치 기준 */
    padding-top: 60px;
`;

const LogoImage = styled.img`
    position: absolute;
    top: 0px;
    left: 30px;
    object-fit: cover;
    width: 150px;
    align-items: center;
`;

const Card = styled.div`
    width: 100%;
    max-width: 350px;
    padding: 24px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.4);
    background-image: linear-gradient(
        120deg,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0.1) 40%,
        transparent 100%
    );
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    color: #fff;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 80px;
`;

const ProfileImage = styled.img`
    width: 80%;
    border-radius: 20px;
    object-fit: cover;
`;

const Name = styled.h2`
    font-size: 1.5rem;
`;

const TagList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
`;

const Tag = styled.span`
    background: #fbc2eb;
    color: #333;
    padding: 6px 12px;
    border-radius: 12px;
    font-size: 0.85rem;
`;

const Btns = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
`;

const Btn = styled.span`
    padding: 6px 6px;
    border-radius: 12px;
    font-size: 30px;
`;

const CardWrapper = styled.div`
    display: flex;
    justify-content: center; /* 혹은 space-between 등 */
    overflow-x: hidden; /* 슬라이드가 범위를 넘어가면 잘림 */
    width: 100%;
`;

const CardSlide = styled.div`
    display: flex;
    transition: transform 0.3s ease;
    transform: translateX(${(props) => -props.index * 100}%);
`;

const CardItem = styled.div`
    width: 100%; // 부모 폭에 맞춤
    flex-shrink: 0; // 카드가 줄어들지 않음
    display: flex;
    flex-direction: column;
    align-items: center;
`;
// 모달용
const SettingButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    appearance: none;
    border: none;
    background: #000000ff;
    font-size: 24px; /* 점 크기 조금 키움 */
    padding: 7px 10px;
    border-radius: 16px;
    cursor: pointer;
`;
const Home = () => {
    const navigate = useNavigate();

    const [currentUser, setCurrentUser] = useState(null);
    const [randomUsers, setRandomUsers] = useState([]); // 랜덤 유저 50명 배열
    const [currentIndex, setCurrentIndex] = useState(0); // 현재 카드 인덱스
    const [isModalOpen, setIsModalOpen] = useState(false); // ✅ 모달 상태 추가
    const [filter, setFilter] = useState({
        gender: null,
        ageDown: null,
        ageUp: null,
        location: null,
    }); // 필터 상태 유지용

    const [noResult, setNoResult] = useState(false); // 조건에 맞는 유저 없을 때 상태

    // 공용 함수
    const loadRandomUsers = async (filters = {}) => {
        try {
            const res = await axios.get(
                `/api/users/random/${currentUser.user_id}`,
                {
                    params: filters,
                    // gender, ageDown, ageUp, 로컬 같은 조건 전달
                }
            );
            const users = res.data;
            if (users.length === 0) {
                // 조건에 맞는 유저가 없는 경우 재검색 요청페이지 있음
                setNoResult(true); // 새로운 상태 추가
            } else {
                setNoResult(false);
                setRandomUsers(users);
                setCurrentIndex(0);
            }
        } catch (err) {
            console.error(err);
        }
    };

    // 처음 유저 불러오기
    const fetchRandomUsers = async () => {
        if (!currentUser) return;
        await loadRandomUsers(); // 조건 없을 때
    };
    // 카드 이전으로 가기
    const handlePrev = () => {
        const prevIndex = currentIndex - 1;
        if (prevIndex < 0) {
            // 첫 카드에서 이전 누르면 마지막 카드로 가거나 막을지 선택
            // 1) 순환하게 할 경우:
            setCurrentIndex(randomUsers.length - 1);

            // 2) 그냥 막을 경우:
            return;
        } else {
            setCurrentIndex(prevIndex);
        }
    };

    // 카드 끝났을 때 새로 불러오기
    const handleNext = async () => {
        const nextIndex = currentIndex + 1;
        if (nextIndex >= randomUsers.length) {
            await loadRandomUsers(filter); // 필터조건 유지하며 새로 불러오기
        } else {
            setCurrentIndex(nextIndex);
        }
    };

    useEffect(() => {
        // 1️⃣ 현재 로그인한 유저 정보 가져오기
        const fetchCurrentUser = async () => {
            try {
                const res = await axios.get("/api/check-session");
                if (res.data.loggedIn) {
                    setCurrentUser(res.data.user); // currentUser 세팅
                }
            } catch (err) {
                console.error("세션 체크 실패:", err);
            }
        };

        fetchCurrentUser();
    }, []);

    useEffect(() => {
        if (currentUser) fetchRandomUsers();
    }, [currentUser]);

    const [heartedUsers, setHeartedUsers] = useState(new Set()); // 내가 하트한 유저 저장

    // 하트 누르기 09/11 추가
    // 하트 누르면 DB에 추가/삭제 요청
    // 이미 하트한 유저면 취소, 아니면 추가
    const handleHeart = async () => {
        const targetUserId = randomUsers[currentIndex].user_id;

        try {
            const res = await axios.post("/api/hearts", {
                fromUser: currentUser.user_id,
                toUser: targetUserId,
            });

            if (res.data.success) {
                alert("하트를 눌렀습니다!");
                setHeartedUsers((prev) => new Set(prev).add(targetUserId)); // 하트한 유저 추가
            } else {
                setHeartedUsers((prev) => {
                    const updated = new Set(prev);
                    updated.delete(targetUserId);
                    return updated;
                });
                alert("하트를 취소했습니다.");
            }
        } catch (err) {
            console.error("하트 요청 실패:", err);
        }
    };

    return (
        <Container>
            <LogoImage
                src={logoimage}
                alt=""
                style={{ userSelect: "none", WebkitUserDrag: "none" }}
            />
            <CardWrapper>
                {noResult ? (
                    <NothingResultHome
                        onOpenModal={() => setIsModalOpen(true)}
                    />
                ) : (
                    <CardSlide index={currentIndex}>
                        {randomUsers.map((user) => (
                            <CardItem key={user.user_id}>
                                <Card>
                                    {/*검색 세팅 버튼 */}
                                    <SettingButton
                                        onClick={() => setIsModalOpen(true)}>
                                        ☰
                                    </SettingButton>
                                    <div>
                                        <ProfileImage
                                            src={user.photo_url}
                                            alt="profile"
                                        />
                                        <Name>이름: {user.name}</Name>
                                        <p>MBTI: {user.mbti}</p>
                                        <p>자기소개: {user.self_intro}</p>
                                    </div>
                                    {/* // 백엔드에서 받아온 태그 중 SELF 타입만 필터링 */}
                                    <TagList>
                                        {user.tags
                                            .filter(
                                                (tag) => tag.type === "SELF"
                                            ) // SELF 타입만
                                            .map((tag) => (
                                                <Tag key={tag.tag_id}>
                                                    #{tag.tag_name}
                                                </Tag>
                                            ))}
                                    </TagList>
                                    {/* <Btn onClick={handleNext}>Next</Btn> */}
                                    <Btns>
                                        {/* 이전버튼 */}
                                        <Btn
                                            onClick={() => {
                                                handlePrev(); // 다음 카드로
                                            }}>
                                            ⬅️
                                        </Btn>
                                        {/* 하트 */}
                                        <Btn onClick={handleHeart}>
                                            {heartedUsers.has(
                                                randomUsers[currentIndex]
                                                    .user_id
                                            )
                                                ? "❤️"
                                                : "🤍"}
                                        </Btn>
                                        {/* 엑스 버튼 */}
                                        <Btn
                                            onClick={() => {
                                                alert("패스했습니다.");
                                                handleNext();
                                            }}>
                                            ❌
                                        </Btn>
                                        {/* 다음버튼 */}
                                        <Btn
                                            onClick={() => {
                                                handleNext(); // 다음 카드로
                                            }}>
                                            ➡️
                                        </Btn>
                                    </Btns>
                                </Card>
                            </CardItem>
                        ))}
                        {/* //여기가 검색결과 없는곳 */}
                    </CardSlide>
                )}
            </CardWrapper>
            ){/* ✅ 하단 네비 */}
            <BottomNav />
            <HomeModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSelectFilter={(filters) => {
                    console.log("선택된 필터:", filters);
                    setFilter(filters); // state에 저장
                    loadRandomUsers(filters); // 필터 적용해서 새 데이터 불러오기
                }}
            />
        </Container>
    );
};

export default Home;
