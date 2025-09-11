import styled from "styled-components";
import { useState, useEffect } from "react";
import HomeModal from "../homeSearchModal/HomeModal";
import axios from "axios";

const NothingResultHome = ({ onOpenModal }) => {
  return (
    <div
      style={{
        textAlign: "center",
        marginBottom: "100px",
      }}
    >
      <h2>조건에 맞는 사용자가 없습니다.</h2>

      <p>조건을 변경하거나 나중에 다시 시도해 주세요.</p>

      <SettingButton onClick={onOpenModal}>다시 검색하기</SettingButton>
    </div>
  );
};
const SettingButton = styled.button`
  margin-top: 20px;
  right: 10px;
  appearance: none;
  border: none;
  background: #dc0465ff;
  font-size: 24px; /* 점 크기 조금 키움 */
  padding: 6px 10px;
  border-radius: 16px;
  cursor: pointer;
`;
export default NothingResultHome;
