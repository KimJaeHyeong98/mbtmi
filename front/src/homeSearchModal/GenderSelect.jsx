import styled from "styled-components";
const GenderButton = styled.button`
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "#4a90e2" : "#ccc")};
  color: white;
  font-size: 16px;
`;
const GenderWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
const GenderSelect = ({ value, onChange }) => {
  return (
    <div>
      <GenderWrapper>
        <GenderButton
          $active={value === "male"}
          onClick={() => onChange("male")}
        >
          남자
        </GenderButton>
        <GenderButton
          $active={value === "female"}
          onClick={() => onChange("female")}
        >
          여자
        </GenderButton>
      </GenderWrapper>
    </div>
  );
};
export default GenderSelect;
