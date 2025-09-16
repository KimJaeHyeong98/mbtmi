// src/components/PreCardModal.jsx
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { useSignup } from "../SignupProvider";
import logoimage from "../assets/img/mbtmi.jpg";
import axios from "axios";
import { useAuth } from "../main/AuthContext";
import { useNavigate } from "react-router-dom";

const ProfileModal = ({ onClose, profileUser }) => {
  const { formData } = useSignup();
  const navigate = useNavigate();
  const [heartedUsers, setHeartedUsers] = useState(new Set()); // 내가 하트한 유저 저장
  const { user: currentUser } = useAuth(); // ✅ 현재 로그인한 유저

  const mbti = `${formData?.mbti?.EI ?? ""}${formData?.mbti?.SN ?? ""}${
    formData?.mbti?.TF ?? ""
  }${formData?.mbti?.JP ?? ""}`;

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

  const handleHeart = async () => {
    const targetUserId = profileUser?.user_id; // 지금 보고 있는 프로필 유저 id
    if (!targetUserId || !currentUser) {
      alert("유저 정보가 없습니다.");
      return;
    }

    try {
      const res = await axios.post("/api/hearts", {
        fromUser: currentUser.user_id, // 로그인한 유저
        toUser: targetUserId, // 하트 대상 유저
      });

      if (res.data.success) {
        // 성공 → 하트 추가
        setHeartedUsers((prev) => new Set(prev).add(targetUserId));
      } else {
        // 실패 → 하트 취소
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

  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      <Dialog onClick={(e) => e.stopPropagation()}>
        <CloseBtn onClick={onClose} aria-label="close">
          ×
        </CloseBtn>

        <ProfileImage
          src={formData.profile?.preview || logoimage}
          alt="profile"
        />
        <Name>
          {/* {p.name}({formData.age}) / {mbti} */}
        </Name>
        <Region>{formData.location}</Region>

        <PreZone>
          상태메시지{" "}
          {(formData.hobby ?? []).map((h, i) => (
            <Tag key={`h-${i}`}>{h}</Tag>
          ))}
        </PreZone>

        <Buttons>
          {/* 하트 */}
          <Btn
            $active={heartedUsers.has(profileUser?.user_id)}
            onClick={handleHeart}
          >
            {heartedUsers.has(profileUser?.user_id) ? "❤️" : "🤍"}
          </Btn>
        </Buttons>
      </Dialog>
    </Overlay>,
    document.body
  );
};

export default ProfileModal;

// ===== styled =====
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

const PreZone = styled.div`
  /* 카드 안에서 줄바꿈되며 감싸지기 */
  align-self: stretch;
  width: 100%;
  display: flex;
  flex-wrap: wrap; /* ⭐ 줄바꿈 */
  gap: 10px 8px;
  justify-content: center;
  margin-top: 4px;
  font-size: 20px;
  font-weight: bold;
`;

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  background: #fbc2eb;
  color: #333;
  padding: 6px 10px;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
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
