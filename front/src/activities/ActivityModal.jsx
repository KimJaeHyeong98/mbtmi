import styled from "styled-components";

const CardWrapper = styled.div`
  min-width: 300px;
  height: 400px;
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
  padding: 20px;
  border-radius: 12px;
  z-index: 999; // 가장 위에 표시
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;
const ActivityModal = ({
  name,
  activity,
  btn,
  profileImage,
  onClick,
  onClose,
}) => {
  return (
    <CardWrapper>
      <Contents>
        <div className="activity-item" onClick={onClick}>
          <img src={profileImage} alt={`${name} 프로필`} />
          <div>
            <p>{activity}</p>
            <button>{btn}</button>
            <button onClick={onClose}>닫기</button>{" "}
          </div>
        </div>
      </Contents>
    </CardWrapper>
  );
};
const Contents = styled.div`
  .activity-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  
   
`;
export default ActivityModal;
