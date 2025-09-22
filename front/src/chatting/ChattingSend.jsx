import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { io } from "socket.io-client";
import profileimage from "../assets/img/kar.jpg";
import { useLocation, useParams } from "react-router-dom";
import { useAuth } from "../main/AuthContext.jsx";

const socket = io("http://localhost:5900", { transports: ["websocket"] });
const ChattingSend = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);
  const param = useParams();
  const { state } = useLocation();
  const room = state?.room;

  const { user } = useAuth();

  // 1️⃣ 기존 메시지 불러오기
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5900/chat/history/${param.id}`
        );
        // 서버에서 {messages: [...]} 형태로 반환한다고 가정
        setMessages(
          res.data.messages.map((msg) => ({
            ...msg,
            // type: msg.sender === room.user1_id ? "sent" : "received",
            type: msg.sender === user.user_id ? "sent" : "received", // ✅ 내 user_id로 비교
            id: msg._id, // MongoDB의 고유 id
          }))
        );
        console.log("불러온 메시지:", res.data);
      } catch (err) {
        console.error("메시지 불러오기 실패:", err);
      }
    };
    fetchMessages();
  }, [param.id, room]);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  useEffect(() => {
    socket.emit("join_room", { roomId: param.id, userId: user.user_id });
  }, [param.id]);

  // 2️⃣ 실시간 수신
  useEffect(() => {
    const handleMessage = (msg) => {
      const messageObj = {
        ...msg,
        id: msg.id || Date.now() + Math.random(),
        type: msg.sender === user.user_id ? "sent" : "received", // 핵심
      };
      // 내가 속한 방의 메시지만 추가
      if (msg.roomId === param.id) {
        setMessages((prev) => [...prev, messageObj]);
      }
    };
    socket.on("message", handleMessage);
    return () => socket.off("message", handleMessage);
  }, [param.id]);

  //   // 3️⃣ 메시지 전송
  //   const sendMessage = () => {
  //     if (!input.trim()) return;
  //     const msgObj = {
  //       roomId: param.id,
  //       sender: room.user1_id,
  //       receiver: room.user2_id,
  //       text: input,
  //       date: new Date().toISOString(),
  //     };
  //     // setMessages(prev => [...prev, {...msgObj, type: "sent", id: Date.now()}]);
  //     socket.emit("message", msgObj);
  //     setInput("");
  //   };

  const sendMessage = () => {
    if (!input.trim()) return;
    const msgObj = {
      roomId: param.id,
      sender: user.user_id, // ✅ 로그인한 유저 ID
      receiver: room.user1_id === user.user_id ? room.user2_id : room.user1_id, // ✅ 상대방
      text: input,
      date: new Date().toISOString(),
    };
    socket.emit("message", msgObj);
    setInput("");
  };
  return (
    <ChatContainer>
      <Messages>
        {messages.map((msg) => (
          <ChatBlock key={msg.id} type={msg.type}>
            {msg.type === "received" && (
              <ProfileImage src={profileimage} alt={msg.name} />
            )}
            <Message type={msg.type}>
              <Text>{msg.text}</Text>
            </Message>
          </ChatBlock>
        ))}
        <div ref={messagesEndRef} />
      </Messages>
      <InputBar>
        <Input
          placeholder="메시지..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <SendButton onClick={sendMessage}>전송</SendButton>
      </InputBar>
    </ChatContainer>
  );
};

/* ===== styled components ===== */
const ChatContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Messages = styled.div`
  max-height: 400px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;

const ChatBlock = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  justify-content: ${(props) =>
    props.type === "sent" ? "flex-end" : "flex-start"};
`;

const ProfileImage = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  object-fit: cover;
`;

const Message = styled.div`
  max-width: 60%;
  background: ${(props) => (props.type === "sent" ? "#a6c1ee" : "#ffffffa6")};
  color: ${(props) => (props.type === "sent" ? "#fff" : "#333")};
  padding: 8px 12px;
  border-radius: 15px;
  border-top-left-radius: ${(props) => (props.type === "sent" ? "15px" : "0")};
  border-top-right-radius: ${(props) => (props.type === "sent" ? "0" : "15px")};
  word-wrap: break-word;
`;

const Text = styled.span`
  font-size: 10pt;
`;

const InputBar = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #ccc;
  background: #fff;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #ccc;
  outline: none;
`;

const SendButton = styled.button`
  margin-left: 10px;
  padding: 10px 15px;
  border-radius: 20px;
  border: none;
  background-color: #4f9cff;
  color: white;
  cursor: pointer;
`;

export default ChattingSend;
