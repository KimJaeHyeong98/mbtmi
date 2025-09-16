import styled from "styled-components";
import Activity from "./Activity";
import BottomNav from "../globaltool/BottomNav";
import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import ActivityModal from "./ActivityModal";

const ActivityNav = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const { currentUser } = location.state || {}; // 여기서 받아야 함

  console.log("currentUser 상태:", currentUser);

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // ✅ 로딩 상태 추가

  const like = {
    name: "Like💜",
  };

  const activityGiveTake = {
    btn: [
      { label: "보낸 내역", path: "/ActivityNav" },
      { label: "받은 내역", path: "/ActivityNavReceived" },
    ],
  };
  // 모달 상태 관리
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  // 모달 열기 핸들러

  useEffect(() => {
    console.log(
      "현재 유저 아이디:",
      currentUser.user_id,
      "현재 유저 아이디2:",
      currentUser.userId
    );

    // 1. curruntUser가 없으면 API 호출을 하지 않습니다.
    //    그리고 로딩 상태를 '완료'로 바꿉니다.
    if (!currentUser?.user_id) {
      console.log("currentUser가 없으므로 데이터 로딩을 건너뜁니다.");
      setIsLoading(false);
      return;
    }

    console.log("현재 유저 아이디:", currentUser.user_id);
    const fetchActivities = async () => {
      try {
        const res = await axios.get(
          `/api/hearts/hearted/${currentUser.user_id}`
        );
        setData(res.data);
        console.log("하트 내역 데이터:", res.data);
      } catch (err) {
        console.error("하트 내역 불러오기 실패:", err);
      } finally {
        // 3. API 호출이 성공하든 실패하든, 마지막에 로딩을 끝냅니다.
        setIsLoading(false);
      }
    };
    fetchActivities();
  }, [currentUser]);
  // 4. 로딩 중일 때는 로딩 메시지를 반환하여 아무것도 보여주지 않습니다.
  if (isLoading) {
    return <div>활동 내역을 불러오는 중...</div>;
  }

  // 5. 로딩이 끝난 후, 데이터가 없다면 빈 화면을 보여줍니다.
  if (data.length === 0) {
    return <div>아직 주고받은 하트가 없어요.</div>;
  }
  return (
    <Container>
      <Div>
        <Nav style={{ border: "1px solid lightgray", padding: "10px" }}>
          <Name>{like.name}</Name>
          <Btns>
            {activityGiveTake.btn.map((btn, index) => (
              <Btnb
                key={index}
                onClick={() => navigate(btn.path, { state: { currentUser } })}
                style={{
                  cursor: "pointer",
                }}
              >
                {btn.label} {/* ← 여기 수정 */}
              </Btnb>
            ))}
          </Btns>
        </Nav>
      </Div>
      {/* Activity 여러 개 반복 */}
      {data.map((profile, idx) => (
        <Activity
          key={idx}
          name={profile.name}
          activity={`${profile.name}님께 하트를 보냈습니다.`}
          btn={profile.mutualHeart ? "상호 하트💞" : "하트 보내기"}
          profileImage={profile.photoUrl}
          onClick={() => {
            setSelectedProfile(profile); // ✅ 클릭된 프로필 저장
            setIsModalOpen(true); // ✅ 모달 열기
          }}
        />
      ))}
      <div style={{ height: "50px" }}>{/*  */}</div>
      {/* {data.map((profile, idx) => (
        <div key={idx}>
          {idx} - {profile.name} - {profile.photoUrl}
        </div>
      ))} */}{" "}
      {/* // 디버깅용 */}
      {isModalOpen && selectedProfile && (
        <ActivityModal
          name={selectedProfile.name}
          activity={`${selectedProfile.name}님께 하트를 보냈습니다.`}
          btn={selectedProfile.mutualHeart ? "상호 하트💞" : "하트 보내기"}
          profileImage={selectedProfile.photoUrl}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      <BottomNav />
    </Container>
  );
};
const Div = styled.div`
  display: flex;
  width: 400px;
  align-items: left;
`;
const Container = styled.div`
  min-height: 100dvh;
  width: 100vw;
  overflow-x: hidden;
  display: flex;
  box-sizing: border-box;
  flex-direction: column; /* 🔥 하단 네비 배치를 위해 세로 정렬 */
  background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
  position: relative; /* 🔥 하단 네비 절대위치 기준 */
`;
const Nav = styled.div`
  margin: 20px 10px;
  align-items: center;
`;

const Name = styled.h2`
  margin-bottom: 10px;
  font-size: 25pt;
`;

const Btns = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Btnb = styled.button`
  padding: 6px 12px;
  border-radius: 10px;
  font-size: 10px;
  opacity: 80%;
`;

export default ActivityNav;
