import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ActivityNavReceived = () => {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const like = { name: "Like💜" };

  useEffect(() => {
    // 백엔드 연결 전, 더미 데이터로 화면 확인
    setData(receivedData);
    setIsLoading(false);
  }, []);

  // 더미 데이터: 받은 하트
  const receivedData = [
    {
      name: "유저A",
      photoUrl: "https://via.placeholder.com/50",
      mutualHeart: false,
    },
    {
      name: "유저B",
      photoUrl: "https://via.placeholder.com/50",
      mutualHeart: true,
    },
  ];

  if (isLoading) return <div>받은 하트를 불러오는 중...</div>;
  if (data.length === 0) return <div>아직 받은 하트가 없어요.</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h3>{like.name} - 받은 내역</h3>

      {data.map((profile, idx) => (
        <Activity
          key={idx}
          name={profile.name}
          activity={`${profile.name}님이 나에게 하트를 보냈습니다.`}
          btn={profile.mutualHeart ? "상호 하트💞" : "하트 보내기"}
          profileImage={profile.photoUrl}
          onClick={() => {
            setSelectedProfile(profile);
            setIsModalOpen(true);
          }}
        />
      ))}

      {isModalOpen && selectedProfile && (
        <ActivityModal
          name={selectedProfile.name}
          activity={`${selectedProfile.name}님이 나에게 하트를 보냈습니다.`}
          btn={selectedProfile.mutualHeart ? "상호 하트💞" : "하트 보내기"}
          profileImage={selectedProfile.photoUrl}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};
export default ActivityNavReceived;
