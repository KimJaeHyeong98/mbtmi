import React, { use, useEffect, useState } from "react";
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
  console.log("location.state:", location.state);

  // 페이지네이션 상태
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // 한 페이지당 ?개
  const totalPages = Math.ceil(data.length / itemsPerPage);

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

  //상호하트용 유즈이펙트
  useEffect(() => {
    if (!selectedProfile) return;
    const checkMutualHeart = async () => {
      try {
        const res = await axios.post("/api/hearts/mutual_check", null, {
          params: {
            fromUser: selectedProfile.userId,
            toUser: currentUser.user_id,
          },
        });
        const updatedData = data.map((p) =>
          p.userId === selectedProfile.userId
            ? { ...p, mutualHeart: res.data } // ✅ data 배열 업데이트
            : p
        );
        setData(updatedData);
        console.log("mutual 상태 (받은 쪽):", res.data);
      } catch (err) {
        console.error("상호 하트 확인 실패:", err);
        setMutualStatus(false); // 오류 시 false로 설정
      }
    };
    checkMutualHeart();
  }, [selectedProfile]);

  if (isLoading) return <div>받은 하트를 불러오는 중...</div>;
  if (data.length === 0) return <div>아직 받은 하트가 없어요.</div>;

  // 현재 페이지에 맞는 데이터 자르기
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

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

      {currentData.map((profile, idx) => (
        <ActivityReceived
          key={idx}
          profile={profile}
          currentUser={currentUser}
          onMutualUpdate={(updatedProfile) =>
            setData((prev) =>
              prev.map((p) =>
                p.userId === updatedProfile.userId ? updatedProfile : p
              )
            )
          }
          onOpenModal={(profile) => {
            setSelectedProfile(profile);
            setIsModalOpen(true);
          }}
        />
      ))}
      {/* 페이지 번호 네비게이션 */}
      <Pagination>
        {Array.from({ length: totalPages }, (_, idx) => (
          <PageButton
            key={idx}
            onClick={() => setCurrentPage(idx + 1)}
            $active={currentPage === idx + 1}
          >
            {idx + 1}
          </PageButton>
        ))}
      </Pagination>
      {isModalOpen && selectedProfile && (
        <ActivityModal
          name={selectedProfile.name}
          activity={`${selectedProfile.name}님이 나에게 하트를 보냈습니다.`}
          btn={selectedProfile.mutualHeart ? "상호 하트💞" : "하트 보내기"}
          profileImage={selectedProfile.photoUrl}
          mutual={selectedProfile.mutualHeart} // ✅ 추가
          currentUser={currentUser} // 채팅 시 필요
          targetUser={selectedProfile} // 상대방 정보
          onClose={() => setIsModalOpen(false)}
        />
      )}
      <BottomNav />
    </Container>
  );
};
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  margin-right: 50px;
  margin-top: 30px;
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
/* 페이지네이션 스타일 */
const Pagination = styled.div`
  position: fixed;
  bottom: 80px; /* BottomNav 위쪽 정도에 고정 */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 12px;
`;
const PageButton = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  border: none;
  background-color: ${({ $active }) => ($active ? "#4a90e2" : "#eee")};
  color: ${({ $active }) => ($active ? "#fff" : "#333")};
  cursor: pointer;
  font-size: 14px;
`;

export default ActivityNavReceived;
