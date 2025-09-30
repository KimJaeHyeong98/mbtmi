import styled from "styled-components";
import Activity from "./Activity";
import BottomNav from "../globaltool/BottomNav";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ActivityModal from "./ActivityModal";
import { useAuth } from "../main/AuthContext";
import logoimage from "../assets/img/mbtmi.jpg";

const ActivityNav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [mutualStatus, setMutualStatus] = useState(false);

  const navigate = useNavigate();
  const { user: currentUser } = useAuth();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const like = { name: "Like💜" };

  const activityGiveTake = {
    btn: [
      { label: "보낸 내역", path: "/activityNav" },
      { label: "받은 내역", path: "/ActivityNavReceived" },
    ],
  };

  // 보낸 하트 불러오기
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
        console.log(res.data);
        setData(res.data);
      } catch (err) {
        console.error("보낸 하트 불러오기 실패:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchActivities();
  }, [currentUser]);

  // 쌍방 하트 체크
  useEffect(() => {
    if (!selectedProfile) return;

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
  }, [selectedProfile, currentUser]);

  // 페이지네이션 데이터
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

      {/* 로딩 / 데이터 없음 / 데이터 있을 때 */}
      {isLoading && <Message>활동 내역을 불러오는 중...</Message>}
      {!isLoading && data.length === 0 && (
        <Message>누른 내역이 없습니다.</Message>
      )}
      {!isLoading &&
        data.length > 0 &&
        currentData.map((profile, idx) => (
          <Activity
            key={startIndex + idx}
            profile={profile} // 추가
            profileUser={profile}
            currentUser={currentUser} // 이게 빠지면 undefined
            activity={`${profile.name}님께 하트를 보냈습니다.`}
            btn="하트 취소"
            profileImage={
              profile.photoUrl
                ? `http://localhost:8080/uploads/${profile.photoUrl}`
                : logoimage
            }
            onClick={() => {
              setSelectedProfile(profile);
              setIsModalOpen(true);
            }}
            // 여기서 onDelete 전달
            onDelete={(userId) => {
              setData((prev) => prev.filter((item) => item.userId !== userId));
            }}
          />
        ))}

      {/* 페이지네이션 */}
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
              : logoimage
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
const Message = styled.div`
  text-align: center;
  margin-top: 50px;
  font-size: 16px;
`;

const Pagination = styled.div`
  position: fixed;
  bottom: 80px;
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
