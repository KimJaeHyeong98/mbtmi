import styled from "styled-components";
import profileimage from "../assets/img/kar.jpg";
import axios from "axios";

const Activity = ({
  currentUser,
  activity,
  btn,
  profile,
  onClick,
  onDelete,
  profileUser,
}) => {
  const delHeartHandler = async (e) => {
    e.stopPropagation();
    if (!currentUser || !currentUser.user_id) {
      console.error("currentUser가 없습니다.");
      return;
    }
    try {
      const res = await axios.post("/api/hearts/toggle", null, {
        params: {
          fromUser: currentUser.user_id,
          toUser: profile.userId,
        },
      });
      console.log("하트 토글 결과(성공):", res.data);
      if (onDelete) onDelete(profile.userId);
    } catch (err) {
      console.error("하트 토글 실패:", err);
    }
  };
  return (
    <Container onClick={onClick}>
      <ProfileBlock>
        {/* 프로필 이미지 */}
        <ProfileImage
          src={
            profileUser?.photoUrl
              ? `http://localhost:8080/uploads/${profileUser.photoUrl}`
              : "/default-profile.png"
          }
          alt={`${profileUser?.name} 프로필`}
          draggable={false}
        />
        {/* 활동 텍스트 */}
        <Give>{activity}</Give>
        {/* 버튼 */}
        <Btn onClick={delHeartHandler}>{btn}</Btn>
        {/* 내가 보낸 페이지에는 없어도 괜찮음 */}
      </ProfileBlock>
    </Container>
  );
};

export default Activity;
const Btn = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 8px;
  background-color: #252424ff;
  color: white;
  cursor: pointer;
`;
/* ===== styled ===== */
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
  gap: 10px;
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
