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

// ================= Styled Components =================
const Container = styled.div`
  min-height: 100dvh;
  width: 100vw;
  overflow-x: hidden;
  display: flex;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
  position: relative;
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
  cursor: pointer;
`;

const SettingButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
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

// ================= Home Component =================
const Home = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [randomUsers, setRandomUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState({
    gender: null,
    ageDown: null,
    ageUp: null,
    location: null,
  });
  const [noResult, setNoResult] = useState(false);
  const [heartedUsers, setHeartedUsers] = useState(new Set());
  const [noHeartedUsers, setNoHeartedUsers] = useState(new Set());
  const [predictScore, setPredictScore] = useState(null);

  const [automlError, setAutomlError] = useState(null);
  // ✅ 내 액션 불러오기
  const fetchMyActions = async () => {
    if (!currentUser) return;
    try {
      const resHeart = await axios.get(`/api/hearts/my/${currentUser.user_id}`);
      const resX = await axios.get(`/api/hearts/myX/${currentUser.user_id}`);
      setHeartedUsers(new Set(resHeart.data));
      setNoHeartedUsers(new Set(resX.data));
    } catch (err) {
      console.error("내 액션 불러오기 실패:", err);
    }
  };

  // 랜덤 유저 불러오기
  const loadRandomUsers = async (filters = {}) => {
    if (!currentUser) return;
    try {
      const res = await axios.get(`/api/users/random/${currentUser.user_id}`, {
        params: filters,
      });
      console.log("📌 백엔드 응답 데이터:", res.data);
      const users = res.data;
      if (users.length === 0) {
        setNoResult(true);
      } else {
        setNoResult(false);
        setRandomUsers(users);
        setCurrentIndex(0);
        await fetchPredictScore(users[0]); // 첫 번째 유저 점수
      }
    } catch (err) {
      console.error(err);
    }
  };

  const fetchRandomUsers = async () => {
    await loadRandomUsers(filter);
    await fetchMyActions();
  };

  // ================= AutoML 예측 =================
  // Home.jsx - fetchPredictScore 부분
  const fetchPredictScore = async (targetUser) => {
    if (!currentUser || !targetUser) return;

    try {
      const AGE_DIFF = Math.abs(
        new Date(currentUser.birth_date).getFullYear() -
          new Date(targetUser.birth_date).getFullYear()
      );

      const TAG_OVERLAP =
        targetUser.tags?.filter((t) => t.type === "SELF").length || 0;
      const HOBBY_OVERLAP =
        targetUser.hobbies?.filter((h) => h.type === "SELF").length || 0;

      // 🔹 AutoML 문자열 기대 → 모두 String()
      const data = {
        FROM_USER: String(currentUser.user_id),
        TO_USER: String(targetUser.user_id),
        FROM_MBTI: String(currentUser.mbti),
        TO_MBTI: String(targetUser.mbti),
        AGE_DIFF: String(AGE_DIFF),
        TAG_OVERLAP: String(TAG_OVERLAP),
        HOBBY_OVERLAP: String(HOBBY_OVERLAP),
      };

      console.log("AutoML 요청 데이터:", data);

      const res = await axios.post("http://localhost:5000/predict", data, {
        withCredentials: true,
      });

      if (res.data.prediction) {
        // 🔹 Vertex AI Tabular 결과 구조: [{label, score}, ...]
        // '1' 클래스가 매칭 성공일 경우 score 사용
        const matchScoreObj = res.data.prediction.find((p) => p.label === "1");
        const score = matchScoreObj ? matchScoreObj.score : 0;
        setPredictScore(score);
        setAutomlError(null); // 성공하면 에러 초기화
      } else if (res.data.error) {
        setPredictScore(null);
        setAutomlError(res.data.error);
        console.warn("AutoML 에러:", res.data.error);
      } else {
        setPredictScore(null);
        setAutomlError("Unknown prediction error");
      }
    } catch (err) {
      setPredictScore(null);
      setAutomlError(err.message);
      console.error("Axios 요청 에러:", err);
    }
  };

  // ================= 카드 이동 =================
  const handlePrev = () => {
    const prevIndex =
      currentIndex - 1 < 0 ? randomUsers.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    fetchPredictScore(randomUsers[prevIndex]);
  };

  const handleNext = async () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex >= randomUsers.length) {
      await loadRandomUsers(filter);
      await fetchMyActions();
    } else {
      setCurrentIndex(nextIndex);
      fetchPredictScore(randomUsers[nextIndex]);
    }
  };

  // ================= 하트/관심없음 =================
  const handleHeart = async () => {
    const targetUserId = randomUsers[currentIndex].user_id;
    try {
      const res = await axios.post("/api/hearts/toggle", null, {
        params: { fromUser: currentUser.user_id, toUser: targetUserId },
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
        params: { fromUser: currentUser.user_id, toUser: targetUserId },
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

  // ================= 초기 마운트 =================
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const res = await axios.get("/api/check-session");
        if (res.data.loggedIn) {
          setCurrentUser(res.data.user);
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

  // ================= Render =================
  return (
    <Container>
      <LogoImage src={logoimage} alt="logo" />

      <CardWrapper>
        {noResult ? (
          <NothingResultHome onOpenModal={() => setIsModalOpen(true)} />
        ) : (
          <CardSlide index={currentIndex}>
            {randomUsers.map((user) => (
              <CardItem key={user.user_id}>
                <Card>
                  <SettingButton onClick={() => setIsModalOpen(true)}>
                    ☰
                  </SettingButton>
                  <ProfileImage src={user.photo_url} alt="profile" />
                  <Name>{user.name}</Name>
                  <p>MBTI: {user.mbti}</p>
                  <p>자기소개: {user.self_intro}</p>

      
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
                      {heartedUsers.has(user.user_id) ? "❤️" : "🤍"}
                    </Btn>
                    <Btn
                      onClick={() => {
                        handleNotinterested();
                        setTimeout(handleNext, 1500);
                      }}
                    >
                      {noHeartedUsers.has(user.user_id) ? "🚫" : "❌"}
                    </Btn>
                    <Btn onClick={handleNext}>➡️</Btn>
                  </Btns>
                  {automlError && (
                    <GuideText style={{ color: "red" }}>
                      AutoML 에러: {automlError}
                    </GuideText>
                  )}
                  <GuideText>
                    🤍 = 하트하기 / ❤️ = 이미 하트함 <br />❌ = 관심없음 / 🚫 =
                    이미 관심없음
                  </GuideText>

                  {predictScore !== null && (
                    <GuideText>
                      이 유저와의 매칭 확률: {Math.round(predictScore * 100)}%
                    </GuideText>
                  )}
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
