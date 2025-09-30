// Home.jsx
import styled from "styled-components";
import logoimage from "../assets/img/mbtmi.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import ChattingRoomNav from "../chatting/ChattingRoomNav.jsx";
import BottomNav from "../globaltool/BottomNav.jsx";
import HomeModal from "../homeSearchModal/HomeModal";
import NothingResultHome from "./NothingResultHome";
import { useAuth } from "./AuthContext.jsx";

/* ===== styled-components ===== */
const Container = styled.div`
    min-height: 100dvh;
    width: 100vw;
    overflow-x: hidden;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
`;

const LogoImage = styled.img`
    object-fit: cover;
    width: 100px;
    align-items: center;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  width: 100%;
`;

const CardSlide = styled.div`
  display: flex;
  transition: transform 0.3s ease;
  transform: translateX(${(props) => -props.index * 100}%);
`;

const CardItem = styled.div`
  width: 100%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Card = styled.div`
    width: 100%;
    max-width: 350px;
    height: 550px;
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
    margin-bottom: 10px;
`;

const ProfileImageWrapper = styled.div`
    width: 300px;
    height: 380px;
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
`;

const ProfileImage = styled.img`
    width: 100%;
    height: 100%;
    object-position: center;
`;

const Name = styled.h2`
    margin-top: 5px;
    margin-bottom: 0px;
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
    cursor: pointer;
`;


const SettingButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    appearance: none;
    border: none;
    background: #000000ff;
    font-size: 24px;
    padding: 7px 10px;
    border-radius: 16px;
    cursor: pointer;
    width: 55px;
`;

const PhotoButton = styled.button`
    position: absolute;
    top: 10px;
    right: 330px;
    appearance: none;
    border: none;
    background: #000000ff;
    font-size: 24px;
    padding: 7px 10px;
    border-radius: 16px;
    cursor: pointer;
    width: 55px;
`;

const GuideText = styled.div`
    margin-top: 12px;
    color: #fff;
    font-size: 14px;
    text-align: center;
`;

const PhotoModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    background: white;
    padding: 20px;
    border-radius: 12px;
    text-align: center;
`;

const ModalWrapper = styled.div`
    display: flex;
`;

const P = styled.div`
    margin: 8px;
`;

/* ===== Home Component ===== */
const Home = ({ homeState, setHomeState }) => {
    const navigate = useNavigate();
    const { user: currentUser, loggedIn, loading } = useAuth();

    const [randomUsers, setRandomUsers] = useState(
        homeState?.randomUsers || []
    );
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
    const [filter, setFilter] = useState({
        gender: null,
        ageDown: null,
        ageUp: null,
        location: null,
    });
    const [noResult, setNoResult] = useState(false);
    const [heartedUsers, setHeartedUsers] = useState(
        homeState?.heartedUsers || new Set()
    );
    const [noHeartedUsers, setNoHeartedUsers] = useState(
        homeState?.noHeartedUsers || new Set()
    );
    const [initialized, setInitialized] = useState(false);

    // ✅ 로딩 상태 추가
    const [loadingUsers, setLoadingUsers] = useState(true);

    useEffect(() => {
        if (!initialized && currentUser) {
            if (homeState) {
                setRandomUsers(homeState.randomUsers);
                setHeartedUsers(homeState.heartedUsers);
                setNoHeartedUsers(homeState.noHeartedUsers);
                setCurrentIndex(homeState.currentIndex || 0);
                setLoadingUsers(false);
            } else {
                fetchRandomUsers();
            }
            setInitialized(true);
        }
    }, [currentUser, homeState, initialized]);

    // 상태 저장
    useEffect(() => {
        setHomeState({
            randomUsers,
            heartedUsers,
            noHeartedUsers,
            currentIndex,
        });
    }, [randomUsers, heartedUsers, noHeartedUsers, currentIndex]);

    const loadRandomUsers = async (filters = {}) => {
        try {
            setLoadingUsers(true);
            const res = await axios.get(
                `/api/users/random/${currentUser.user_id}`,
                {
                    params: filters,
                }
            );
            const users = res.data;
            if (users.length === 0) {
                setNoResult(true);
            } else {
                setNoResult(false);
                setRandomUsers(users);
                setCurrentIndex(0);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoadingUsers(false);
        }
    };

    const fetchRandomUsers = async () => {
        if (!currentUser) return;
        await loadRandomUsers();
    };

    /* ===== 버튼 동작 (prev, next, heart, x) ===== */
    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev - 1 < 0 ? randomUsers.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prev) =>
            prev + 1 >= randomUsers.length ? 0 : prev + 1
        );
    };

    if (loading) return <p>로딩중...</p>;
    if (!loggedIn) return <p>로그인 해주세요</p>;

    return (
        <Container>
            <LogoImage
                src={logoimage}
                alt=""
                style={{ userSelect: "none", WebkitUserDrag: "none" }}
            />
            <CardWrapper>
                {loadingUsers ? (
                    <p style={{ color: "white", fontSize: "20px" }}>
                        LOADING...
                    </p>
                ) : noResult ? (
                    <NothingResultHome
                        onOpenModal={() => setIsModalOpen(true)}
                    />
                ) : (
                    <CardSlide $index={currentIndex}>
                        {randomUsers.map((user) => (
                            <CardItem key={user.user_id}>
                                <Card>
                                    <ModalWrapper>
                                        <PhotoButton
                                            onClick={() =>
                                                setIsPhotoModalOpen(true)
                                            }>
                                            🖼️
                                        </PhotoButton>
                                        <SettingButton
                                            onClick={() =>
                                                setIsModalOpen(true)
                                            }>
                                            ☰
                                        </SettingButton>
                                    </ModalWrapper>
                                    <div>
                                        <Name>{user.name}</Name>
                                        <P>MBTI: {user.mbti}</P>
                                        <P>{user.self_intro}</P>
                                    </div>
                                    <TagList>
                                        {user.tags &&
                                            user.tags
                                                .filter(
                                                    (tag) => tag.type === "SELF"
                                                )
                                                .map((tag) => (
                                                    <Tag key={tag.tag_id}>
                                                        #{tag.tag_name}
                                                    </Tag>
                                                ))}
                                    </TagList>
                                    <TagList>
                                        {user.hobbies
                                            ?.filter(
                                                (hobby) => hobby.type === "SELF"
                                            )
                                            .map((hobby) => (
                                                <Tag key={hobby.hobby_id}>
                                                    #{hobby.hobby_name}
                                                </Tag>
                                            ))}
                                    </TagList>
                                    <hr />
                                    <div>{user.name}이 원하는 상대방</div>
                                    <TagList>
                                        {user.desiredTags?.map((tag) => (
                                            <Tag key={tag.tag_id}>
                                                #{tag.tag_name}
                                            </Tag>
                                        ))}
                                    </TagList>
                                    <TagList>
                                        {user.desiredHobbies?.map((hobby) => (
                                            <Tag key={hobby.hobby_id}>
                                                #{hobby.hobby_name}
                                            </Tag>
                                        ))}
                                    </TagList>
                                    <p>MBTI: {user.desired_mbti}</p>
                                    <Btns>
                                        <Btn onClick={handlePrev}>⬅️</Btn>
                                        <Btn>🤍</Btn>
                                        <Btn>❌</Btn>
                                        <Btn onClick={handleNext}>➡️</Btn>
                                    </Btns>
                                </Card>
                            </CardItem>
                        ))}
                    </CardSlide>
                )}
            </CardWrapper>

            <BottomNav currentUser={currentUser} />

            <HomeModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSelectFilter={(filters) => {
                    setFilter(filters);
                    loadRandomUsers(filters);
                }}
            />

            {isPhotoModalOpen && (
                <PhotoModal onClick={() => setIsPhotoModalOpen(false)}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <ProfileImageWrapper>
                            <ProfileImage
                                src={
                                    randomUsers[currentIndex]?.photo_url
                                        ? `http://localhost:8080/uploads/${randomUsers[currentIndex].photo_url}`
                                        : logoimage
                                }
                                alt={`${randomUsers[currentIndex]?.name} 프로필`}
                                draggable={false}
                            />
                        </ProfileImageWrapper>
                    </ModalContent>
                </PhotoModal>
            )}
        </Container>
    );
};

export default Home;
