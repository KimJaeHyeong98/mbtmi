import React, { use, useEffect, useState } from "react";
import styled from "styled-components";
import GenderSelect from "./GenderSelect";
import LocalSelect from "./LocalSelect";
import Slider from "rc-slider";
import "rc-slider/assets/index.css"; // ← 이 CSS 꼭 추가해야 보임
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
  height: 550px;
  max-width: 100%;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
`;
const Title = styled.h2`
  margin-top: 25px;
  display: flex;
  margin-bottom: 16px;
  color: #333;
  font-size: 20px;
  justify-content: center;
`;
const Button = styled.button`
  display: block;
  margin-top: 40px;
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
const AgeAndRange = styled.div`
  color: #333;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

const HomeModal = ({ isOpen, onClose, onSelectFilter, initialFilter }) => {
  const [selectedGender, setSelectedGender] = useState("");
  const [ageRange, setAgeRange] = useState([null, null]);
  const [selectedLocal, setSelectedLocal] = useState("");
  (""); // ✅ 지역 상태 추가

  // 모달 열릴 때 부모 필터 기반 초기값 설정
  useEffect(() => {
    if (isOpen && initialFilter) {
      setSelectedGender(initialFilter.gender || "");
      setAgeRange([initialFilter.ageDown ?? null, initialFilter.ageUp ?? null]);
      setSelectedLocal(initialFilter.location || "");
    }
  }, [isOpen, initialFilter]);

  if (!isOpen) return null; // 열리지 않았으면 아무것도 렌더링 안 함

  const handleConfirm = () => {
    onSelectFilter({
      // 부모에게 선택값 전달
      gender: selectedGender,
      ageDown: ageRange[0],
      ageUp: ageRange[1],
      location: selectedLocal,
    });
    onClose(); // 모달 닫기
  };
  const handleCancel = () => {
    onClose();
  };

  const handleResetButton = () => {
    // 초기화 버튼
    setSelectedGender("");
    setAgeRange([null, null]);
    setSelectedLocal(""); // ✅ 지역 초기화
  };
  return (
    <ModalOverlay onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <h2 style={{ color: "black", textAlign: "center", margin: "10px" }}>
          상세검색
        </h2>
        <Title>성별</Title>
        <AgeAndRange>
          {/* 성별 선택 컴포넌트 */}
          <GenderSelect value={selectedGender} onChange={setSelectedGender} />
        </AgeAndRange>
        <Title>지역(택1)</Title>
        {/* 지역 선택 컴포넌트 */}
        <LocalSelect value={selectedLocal} onChange={setSelectedLocal} />
        <Title>나이</Title>
        <AgeAndRange2>
          <StyledSlider
            range
            min={20}
            max={80}
            step={1}
            value={[
              ageRange[0] === null ? 20 : ageRange[0],
              ageRange[1] === null ? 80 : ageRange[1],
            ]}
            allowCross={false}
            onChange={([down, up]) => {
              const newDown = down === 20 ? null : down; // 20이면 제한없음
              // 최대 핸들: 80~20, 80은 제한없음
              const newUp = up === 80 ? null : up;

              setAgeRange([newDown, newUp]);
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 8,
            }}
          >
            <span style={{ marginRight: 60 }}>
              {ageRange[0] === null ? "?살부터" : `${ageRange[0]}세 이상`}
            </span>
            <span style={{ marginLeft: 60 }}>
              {ageRange[1] === null ? "?살까지" : `${ageRange[1]}세 이하`}
            </span>
          </div>
        </AgeAndRange2>
        <ClearButton onClick={handleResetButton}>설정초기화</ClearButton>
        <div style={{ display: "flex", justifyContent: "center", gap: "50px" }}>
          <Button onClick={handleCancel}>취소</Button>
          <Button onClick={handleConfirm}>확인</Button>
        </div>
        {/* <Button onClick={onClose}>닫기</Button> */}
      </ModalBox>
    </ModalOverlay>
  );
};
const StyledSlider = styled(Slider)`
  .rc-slider-rail {
    background-color: #e0e0e0; /* 바탕 색 */
    height: 8px; /* 두께 */
    border-radius: 4px;
  }

  .rc-slider-track {
    background: linear-gradient(90deg, #4a90e2, #357ab8); /* 그라데이션 */
    height: 8px;
    border-radius: 4px;
  }

  .rc-slider-handle {
    width: 24px;
    height: 24px;
    margin-top: -8px; /* track 가운데 정렬 */
    background-color: #ffffff;
    border: 2px solid #4a90e2;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    &:hover {
      border-color: #357ab8;
    }
  }
`;
const AgeAndRange2 = styled.div`
  color: #333;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`;
const ClearButton = styled.button`
  margin: 10px auto 0; // 좌우 auto → 중앙 정렬
  display: block;
  margin-top: 30px;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background-color: #ccc;
  color: white;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #999;
  }
`;

export default HomeModal;
