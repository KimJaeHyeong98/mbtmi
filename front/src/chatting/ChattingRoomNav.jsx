import styled from "styled-components";
import { useEffect, useState } from "react";
import ChattingMain from "./ChattingMain.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../main/AuthContext.jsx";

const ChattingRoomNav = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [roomList, setRoomList] = useState([]);
  useEffect(() => {
    const chatList = async () => {
      const res = await axios.get("/api/chat", {
        params: { userId: user.user_id },
      });
      console.log(res.data);
      setRoomList(res.data);
    };
    chatList();
  }, []);

  return (
    <Nav>
      <h2>chatting list</h2>
      <Name>
        {roomList.map((room) => (
          <ChattingMain
            key={room.room_id}
            onClick={() =>
              navigate(`/chat/${room.room_id}`, { state: { room } })
            }
            room={room}
          />
        ))}
      </Name>
    </Nav>
  );
};
const LeaveButton = styled.button`
  padding: 5px 10px;
  border-radius: 8px;
  background-color: #ff6b6b;
  color: white;
  border: none;
  cursor: pointer;
`;
const Nav = styled.div`
  margin: -50px 10px;
  align-items: center;
  gap: 10px; /* 이미지-텍스트-버튼 간 간격 */
`;

const Name = styled.div`
  margin-bottom: 10px;
  font-size: 25pt;
`;

export default ChattingRoomNav;
