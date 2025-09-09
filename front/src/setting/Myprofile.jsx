// src/pages/Myprofile.jsx
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useAuth } from "../main/AuthContext";
import profileimage from "../assets/img/kar.jpg";
import RegionTreeSelectMini, { REGION_GROUPS } from "../setting/RegionTreeSelectMini";

const Myprofile = () => {
  const { user, updateUser } = useAuth();
  const [form, setForm] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
    location: "",
    self_intro: "",
  });
  const [showRegionModal, setShowRegionModal] = useState(false);

  useEffect(() => {
    if (user) {
      setForm({
        name: user.name || "",
        username: user.username || "",
        password: user.password || "",
        email: user.email || "",
        location: user.location || "",
        self_intro: user.self_intro || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    const success = await updateUser(form);
    if (success) alert("프로필이 업데이트되었습니다!");
    else alert("업데이트에 실패했습니다.");
  };

  return (
    <Container>
      <Card>
        <ProfileSection>
          <ProfileImage src={profileimage} alt="프로필 이미지" draggable="false" />

          <Label>
            <span>이름:</span>
            <input type="text" name="name" value={form.name} onChange={handleChange} />
          </Label>

          <Label>
            <span>ID:</span>
            <input type="text" name="username" value={form.username} onChange={handleChange} />
          </Label>

          <Label>
            <span>PW:</span>
            <input type="text" name="password" value={form.password} onChange={handleChange} />
          </Label>

          {/* 지역 선택 */}
          <Label>
            <span>지역:</span>
            <input
              type="text"
              name="location"
              value={form.location}
              readOnly
              onClick={() => setShowRegionModal(true)}
              style={{ cursor: "pointer", background: "#f5f5f5" }}
            />
          </Label>

          <Label>
            <span>자기소개:</span>
            <textarea
              name="self_intro"
              value={form.self_intro}
              onChange={handleChange}
            />
          </Label>

          <ButtonGroup>
            <ActionButton onClick={handleUpdate}>수정하기</ActionButton>
          </ButtonGroup>
        </ProfileSection>
      </Card>

      {/* 지역 선택 모달 */}
      {showRegionModal && (
        <ModalOverlay>
          <ModalContent>
            

            <RegionTreeSelectMini
              value={form.location}
              onChange={(loc) => setForm(prev => ({ ...prev, location: loc }))}
            />

            <CloseBtn onClick={() => setShowRegionModal(false)}>확인</CloseBtn>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

/* ===== 스타일 ===== */
const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  width: 100vw;
  background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
`;

const Card = styled.div`
  width: 100%;
  max-width: 300px;
  padding: 24px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const ProfileImage = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
`;

const Label = styled.div`
  display: flex;
  align-items: center;
  font-size: 14pt;
  color: #000;
  font-weight: bold;
  margin-bottom: 10px;
  width: 100%;

  span {
    display: inline-block;
    min-width: 60px;
    text-align: right;
    margin-right: 10px;
  }

  input,
  textarea {
    flex: 1;
    padding: 5px 8px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 12pt;
  }

  textarea {
    height: 120px;
    resize: none;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 15px;
`;

const ActionButton = styled.button`
  padding: 10px 20px;
  border-radius: 12px;
  border: none;
  background: linear-gradient(135deg, #a6c1ee, #fbc2eb);
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    opacity: 0.85;
    transform: scale(1.05);
  }
`;

/* ===== 모달 스타일 ===== */
const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 16px;
  padding: 20px;
  width: 350px;        
  max-width: 90vw;     // 화면 작아질 때 대비
  max-height: 75vh;    // 화면 높이 대비
  overflow-y: auto;    // 내용이 길면 스크롤
  box-shadow: 0 8px 24px rgba(0,0,0,0.25);
`;

const ModalTitle = styled.h3`
  margin-bottom: 15px;
  text-align: center;
`;

const CloseBtn = styled.button`
  margin-top: 12px;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background: #6b90d9;
  color: white;
  cursor: pointer;
  display: block;
  width: 100%;
  font-weight: bold;
`;

export default Myprofile;
