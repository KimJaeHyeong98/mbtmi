import styled from "styled-components";
import Activity from "./Activity";
import BottomNav from "../globaltool/BottomNav";
import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import ActivityModal from "./ActivityModal";
import { useAuth } from "../main/AuthContext";

const ActivityNav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [mutualStatus, setMutualStatus] = useState(false); // mutual 상태

  const navigate = useNavigate();
  const { user: currentUser } = useAuth(); // ✅ 전역 user 가져오기

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // ✅ 로딩 상태 추가

  // 페이지네이션 상태
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7; // 한 페이지당 ?개

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
    if (!currentUser?.user_id) {
      setIsLoading(false);
      return;
    }

    const fetchActivities = async () => {
      try {
        const res = await axios.get(
          `/api/hearts/hearted/${currentUser.user_id}`
        );
        setData(res.data);
      } catch (err) {
        console.error("하트 내역 불러오기 실패:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchActivities();
  }, [currentUser]);

  useEffect(() => {
    if (!selectedProfile || !currentUser) return;

    const checkMutualHeart = async () => {
      try {
        const res = await axios.post("/api/hearts/mutual_check", null, {
          params: {
            fromUser: currentUser.user_id,
            toUser: selectedProfile.userId,
          },
        });
        setMutualStatus(res.data);
      } catch (err) {
        setMutualStatus(false);
      }
    };
    checkMutualHeart();
  }, [selectedProfile]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);
  return (
    <Container>
      {/* 상단 네비 */}
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
      <ContainerWrapper>
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
              onClick={() => {
                setSelectedProfile(profile);
                setIsModalOpen(true);
              }}
              onDelete={(id) =>
                setData((prev) => prev.filter((p) => p.userId !== id))
              }
            />
          ))}
      </ContainerWrapper>
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
          profileImage={
            selectedProfile.photoUrl
              ? `http://localhost:8080/uploads/${selectedProfile.photoUrl}`
              : "/default-profile.png"
          }
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
const ContainerWrapper = styled.div`
  margin-top: 30px;
`;
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
