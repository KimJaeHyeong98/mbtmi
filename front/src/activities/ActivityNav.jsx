import styled from "styled-components";
import Activity from "./Activity";
import BottomNav from "../globaltool/BottomNav";
import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import ActivityModal from "./ActivityModal";
import { useAuth } from "../main/AuthContext";

const ActivityNav = () => {
  // 모달 상태 관리
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  // 모달 열기 핸들러
  const [mutualStatus, setMutualStatus] = useState(false); // mutual 상태

  const navigate = useNavigate();
  // const location = useLocation();
  // const { currentUser } = location.state || {}; // 여기서 받아야 함
  const { user: currentUser } = useAuth(); // ✅ 전역 user 가져오기

  console.log("currentUser 상태:", currentUser);

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // ✅ 로딩 상태 추가

  // 페이지네이션 상태
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // 한 페이지당 ?개
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // 현재 페이지에 맞는 데이터 자르기
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  const like = {
    name: "Like💜",
  };

  const activityGiveTake = {
    btn: [
      { label: "보낸 내역", path: "/activityNav" },
      { label: "받은 내역", path: "/ActivityNavReceived" },
    ],
  };

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

  // 채팅시작을 위한 useeffect
  useEffect(() => {
    if (!selectedProfile || !currentUser) return; // currentUser 없으면 실행 안 함
    const checkMutualHeart = async () => {
      try {
        const res = await axios.post("/api/hearts/mutual_check", null, {
          params: {
            fromUser: currentUser.user_id,
            toUser: selectedProfile.userId, //상대방아이디
          },
        });
        setMutualStatus(res.data);
        console.log("mutual 상태:", res.data);
      } catch (err) {
        console.error("mutual 상태 불러오기 실패:", err);
        setMutualStatus(false); // 오류 시 false로 설정
      }
    };
    checkMutualHeart();
  }, [selectedProfile]);

  // // 4. 로딩 중일 때는 로딩 메시지를 반환하여 아무것도 보여주지 않습니다.
  // if (isLoading) {
  //   return <div>활동 내역을 불러오는 중...</div>;
  // }

  // // 5. 로딩이 끝난 후, 데이터가 없다면 빈 화면을 보여줍니다.
  // if (data.length === 0) {
  //   return <div>아직 주고받은 하트가 없어요.</div>;
  // }

  return (
    <Container>
      <Div>
        <Nav>
          <Name>{like.name} - 보낸 내역</Name>
          <Btns>
            {activityGiveTake.btn.map((btn, index) => (
              <Btnb
                key={index}
                onClick={() =>
                  navigate(btn.path, {
                    state: { currentUser },
                  })
                }
              >
                {btn.label}
              </Btnb>
            ))}
          </Btns>
        </Nav>
      </Div>
      {/* 로딩 중일 때 */}
      {isLoading && (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          활동 내역을 불러오는 중...
        </div>
      )}
      {/* 데이터가 없을 때 */}
      {!isLoading && data.length === 0 && (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          누른 내역이 없습니다.
        </div>
      )}
      {/* 데이터 있을 때 */}
      {!isLoading &&
        currentUser &&
        currentData.map((profile, idx) => (
          <Activity
            key={startIndex + idx}
            currentUser={currentUser}
            profile={profile}
            profileUser={profile}
            btn="하트취소"
            activity={`${profile.name}님께 하트를 보냈습니다.`}
            onClick={() => setSelectedProfile(profile)}
            onDelete={(id) =>
              setData((prev) => prev.filter((p) => p.userId !== id))
            }
          />
        ))}
      ;{/* 페이지네이션 */}
      {data.length > 0 && (
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
      )}
      {/* 모달 */}
      {isModalOpen && selectedProfile && (
        <ActivityModal
          name={selectedProfile.name}
          activity={`${selectedProfile.name}님께 하트를 보냈습니다.`}
          btn={selectedProfile.mutualHeart ? "상호 하트💞" : "하트 보내기"}
          profileImage={selectedProfile.photoUrl}
          mutual={mutualStatus}
          currentUser={currentUser}
          targetUser={selectedProfile}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      <BottomNav currentUser={currentUser} />
    </Container>
  );
};

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
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
  /* margin-right: 50px; */
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

export default ActivityNav;
