import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CardWrapper = styled.div`
  min-width: 300px;
  height: 400px;
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
  padding: 20px;
  border-radius: 12px;
  z-index: 999; // 가장 위에 표시
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;
const ActivityModal = ({
  name,
  activity,
  profileImage,
  // isActive = false, // 쌍방 하트 여부
  mutual,
  currentUser,
  targetUser,
  onClose,
}) => {
  const navigate = useNavigate(); // 🔹 여기 추가
  console.log("ActivityModal mutual:", mutual);
  console.log("ActivityModal currentUser:", currentUser);
  console.log("ActivityModal targetUser:", targetUser);
  // 🔹 버튼 클릭 시 채팅방 생성 후 이동
  const handleCreateChat = async () => {
    if (!mutual) return; // 쌍방 하트가 아닐 경우 무시

    try {
      // 1️⃣ 채팅방 생성 또는 기존 채팅방 조회
      const response = await axios.post(
        `/api/new_chat_create?fromUser=${currentUser.user_id}&toUser=${targetUser.userId}`
      );
      // 2️⃣ 프론트에서 room 객체 생성
      const room = {
        roomId: response.data, // 백엔드에서 반환된 roomId
        user1_id: currentUser.user_id,
        user2_id: targetUser.userId,
      };
      // 3️⃣ 채팅방으로 이동
      navigate(`/chat/${room.roomId}`, { state: { room } });
    } catch (error) {
      console.error("채팅방 생성 실패:", error);
    }
  };
  return (
    <Overlay onClick={onClose}>
      <CardWrapper onClick={(e) => e.stopPropagation()}>
        <Contents>
          <div className="activity-item">
            <img src={profileImage} alt={`${name} 프로필`} />
            <div>
              <p>{activity}</p>
              <ChatButton $isActive={mutual} onClick={handleCreateChat}>
                채팅 시작
              </ChatButton>
            </div>
          </div>
        </Contents>
      </CardWrapper>
    </Overlay>
  );
};
const ChatButton = styled.button`
  padding: 10px 20px;
  border-radius: 12px;
  font-size: 1rem;
  cursor: ${({ $isActive }) => ($isActive ? "pointer" : "default")};
  background-color: ${({ $isActive }) => ($isActive ? "#4a90e2" : "#ccc")};
  color: ${({ $isActive }) => ($isActive ? "#fff" : "#666")};
  border: none;
  pointer-events: ${({ $isActive }) => ($isActive ? "auto" : "none")};
  transition: background-color 0.2s, color 0.2s;
`;
const Overlay = styled.div`
  position: fixed;
  inset: 0; /* top, right, bottom, left 전부 0 */
  background: rgba(0, 0, 0, 0.5); /* 반투명 검정 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 998;
`;
const Contents = styled.div`
  .activity-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
export default ActivityModal;
