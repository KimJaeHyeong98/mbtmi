import styled from "styled-components";
import profileimage from "../assets/img/kar.jpg";
import axios from "axios";

const ActivityReceived = ({
  profile,
  currentUser,
  onMutualUpdate,
  onOpenModal,
}) => {
  // console.log("받은 profile:", profile);
  // console.log("photoUrl 값:", profile?.photoUrl);
  // 버튼 클릭 시 하트 토글
  const handleSendHeart = async (e) => {
    e.stopPropagation(); // ⚡ 클릭 이벤트 버블링 방지
    try {
      const res = await axios.post("/api/hearts/toggle", null, {
        params: {
          fromUser: currentUser.user_id,
          toUser: profile.userId,
        },
      });

      const updatedProfile = { ...profile, mutualHeart: res.data };
      onMutualUpdate(updatedProfile); // 부모 상태 갱신

      // console.log(res.data ? "하트 등록됨" : "하트 해제됨");
    } catch (err) {
      // console.error("하트 토글 실패:", err);
    }
  };
  return (
    <Container>
      <ProfileBlock>
        <div
          onClick={() => onOpenModal(profile)}
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            flex: 1,
            gap: "10px",
          }}
        >
          <ProfileImage
            src={profile.photoUrl || "/default-profile.png"}
            alt={`${profile.name} 프로필`}
            draggable={false}
          />
          <Give>{`${profile.name}님이 나에게 하트를 보냈습니다.`}</Give>
          <Btn onClick={handleSendHeart}>
            {profile.mutualHeart ? "💞" : "🤍"}
          </Btn>
        </div>
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
  padding: 10px 10px;
  border-radius: 10px;
  font-size: 12px;
  opacity: 80%;
`;

export default ActivityReceived;
