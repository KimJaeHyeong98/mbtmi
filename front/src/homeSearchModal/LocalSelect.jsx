import React from "react";
import styled from "styled-components";

const LocalSelect = ({ value, onChange }) => {
  const metroCities = [
    "서울특별시",
    "부산광역시",
    "대구광역시",
    "인천광역시",
    "대전광역시",
    "광주광역시",
    "울산광역시",
  ];
  const provinces = [
    "경기도",
    "충청북도",
    "충청남도",
    "경상북도",
    "경상남도",
    "전라북도",
    "전라남도",
    "강원도",
  ];
  const islands = ["제주도", "울릉도"];

  const handleChange = (selected) => {
    onChange(selected);
  };

  return (
    <LocalWrapper>
      <StyledSelect
        value={metroCities.includes(value) ? value : ""}
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value="">서울 및 광역시</option>
        {metroCities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </StyledSelect>

      <StyledSelect
        value={provinces.includes(value) ? value : ""}
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value="">도</option>
        {provinces.map((province) => (
          <option key={province} value={province}>
            {province}
          </option>
        ))}
      </StyledSelect>

      <StyledSelect
        value={islands.includes(value) ? value : ""}
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value="">제주 및 기타</option>
        {islands.map((island) => (
          <option key={island} value={island}>
            {island}
          </option>
        ))}
      </StyledSelect>
    </LocalWrapper>
  );
};

// 스타일
const LocalWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const StyledSelect = styled.select`
  padding: 8px;
  border-radius: 8px;
  border: 1px solid ${(props) => (props.value ? "#357ab8" : "#ccc")};
  background-color: ${(props) => (props.value ? "#4a90e2" : "#fff")};
  color: ${(props) => (props.value ? "#fff" : "#333")};
  cursor: pointer;
  font-size: 16px;
  flex: 1;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s,
    box-shadow 0.2s;
  box-shadow: ${(props) =>
    props.value ? "0 0 0 2px rgba(74, 144, 226, 0.4)" : "none"};

  &:focus {
    outline: none;
    border-color: #357ab8;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.4);
  }

  option {
    padding: 5px;
    font-size: 13px;
    color: #333;
  }
`;

export default LocalSelect;
