import BottomNav from "../globaltool/BottomNav.jsx";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
const socket = io("http://localhost:5900");

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        const handleMessage = (msg) => setMessages((prev) => [...prev, msg]);
        socket.on("message", handleMessage);
        return () => {
            socket.off("message", handleMessage); // 언마운트 시 이벤트 제거
        };
        }, []);

    const sendMessage = () => {
        socket.emit("message", input);
        setInput("");
    };
    return <div>  {messages.map((msg, idx) => <div key={idx}>{msg}</div>)}
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={sendMessage}>전송</button>
        {/* ✅ 하단 네비 */}
        <BottomNav />
    </div>
}
export default Chat;

const NavBtn = styled.button`
  appearance: none;
  border: none;
  background: #ecf0f3;
  font-size: 24px;
  padding: 10px;
  border-radius: 16px;
  cursor: pointer;

  /* 뉴모피즘 버튼 */
  box-shadow: 4px 4px 8px #d1d9e6, -4px -4px 8px #ffffff;
  transition: all 0.2s ease;

  &:active {
    box-shadow: inset 4px 4px 8px #d1d9e6, inset -4px -4px 8px #ffffff; /* 눌림 효과 */
    transform: scale(0.95);
  }
`;


