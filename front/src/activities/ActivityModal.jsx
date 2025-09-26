import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logoimage from "../assets/img/mbtmi.jpg";

const ActivityModal = ({
  name,
  activity,
  profileImage,
  mutual,
  currentUser,
  targetUser,
  onClose,
}) => {
  const navigate = useNavigate();

  const handleCreateChat = async () => {
    if (!mutual) return;

    try {
      const res = await axios.post(
        `/api/new_chat_create?fromUser=${currentUser.user_id}&toUser=${targetUser.userId}`
      );
      const room = {
        roomId: res.data,
        user1_id: currentUser.user_id,
        user2_id: targetUser.userId,
      };
      navigate(`/chat/${room.roomId}`, { state: { room } });
    } catch (err) {
      console.error("채팅방 생성 실패:", err);
    }
  };

  return (
    <Overlay onClick={onClose}>
      <CardWrapper onClick={(e) => e.stopPropagation()}>
        <ProfileImage
          src={
            profileImage === logoimage
              ? logoimage // import된 기본 이미지 그대로 사용
              : profileImage
              ? profileImage.startsWith("http")
                ? profileImage
                : `http://localhost:8080/${profileImage}`
              : logoimage
          }
          alt={`${name} 프로필`}
        />

        <ActivityText>{activity}</ActivityText>
        <ChatButton $isActive={mutual} onClick={handleCreateChat}>
          채팅 시작
        </ChatButton>
      </CardWrapper>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 998;
`;
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 300px;
  height: 400px;
  background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
  padding: 20px;
  border-radius: 12px;
  z-index: 999;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;
const ProfileImage = styled.img`
  width: 85%;
  height: 280px;
  border-radius: 20px;
  object-fit: cover;
`;
const ActivityText = styled.p`
  text-align: center;
  margin-bottom: 20px;
  font-size: 1rem;
`;
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

export default ActivityModal;
