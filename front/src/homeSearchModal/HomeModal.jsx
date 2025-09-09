import React, { useState } from "react";
import styled from "styled-components";
import GenderSelect from "./GenderSelect";
const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalBox = styled.div`
  background: white;
  padding: 20px;
  border-radius: 16px;
  width: 360px;
  height: 500px;
  max-width: 100%;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
`;
const Title = styled.h2`
  margin-bottom: 16px;
  color: #333;
  text-align: center;
  font-size: 20px;
`;
const Button = styled.button`
  margin: 10px auto 0; // 좌우 auto → 중앙 정렬
  display: block;
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background-color: #4a90e2;
  color: white;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #357ab8;
  }
`;
const HomeModal = ({ isOpen, onClose, onSelectGender }) => {
  const [selectedGender, setSelectedGender] = useState("");

  if (!isOpen) return null; // 열리지 않았으면 아무것도 렌더링 안 함

  const handleConfirm = () => {
    onSelectGender(selectedGender); // 부모에게 선택값 전달
    onClose(); // 모달 닫기
  };
  return (
    <ModalOverlay onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <Title>상세 검색</Title>
        <Title>성별</Title>
        {/* 성별 선택 컴포넌트 */}
        <GenderSelect value={selectedGender} onChange={setSelectedGender} />
        <Button onClick={handleConfirm}>확인</Button>
        <Button onClick={onClose}>닫기</Button>
      </ModalBox>
    </ModalOverlay>
  );
};

export default HomeModal;
