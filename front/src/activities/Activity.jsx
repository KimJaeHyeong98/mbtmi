import styled from "styled-components";
import profileimage from "../assets/img/kar.jpg";

const Activity = ({ name, activity, btn, profileImage, onClick }) => {
  return (
    <Container onClick={onClick}>
      <ProfileBlock>
        {/* 프로필 이미지 */}
        <ProfileImage
          src={profileImage} // ✅ props로 받은 이미지
          alt={`${name} 프로필`}
          style={{ userSelect: "none", WebkitUserDrag: "none" }}
        />
        {/* 활동 텍스트 */}
        <Give>{activity}</Give>
        {/* 버튼 */}
        {/* <Btn>{btn}</Btn> */}
        {/* 내가 보낸 페이지에는 없어도 괜찮음 */}
      </ProfileBlock>
    </Container>
  );
};

const Container = styled.div`
  margin: 10px 0;
  min-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileBlock = styled.div`
  display: flex;
  width: 350px;
  align-items: center;
  gap: 10px; /* 이미지-텍스트-버튼 간 간격 */
`;

const Give = styled.h2`
  margin-left: 10px;
  font-size: 10pt;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  object-fit: cover;
`;

const Btn = styled.button`
  margin-left: 10px;
  padding: 6px 12px;
  border-radius: 10px;
  font-size: 10px;
  opacity: 80%;
`;

export default Activity;
