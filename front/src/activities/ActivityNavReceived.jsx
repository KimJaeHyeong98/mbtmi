import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ActivityReceived from "./ActivityReceived";
import ActivityModal from "./ActivityModal";
import BottomNav from "../globaltool/BottomNav";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const ActivityNavReceived = () => {
    const [data, setData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProfile, setSelectedProfile] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();
    const location = useLocation();
    const { currentUser } = location.state || {};

    // 페이지네이션 상태
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const like = { name: "Like💜" };

    const activityGiveTake = {
        btn: [
            { label: "보낸 내역", path: "/ActivityNav" },
            { label: "받은 내역", path: "/ActivityNavReceived" },
        ],
    };

    useEffect(() => {
        if (!currentUser?.user_id) {
            console.log("currentUser가 없으므로 데이터 로딩을 건너뜁니다.");
            setIsLoading(false);
            return;
        }

        const receivedActivities = async () => {
            try {
                const res = await axios.get(
                    `/api/hearts/who_hearted_me/${currentUser.user_id}`
                );
                setData(res.data);
            } catch (err) {
                console.error("받은 하트 불러오기 실패:", err);
            } finally {
                setIsLoading(false);
            }
        };

        receivedActivities();
    }, [currentUser]);

    // 상호하트 확인
    useEffect(() => {
        if (!selectedProfile) return;
        const checkMutualHeart = async () => {
            try {
                const res = await axios.post("/api/hearts/mutual_check", null, {
                    params: {
                        fromUser: selectedProfile.userId,
                        toUser: currentUser.user_id,
                    },
                });
                const updatedData = data.map((p) =>
                    p.userId === selectedProfile.userId
                        ? { ...p, mutualHeart: res.data }
                        : p
                );
                setData(updatedData);
            } catch (err) {
                console.error("상호 하트 확인 실패:", err);
            }
        };
        checkMutualHeart();
    }, [selectedProfile]);

    // 현재 페이지 데이터
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = data.slice(startIndex, startIndex + itemsPerPage);

    return (
        <Container>
            <Div>
                <Nav>
                    <Name>{like.name} - 받은 내역</Name>
                    <Btns>
                        {activityGiveTake.btn.map((btn, index) => (
                            <Btnb
                                key={index}
                                onClick={() =>
                                    navigate(btn.path, {
                                        state: { currentUser },
                                    })
                                }>
                                {btn.label}
                            </Btnb>
                        ))}
                    </Btns>
                </Nav>
            </Div>

            {/* 로딩 중 */}
            {isLoading && (
                <div style={{ textAlign: "center", marginTop: "50px" }}>
                    받은 하트를 불러오는 중...
                </div>
            )}

            {/* 데이터 없음 */}
            {!isLoading && data.length === 0 && (
                <div style={{ textAlign: "center", marginTop: "50px" }}>
                    아직 받은 하트가 없어요.
                </div>
            )}

            {/* 데이터 있을 때 */}
            {!isLoading &&
                data.length > 0 &&
                currentData.map((profile, idx) => {
                    return (
                        <ActivityReceived
                            key={idx}
                            profile={profile}
                            currentUser={currentUser}
                            onMutualUpdate={(updatedProfile) =>
                                setData(
                                    data.map((p) =>
                                        p.userId === updatedProfile.userId
                                            ? updatedProfile
                                            : p
                                    )
                                )
                            }
                            onOpenModal={(profile) => {
                                setSelectedProfile(profile);
                                setIsModalOpen(true);
                            }}
                        />
                    );
                })}

            {/* 페이지네이션 */}
            {data.length > 0 && (
                <Pagination>
                    {Array.from({ length: totalPages }, (_, idx) => (
                        <PageButton
                            key={idx}
                            onClick={() => setCurrentPage(idx + 1)}
                            $active={currentPage === idx + 1}>
                            {idx + 1}
                        </PageButton>
                    ))}
                </Pagination>
            )}

            {/* 모달 */}
            {isModalOpen && selectedProfile && (
                <ActivityModal
                    name={selectedProfile.name}
                    activity={`${selectedProfile.name}님이 나에게 하트를 보냈습니다.`}
                    btn={
                        selectedProfile.mutualHeart
                            ? "상호 하트💞"
                            : "하트 보내기"
                    }
                    profileImage={
                        selectedProfile.photoUrl
                            ? `http://localhost:8080/uploads/${selectedProfile.photoUrl}`
                            : "/default-profile.png"
                    }
                    mutual={selectedProfile.mutualHeart}
                    currentUser={currentUser}
                    targetUser={selectedProfile}
                    onClose={() => setIsModalOpen(false)}
                />
            )}

            <BottomNav currentUser={currentUser} />
        </Container>
    );
};

// styled-components
const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    min-height: 100dvh;
    width: 100vw;
    overflow-x: hidden;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
    position: relative;
`;

const Nav = styled.div`
    margin-top: 30px;
`;

const Name = styled.h2`
    margin-bottom: 10px;
    font-size: 25pt;
`;

const Btns = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;

const Btnb = styled.button`
    padding: 6px 12px;
    border-radius: 10px;
    font-size: 10px;
    opacity: 80%;
    cursor: pointer;
`;

const Pagination = styled.div`
    position: fixed;
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    gap: 8px;
    padding: 10px 16px;
    border-radius: 12px;
`;

const PageButton = styled.button`
    padding: 6px 12px;
    border-radius: 8px;
    border: none;
    background-color: ${({ $active }) => ($active ? "#4a90e2" : "#eee")};
    color: ${({ $active }) => ($active ? "#fff" : "#333")};
    cursor: pointer;
    font-size: 14px;
`;

export default ActivityNavReceived;
