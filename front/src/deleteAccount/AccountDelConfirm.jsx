import axios from "axios";
import { useState } from "react";
import { Await, useNavigate } from "react-router-dom";
import styled from "styled-components";

const AccountDelConfirm = () => {
  const navigate = useNavigate();

  const [checked, setChecked] = useState(false);
  const handleNext = async () => {
    if (checked) {
      try {
        await axios.delete(`/api/deleteUser`, {
          withCredentials: true,
        });
        navigate("/account01"); // 탈퇴 후 이동할 페이지
        alert("탈퇴가 완료되었습니다.");
      } catch (e) {
        console.error(e.message);
        alert("탈퇴 중 오류 발생");
      }
    }
  };
  return (
    <Container>
      <div>
        <Card>
          <h1>회원탈퇴</h1>
          {/* <p>정말 탈퇴하시겠습니까?</p>
          <p>
            탈퇴 시 모든 정보가 삭제되며
            <br /> 복구할 수 없습니다.
          </p> */}
        </Card>
        <Card>
          <NoticeTitle>탈퇴 시 유의사항</NoticeTitle>
          <NoticeList style={{ textAlign: "left", paddingLeft: "20px" }}>
            <li>탈퇴 후 30일 이내 재가입이 불가합니다.</li>
            <li>탈퇴 시 모든 개인 정보가 삭제됩니다.</li>
            <li>탈퇴 후 동일한 이메일로 재가입이 불가합니다.</li>
            <li>탈퇴 후 작성한 게시물은 삭제되지 않을 수 있습니다.</li>
          </NoticeList>
          <label>
            상기 내용을 확인하였습니다.
            <input
              type="checkbox"
              id="confirmCheck"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
          </label>
        </Card>
      </div>
      <Card>
        <div style={{ marginTop: "5px", marginBottom: "5px" }}>
          <Button onClick={() => navigate("/mypage")}>취소</Button>
          <Button onClick={handleNext} disabled={!checked}>
            탈퇴하기
          </Button>
        </div>
      </Card>
    </Container>
  );
};
const NoticeTitle = styled.h2`
  color: #ff4d4f; /* 경고색 */
  font-weight: bold;
`;

const NoticeList = styled.ul`
  text-align: left;
  padding-left: 20px;
  li {
    margin-bottom: 8px;
    color: #f8f9fa;
  }
  li::before {
    content: "⚠ ";
    color: #ffcc00;
  }
`;

// export default AccountDelConfirm;
// const Button = styled.button`
//   margin-left: 10px;
//   margin-right: 10px;
//   width: 120px;
// `;
// const Card = styled.div`
//   width: 100%;
//   max-width: 350px;
//   padding: 10px;
//   border-radius: 20px;
//   background: rgba(255, 255, 255, 0.15);
//   backdrop-filter: blur(12px);
//   border: 1px solid rgba(255, 255, 255, 0.4);
//   background-image: linear-gradient(
//     120deg,
//     rgba(255, 255, 255, 0.4) 0%,
//     rgba(255, 255, 255, 0.1) 40%,
//     transparent 100%
//   );
//   box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
//   color: #fff;
//   text-align: center;
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-bottom: 20px;
// `;

// const Container = styled.div`
//   min-height: 100dvh;
//   width: 100vw;
//   overflow-x: hidden;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   box-sizing: border-box;
//   flex-direction: column; /* 🔥 하단 네비 배치를 위해 세로 정렬 */
//   background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
//   position: relative; /* 🔥 하단 네비 절대위치 기준 */
// `;

export default AccountDelConfirm;

const Button = styled.button`
  margin-left: 10px;
  margin-right: 10px;
  width: 120px;
`;

const Card = styled.div`
  width: 100%;
  max-width: 350px;
  padding: 10px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  /* 필요하면 다시 주석 해제 가능
  background-image: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0.1) 40%,
    transparent 100%
  );
  */
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  color: #fff;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const Container = styled.div`
  min-height: 100dvh;
  width: 100vw;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  flex-direction: column; /* 🔥 하단 네비 배치를 위해 세로 정렬 */
  background: rgba(255, 255, 255, 0.15);
  position: relative; /* 🔥 하단 네비 절대위치 기준 */
`;
