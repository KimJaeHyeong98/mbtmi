import { useState, useEffect } from "react";
import styled from "styled-components";
import { useSignup } from "../SignupProvider";
import Container from "../globaltool/Container";
import { useAuth } from "../main/AuthContext";
import PreCardModal from "../account/PreCardModal";
import { useLocation } from "react-router-dom";
import axios from "axios";

const ProfilePhoto = () => {
  //사진추가용
  // 📌 프로필 이미지 상태

  const { formData, setFormData } = useSignup();
  const { sendFormData } = useAuth();
  const [profileImage, setProfileImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [openPreview, setOpenPreview] = useState(false);
  const location = useLocation();
  const userId = location.state?.userId;

  

  // 📌 프로필 업로드 함수 추가
  const uploadProfile = async (userId, file) => {
    try {
      const formData = new FormData();
      formData.append("userId", userId); // 유저 ID
      formData.append("profileImage", file); // 업로드 파일

      const res = await axios.post("/api/upload-profile", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      return res.data.photoUrl; // 백엔드에서 저장된 경로 반환
    } catch (error) {
      console.error("프로필 업로드 실패:", error);
      return null;
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      const preview = reader.result;

      // 로컬 state (현재 화면 미리보기용)
      setProfileImage(file);
      setPreviewUrl(preview);

      // 전역 상태 (다음 페이지에서도 사용)
      setFormData((prev) => ({
        ...prev,
        profile: { file, preview },
      }));
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = async () => {
    if (!profileImage) {
      alert("프로필 사진을 선택해주세요!");
      return;
    }

    try {
      // 1️⃣ FormData 생성
      const formDataToSend = new FormData();
      formDataToSend.append("userId", userId); // 회원번호
      formDataToSend.append("profileFile", profileImage); // 업로드 파일

      // 2️⃣ POST 요청
      const res = await axios.post("/api/profilephoto", formDataToSend, {
        withCredentials: true, // 쿠키 포함
        headers: { "Content-Type": "multipart/form-data" },
      });

      // 3️⃣ 성공 여부 확인
      if (res.status === 200) {
        alert("프로필 사진 업로드 완료!");
        // 필요하면 전역 상태 갱신
        // 예: setFormData(prev => ({ ...prev, profileUrl: res.data.photoUrl }));
      } else {
        alert("업로드 실패!");
      }
    } catch (err) {
      console.error("프로필 업로드 에러:", err);
      alert("업로드 중 오류가 발생했습니다.");
    }
  };

  return (
    <Container>
      <Card>
        <SideLeft>
          <div>프로필 사진 업로드</div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ margin: "20px" }}
            />
            {previewUrl && <PreviewImage src={previewUrl} alt="미리보기" />}
          </div>
        </SideLeft>
      </Card>
      <p>회원번호: {userId}</p>
      <Button>
        <ButtonCard onClick={() => setOpenPreview(true)}>
          내 카드 <br /> 미리보기
        </ButtonCard>
        <ButtonEnd onClick={handleSubmit}>작성 완료</ButtonEnd>
      </Button>
      {openPreview && <PreCardModal onClose={() => setOpenPreview(false)} />}
    </Container>
  );
};

//사진 관련
const PreviewImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 8%;
  object-fit: cover;
  border: 2px solid #a6c1ee;
  margin-top: 8px;
`;

const Card = styled.div`
  width: 60%;
  padding: 30px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  background-image: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0.1) 40%,
    transparent 100%
  );
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  color: #fff;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 25px;
`;

const SideLeft = styled.div`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
`;

const Button = styled.div`
  display: flex;
  gap: 20px;
`;

const ButtonCard = styled.div`
  width: 100px;
  height: 30px;
  padding: 12px;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.25),
    -6px -6px 15px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(6px);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: inset 4px 4px 12px rgba(0, 0, 0, 0.3),
      inset -4px -4px 12px rgba(255, 255, 255, 0.15);
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(1px);
  }
`;

const ButtonEnd = styled(ButtonCard)``;

export default ProfilePhoto;
