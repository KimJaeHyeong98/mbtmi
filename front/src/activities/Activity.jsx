import styled from "styled-components";
import profileimage from "../assets/img/kar.jpg";

const Activity = ({ name, activity, btn, profileImage }) => {
  // const profile = {
  //   name: "유지민",
  //   activity: "유지민님께 하트를 보냈습니다.",
  //   btn: "하트 보내기",
  // };

  return (
    <Container>
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
        <Btn>{btn}</Btn>
      </ProfileBlock>
    </Container>
  );
};

const Container = styled.div`
  margin: 10px 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileBlock = styled.div`
  display: flex;
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
