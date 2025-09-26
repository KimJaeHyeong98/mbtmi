import styled from "styled-components";
import profileImg from "../assets/img/kar.jpg";
import { useLocation, useNavigate } from "react-router-dom"; // 상대 프로필 이미지

const ChattingNav = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const room = state?.room;

  // room이 없으면 기본 값 사용
  const opponentName = room?.opponent_name || "이름 없음";
  const opponentPic = room?.opponent_pic
    ? `http://localhost:8080/uploads/${room.opponent_pic}` // 백엔드 서버 URL 기준
    : profileImg; // 기본 이미지

  return (
    <HeaderContainer>
      <LeftSection>
        <BackButton onClick={() => navigate(-1)}>{"<"}</BackButton>
        {/* <Profile src={profileImg} alt="프로필" /> */}

        <Profile src={opponentPic} alt="프로필" />
        <NameSection>
          {/* <Name>유지aa민</Name> */}
          <Name>{opponentName}</Name>
          {/* <Status>최근 활동: 11분 전</Status> */}
          {/* 잠시보류 */}
        </NameSection>
      </LeftSection>
      <RightSection>
        <IconButton>♡</IconButton>
        <IconButton>📞</IconButton>
      </RightSection>
    </HeaderContainer>
  );
};

/* ===== styled components ===== */

const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const BackButton = styled.button`
  font-size: 20px;
  background: none;
  border: none;
  cursor: pointer;
`;

const Profile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const NameSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  font-weight: bold;
  font-size: 14pt;
`;

const Status = styled.span`
  font-size: 10pt;
  color: #555;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const IconButton = styled.button`
  font-size: 18px;
  background: none;
  border: none;
  cursor: pointer;
`;

export default ChattingNav;
