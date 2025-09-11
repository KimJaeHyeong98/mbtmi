import React from "react";
import styled from "styled-components";
import ChattingSend from "./ChattingSend.jsx";

const Chatting = () => {
  return (
      <Container>
        <ChattingSend /> {/* 초기 메시지 없이 바로 소켓 기반 */}
      </Container>
  );
};

/* ===== styled components ===== */
const Container = styled.div`
  min-height: 100dvh;
  width: 100%;
  background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 16px;
  box-sizing: border-box;
  gap: 10px;
`;

export default Chatting;