import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Activity from "./Activity";
import ActivityModal from "./ActivityModal"; // 모달도 쓰니까 import
import BottomNav from "../globaltool/BottomNav";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import ActivityReceived from "./ActivityReceived";

const ActivityNavReceived = () => {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate(); // ✅ 여기서 훅 생성
  const location = useLocation();
  const { currentUser } = location.state || {};

  const like = { name: "Like💜" };

  const activityGiveTake = {
    btn: [
      { label: "보낸 내역", path: "/ActivityNav" },
      { label: "받은 내역", path: "/ActivityNavReceived" },
    ],
  };

  useEffect(() => {
    if (!currentUser?.user_id) {
      console.log("currentUser가 없으므로 데이터 로딩을 건너뜁니다.");
      setIsLoading(false);
      return;
    }

    const receivedActivities = async () => {
      try {
        const res = await axios.get(
          `/api/hearts/who_hearted_me/${currentUser.user_id}`
        );
        setData(res.data);
        console.log("받은 하트 목록:", res.data);
      } catch (err) {
        console.error("받은 하트 불러오기 실패:", err);
      } finally {
        setIsLoading(false); // 로딩 상태를 완료로 설정
      }
    };

    receivedActivities();
  }, [currentUser]);

  if (isLoading) return <div>받은 하트를 불러오는 중...</div>;
  if (data.length === 0) return <div>아직 받은 하트가 없어요.</div>;

  return (
    <Container>
      <Div>
        <Nav style={{ border: "1px solid lightgray", padding: "10px" }}>
          <Name>{like.name} - 받은 내역</Name>
          <Btns>
            {activityGiveTake.btn.map((btn, index) => (
              <Btnb
                key={index}
                onClick={() => navigate(btn.path, { state: { currentUser } })}
              >
                {btn.label}
              </Btnb>
            ))}
          </Btns>
        </Nav>
      </Div>
      {data.map((profile, idx) => (
        <ActivityReceived
          key={idx}
          name={profile.name}
          activity={`${profile.name}님이 나에게 하트를 보냈습니다.`}
          btn={profile.mutualHeart ? "상호 하트💞" : "하트 보내기"}
          profileImage={profile.photoUrl}
          onClick={() => {
            setSelectedProfile(profile);
            setIsModalOpen(true);
          }}
        />
      ))}
      {isModalOpen && selectedProfile && (
        <ActivityModal
          name={selectedProfile.name}
          activity={`${selectedProfile.name}님이 나에게 하트를 보냈습니다.`}
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
  flex-direction: column;
  background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
  position: relative;
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
  cursor: pointer;
`;
export default ActivityNavReceived;
