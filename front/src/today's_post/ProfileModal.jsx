import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import logoimage from "../assets/img/mbtmi.jpg";
import axios from "axios";
import { useAuth } from "../main/AuthContext";
import { useNavigate } from "react-router-dom";

const ProfileModal = ({ onClose, profileUser }) => {
  const navigate = useNavigate();
  const { user: currentUser } = useAuth(); // 로그인한 유저
  const [heartedUsers, setHeartedUsers] = useState(new Set()); // 내가 하트한 유저 저장

  // ESC로 닫기 + 바디 스크롤 잠금
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose?.();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  // 모달 열릴 때 이미 하트한 유저 정보 불러오기
  useEffect(() => {
    const fetchHeartedUsers = async () => {
      if (!currentUser) return;
      try {
        const res = await axios.get(`/api/hearts/my/${currentUser.user_id}`);
        // 서버에서 내 하트 리스트 받아와서 Set으로 변환
        setHeartedUsers(new Set(res.data));
      } catch (err) {
        console.error("내 하트 정보 불러오기 실패:", err);
      }
    };
    fetchHeartedUsers();
  }, [currentUser]);

  // 하트 토글
  const handleHeart = async () => {
    if (!currentUser || !profileUser) return;

    try {
      const res = await axios.post(
        `/api/hearts/toggle?fromUser=${currentUser.user_id}&toUser=${profileUser.user_id}`
      );

      if (res.data) {
        // 서버에서 true 반환 → 하트 등록
        setHeartedUsers((prev) => new Set([...prev, profileUser.user_id]));
      } else {
        // false → 하트 취소
        setHeartedUsers((prev) => {
          const updated = new Set([...prev]);
          updated.delete(profileUser.user_id);
          return updated;
        });
      }
    } catch (err) {
      console.error("하트 요청 실패:", err);
    }
  };

  if (!profileUser) return null;

  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      <Dialog onClick={(e) => e.stopPropagation()}>
        <CloseBtn onClick={onClose}>×</CloseBtn>

        {/* 프로필 이미지 */}
        <ProfileImage
          src={
            profileUser.photo_url
              ? `http://localhost:8080/uploads/${profileUser.photo_url}`
              : logoimage
          }
          alt="profile"
        />

        {/* 이름 / MBTI */}
        <Name>
          {profileUser.name} ({profileUser.birth_date ?? "??"}) /{" "}
          {profileUser.mbti ?? "??"}
        </Name>
        <Region>{profileUser.location ?? "지역 정보 없음"}</Region>

        {/* 하트 버튼 */}
        <Buttons>
          <Btn
            $active={heartedUsers.has(profileUser.user_id)}
            onClick={handleHeart}
          >
            {heartedUsers.has(profileUser.user_id) ? "❤️" : "🤍"}
          </Btn>
        </Buttons>
      </Dialog>
    </Overlay>,
    document.body
  );
};

export default ProfileModal;

/* ===== styled ===== */
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const Dialog = styled.div`
  width: 40vh;
  height: 80vh;
  overflow: auto;
  border-radius: 20px;
  background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
  position: relative;
  padding: 18px 16px 16px;
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 20px;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 10px;
  border: 0;
  background: transparent;
  color: #fff;
  font-size: 28px;
  line-height: 1;
  cursor: pointer;
`;

const ProfileImage = styled.img`
  width: 85%;
  border-radius: 20px;
  object-fit: cover;
`;

const Name = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Region = styled.div`
  font-size: 17px;
  font-weight: bold;
`;

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const Btn = styled.button`
  padding: 10px;
  border-radius: 12px;
  font-size: 30px;
  background: transparent;
  cursor: pointer;
  transition: 0.2s;
  color: ${(props) => (props.$active ? "#f23737" : "#555")};
  &:hover {
    transform: scale(1.1);
  }
`;
