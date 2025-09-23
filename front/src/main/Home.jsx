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

const Container = styled.div`
  min-height: 100dvh;
  width: 100vw;
  overflow-x: hidden;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
  position: relative;
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
  justify-content: center;
  overflow-x: hidden;
  width: 100%;
`;

const CardSlide = styled.div`
  display: flex;
  transition: transform 0.3s ease;
  transform: translateX(${(props) => -props.$index * 100}%);
`;

const CardItem = styled.div`
  width: 100%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;

const GuideText = styled.div`
  margin-top: 12px;
  color: #fff;
  font-size: 14px;
  text-align: center;
`;

const Home = ({ homeState, setHomeState }) => {
  const navigate = useNavigate();
  const { user: currentUser, loggedIn, loading } = useAuth();

  // const [randomUsers, setRandomUsers] = useState([]);
  const [randomUsers, setRandomUsers] = useState(homeState?.randomUsers || []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState({
    gender: null,
    ageDown: null,
    ageUp: null,
    location: null,
  });
  const [noResult, setNoResult] = useState(false);

  // const [heartedUsers, setHeartedUsers] = useState(new Set());
  const [heartedUsers, setHeartedUsers] = useState(
    homeState?.heartedUsers || new Set()
  );

  // const [noHeartedUsers, setNoHeartedUsers] = useState(new Set());
  const [noHeartedUsers, setNoHeartedUsers] = useState(
    homeState?.noHeartedUsers || new Set()
  );

  const [initialized, setInitialized] = useState(false);
  useEffect(() => {
    if (!initialized && currentUser) {
      if (homeState) {
        setRandomUsers(homeState.randomUsers);
        setHeartedUsers(homeState.heartedUsers);
        setNoHeartedUsers(homeState.noHeartedUsers);
        setCurrentIndex(homeState.currentIndex || 0);
      } else {
        fetchRandomUsers();
      }
      setInitialized(true); // 한 번만 실행
    }
  }, [currentUser, homeState, initialized]);

  // 상태 변경 시 상위에 저장
  useEffect(() => {
    setHomeState({
      randomUsers,
      heartedUsers,
      noHeartedUsers,
      currentIndex, // 추가
    });
  }, [randomUsers, heartedUsers, noHeartedUsers, currentIndex]);

  // ✅ 내 액션(하트/X) 불러오기
  const fetchMyActions = async () => {
    try {
      const resHeart = await axios.get(`/api/hearts/my/${currentUser.user_id}`);
      const resX = await axios.get(`/api/hearts/myX/${currentUser.user_id}`);
      setHeartedUsers(new Set(resHeart.data));
      setNoHeartedUsers(new Set(resX.data));
    } catch (err) {
      console.error("내 액션 불러오기 실패:", err);
    }
  };

  const loadRandomUsers = async (filters = {}) => {
    try {
      const res = await axios.get(`/api/users/random/${currentUser.user_id}`, {
        params: filters,
      });
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
    }
  };

  const fetchRandomUsers = async () => {
    if (!currentUser) return;
    await loadRandomUsers();
    await fetchMyActions();
  };

  const handlePrev = () => {
    const prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
      setCurrentIndex(randomUsers.length - 1);
    } else {
      setCurrentIndex(prevIndex);
    }
  };

  // const handleNext = async () => {
  //   const nextIndex = currentIndex + 1;
  //   if (nextIndex >= randomUsers.length) {
  //     await loadRandomUsers(filter);
  //     await fetchMyActions();
  //   } else {
  //     setCurrentIndex(nextIndex);
  //   }
  // };
  const handleNext = async () => {
    const nextIndex = currentIndex + 1;

    if (nextIndex >= randomUsers.length) {
      // 다음 20명 불러오기
      const users = await loadRandomUsers(filter); // loadRandomUsers가 users 반환하도록 수정
      setCurrentIndex(0); // 새 유저 20명 중 첫 번째
      // 선택 유저 모달이 있으면 selectedUser는 그대로 유지하거나 새 유저 첫 번째로 설정
      // setSelectedUser(users[0]); // 필요 시
      await fetchMyActions();
    } else {
      setCurrentIndex(nextIndex);
      // 선택 유저도 다음 유저로 변경
      // setSelectedUser(randomUsers[nextIndex]);
    }
  };

  if (loading) return <p>로딩중...</p>;
  if (!loggedIn) return <p>로그인 해주세요</p>;

  const handleHeart = async () => {
    const targetUserId = randomUsers[currentIndex].user_id;
    try {
      const res = await axios.post("/api/hearts/toggle", null, {
        params: {
          fromUser: currentUser.user_id,
          toUser: targetUserId,
        },
      });

      if (res.data) {
        setHeartedUsers((prev) => new Set(prev).add(targetUserId));
        setNoHeartedUsers((prev) => {
          const updated = new Set(prev);
          updated.delete(targetUserId);
          return updated;
        });
      } else {
        setHeartedUsers((prev) => {
          const updated = new Set(prev);
          updated.delete(targetUserId);
          return updated;
        });
      }
    } catch (err) {
      console.error("하트 요청 실패:", err);
    }
  };

  const handleNotinterested = async () => {
    const targetUserId = randomUsers[currentIndex].user_id;
    try {
      const res = await axios.post("/api/hearts/toggleX", null, {
        params: {
          fromUser: currentUser.user_id,
          toUser: targetUserId,
        },
      });

      if (res.data) {
        setNoHeartedUsers((prev) => new Set(prev).add(targetUserId));
        setHeartedUsers((prev) => {
          const updated = new Set(prev);
          updated.delete(targetUserId);
          return updated;
        });
      } else {
        setNoHeartedUsers((prev) => {
          const updated = new Set(prev);
          updated.delete(targetUserId);
          return updated;
        });
      }
    } catch (err) {
      console.error("관심없음 요청 실패:", err);
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
          <NothingResultHome onOpenModal={() => setIsModalOpen(true)} />
        ) : (
          <CardSlide $index={currentIndex}>
            {randomUsers.map((user) => (
              <CardItem key={user.user_id}>
                <Card>
                  <SettingButton onClick={() => setIsModalOpen(true)}>
                    ☰
                  </SettingButton>
                  <div>
                    <ProfileImage src={user.photo_url} alt="profile" />
                    <Name>이름: {user.name}</Name>
                    <p>MBTI: {user.mbti}</p>
                    <p>자기소개: {user.self_intro}</p>
                  </div>
                  <TagList>
                    {user.tags
                      .filter((tag) => tag.type === "SELF")
                      .map((tag) => (
                        <Tag key={tag.tag_id}>#{tag.tag_name}</Tag>
                      ))}
                  </TagList>
                  <Btns>
                    <Btn onClick={handlePrev}>⬅️</Btn>
                    <Btn
                      onClick={() => {
                        handleHeart();
                        setTimeout(handleNext, 1500);
                      }}
                    >
                      {heartedUsers.has(randomUsers[currentIndex]?.user_id)
                        ? "❤️"
                        : "🤍"}
                    </Btn>
                    <Btn
                      onClick={() => {
                        handleNotinterested();
                        setTimeout(handleNext, 1500);
                      }}
                    >
                      {noHeartedUsers.has(randomUsers[currentIndex]?.user_id)
                        ? "🚫"
                        : "❌"}
                    </Btn>
                    <Btn onClick={handleNext}>➡️</Btn>
                  </Btns>
                  <GuideText>
                    🤍 = 하트하기 / ❤️ = 이미 하트함 <br />❌ = 관심없음 / 🚫 =
                    이미 관심없음
                  </GuideText>
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
          fetchMyActions();
        }}
      />
    </Container>
  );
};

export default Home;
