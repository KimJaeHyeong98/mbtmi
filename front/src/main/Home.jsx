// Home.jsx
import styled from "styled-components";
import logoimage from "../assets/img/mbtmi.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

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

/* transient prop: $index */
const CardSlide = styled.div`
  display: flex;
  transition: transform 0.3s ease;
  ${(props) => `transform: translateX(${-props.$index * 100}%);`}
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

/* ===== Home Component (통합 버전) ===== */
const Home = ({ homeState, setHomeState }) => {
  const navigate = useNavigate();
  const { user: currentUser, loggedIn, loading } = useAuth();

  // 기본 상태 (homeState가 있으면 복원)
  const [randomUsers, setRandomUsers] = useState(homeState?.randomUsers || []);
  const [currentIndex, setCurrentIndex] = useState(
    homeState?.currentIndex || 0
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [filter, setFilter] = useState({
    gender: null,
    ageDown: null,
    ageUp: null,
    location: null,
  });
  const [noResult, setNoResult] = useState(false);

  const initialHearted =
    homeState?.heartedUsers instanceof Set
      ? homeState.heartedUsers
      : new Set(homeState?.heartedUsers || []);
  const initialNoHearted =
    homeState?.noHeartedUsers instanceof Set
      ? homeState.noHeartedUsers
      : new Set(homeState?.noHeartedUsers || []);

  const [heartedUsers, setHeartedUsers] = useState(initialHearted);
  const [noHeartedUsers, setNoHeartedUsers] = useState(initialNoHearted);

  const [initialized, setInitialized] = useState(false);
  const [loadingUsers, setLoadingUsers] = useState(true);

  // AutoML 상태
  const [predictScore, setPredictScore] = useState(null);
  const [automlError, setAutomlError] = useState(null);

  // ---------------- fetchMyActions ----------------
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

  // ---------------- loadRandomUsers ----------------
  const loadRandomUsers = async (filters = {}) => {
    if (!currentUser) return;
    try {
      setLoadingUsers(true);
      const res = await axios.get(`/api/users/random/${currentUser.user_id}`, {
        params: filters,
      });
      const users = res.data;
      if (!users || users.length === 0) {
        setNoResult(true);
        setRandomUsers([]);
        setPredictScore(null);
      } else {
        setNoResult(false);
        setRandomUsers(users);
        setCurrentIndex(0);
        // 첫 유저에 대해 예측 수행
        await fetchPredictScore(users[0]);
      }
    } catch (err) {
      console.error("랜덤 유저 불러오기 실패:", err);
    } finally {
      setLoadingUsers(false);
    }
  };

  const fetchRandomUsers = async () => {
    if (!currentUser) return;
    await loadRandomUsers(filter);
    await fetchMyActions();
  };

  // ---------------- AutoML 예측 ----------------
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

      const data = {
        FROM_USER: String(currentUser.user_id),
        TO_USER: String(targetUser.user_id),
        FROM_MBTI: String(currentUser.mbti),
        TO_MBTI: String(targetUser.mbti),
        AGE_DIFF: String(AGE_DIFF),
        TAG_OVERLAP: String(TAG_OVERLAP),
        HOBBY_OVERLAP: String(HOBBY_OVERLAP),
      };

      // console.log("AutoML 요청 데이터:", data);

      const res = await axios.post("http://localhost:5000/predict", data, {
        withCredentials: true,
      });

      if (res.data.prediction) {
        const matchScoreObj = res.data.prediction.find((p) => p.label === "1");
        const score = matchScoreObj ? matchScoreObj.score : 0;
        setPredictScore(score);
        setAutomlError(null);
      } else if (res.data.error) {
        setPredictScore(null);
        setAutomlError(res.data.error);
      } else {
        setPredictScore(null);
        setAutomlError("Unknown prediction error");
      }
    } catch (err) {
      setPredictScore(null);
      setAutomlError(err.message || "AutoML 요청 실패");
      console.error("AutoML 요청 에러:", err);
    }
  };

  // ---------------- 버튼 동작 ----------------
  const handlePrev = () => {
    if (!randomUsers || randomUsers.length === 0) return;
    const prevIndex =
      currentIndex - 1 < 0 ? randomUsers.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    fetchPredictScore(randomUsers[prevIndex]);
  };

  const handleNext = async () => {
    if (!randomUsers || randomUsers.length === 0) return;
    const nextIndex = currentIndex + 1;
    if (nextIndex >= randomUsers.length) {
      // 더 불러오기
      await loadRandomUsers(filter);
      await fetchMyActions();
    } else {
      setCurrentIndex(nextIndex);
      fetchPredictScore(randomUsers[nextIndex]);
    }
  };

  // ---------------- 하트 / 관심없음 ----------------
  const handleHeart = async () => {
    if (!randomUsers[currentIndex] || !currentUser) return;
    const targetUserId = randomUsers[currentIndex].user_id;
    try {
      const res = await axios.post("/api/hearts/toggle", null, {
        params: { fromUser: currentUser.user_id, toUser: targetUserId },
      });
      // 응답이 true면 하트 추가, false면 삭제 (기존 로직 가정)
      if (res.data) {
        setHeartedUsers((prev) => {
          const updated = new Set(prev);
          updated.add(targetUserId);
          return updated;
        });
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
    if (!randomUsers[currentIndex] || !currentUser) return;
    const targetUserId = randomUsers[currentIndex].user_id;
    try {
      const res = await axios.post("/api/hearts/toggleX", null, {
        params: { fromUser: currentUser.user_id, toUser: targetUserId },
      });
      if (res.data) {
        setNoHeartedUsers((prev) => {
          const updated = new Set(prev);
          updated.add(targetUserId);
          return updated;
        });
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

  // ---------------- 초기 마운트 및 상태 복원 ----------------
  useEffect(() => {
    if (!initialized && currentUser) {
      if (homeState) {
        setRandomUsers(homeState.randomUsers || []);
        setHeartedUsers(
          homeState.heartedUsers instanceof Set
            ? homeState.heartedUsers
            : new Set(homeState.heartedUsers || [])
        );
        setNoHeartedUsers(
          homeState.noHeartedUsers instanceof Set
            ? homeState.noHeartedUsers
            : new Set(homeState.noHeartedUsers || [])
        );
        setCurrentIndex(homeState.currentIndex || 0);
        setLoadingUsers(false);
        // 예측값 재요청 (현재 인덱스)
        if ((homeState.randomUsers || []).length > 0) {
          fetchPredictScore(
            (homeState.randomUsers || [])[homeState.currentIndex || 0]
          );
        }
      } else {
        fetchRandomUsers();
      }
      setInitialized(true);
    }
  }, [currentUser, homeState, initialized]);

  // 상태를 부모로 저장 (있을 때만)
  useEffect(() => {
    if (typeof setHomeState === "function") {
      setHomeState({
        randomUsers,
        heartedUsers,
        noHeartedUsers,
        currentIndex,
      });
    }
  }, [randomUsers, heartedUsers, noHeartedUsers, currentIndex, setHomeState]);

  // currentIndex 변경 시 예측 재요청(안정성용)
  useEffect(() => {
    if (
      randomUsers &&
      randomUsers.length > 0 &&
      currentIndex >= 0 &&
      currentIndex < randomUsers.length
    ) {
      fetchPredictScore(randomUsers[currentIndex]);
    }
    
  }, [currentIndex]);

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
          <p style={{ color: "white", fontSize: "20px" }}>LOADING...</p>
        ) : noResult ? (
          <NothingResultHome onOpenModal={() => setIsModalOpen(true)} />
        ) : (
          <CardSlide $index={currentIndex}>
            {randomUsers.map((user) => {
              const profileSrc = user.photo_url
                ? user.photo_url.startsWith("http")
                  ? user.photo_url
                  : `http://localhost:8080/uploads/${user.photo_url}`
                : logoimage;

              return (
                <CardItem key={user.user_id}>
                  <Card>
                    <ModalWrapper>
                      <PhotoButton onClick={() => setIsPhotoModalOpen(true)}>
                        🖼️
                      </PhotoButton>
                      <SettingButton onClick={() => setIsModalOpen(true)}>
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
                          .filter((tag) => tag.type === "SELF")
                          .map((tag) => (
                            <Tag key={tag.tag_id}>#{tag.tag_name}</Tag>
                          ))}
                    </TagList>

                    <TagList>
                      {user.hobbies &&
                        user.hobbies
                          .filter((hobby) => hobby.type === "SELF")
                          .map((hobby) => (
                            <Tag key={hobby.hobby_id}>#{hobby.hobby_name}</Tag>
                          ))}
                    </TagList>

                    <hr />

                    <div>{user.name}이 원하는 상대방</div>
                    <TagList>
                      {user.desiredTags?.map((tag) => (
                        <Tag key={tag.tag_id}>#{tag.tag_name}</Tag>
                      ))}
                    </TagList>
                    <TagList>
                      {user.desiredHobbies?.map((hobby) => (
                        <Tag key={hobby.hobby_id}>#{hobby.hobby_name}</Tag>
                      ))}
                    </TagList>

                    <p>MBTI: {user.desired_mbti}</p>

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

                    {predictScore !== null && (
                      <GuideText>
                        이 유저와의 매칭 확률: {Math.round(predictScore * 100)}%
                      </GuideText>
                    )}
                  </Card>
                </CardItem>
              );
            })}
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

      {isPhotoModalOpen && (
        <PhotoModal onClick={() => setIsPhotoModalOpen(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ProfileImageWrapper>
              <ProfileImage
                src={
                  randomUsers[currentIndex]?.photo_url
                    ? randomUsers[currentIndex].photo_url.startsWith("http")
                      ? randomUsers[currentIndex].photo_url
                      : `http://localhost:8080/uploads/${randomUsers[currentIndex].photo_url}`
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
