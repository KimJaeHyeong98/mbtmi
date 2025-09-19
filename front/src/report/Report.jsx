import styled from "styled-components";
import BottomNav from "../globaltool/BottomNav";
import Container from "../globaltool/Container";
import { useState } from "react";

const dummyReports = [
    { id: 1, username: "user01", name: "정현욱", age: 25 },
    { id: 2, username: "user02", name: "박서현", age: 27 },
    { id: 3, username: "user03", name: "최민영", age: 22 },
    { id: 4, username: "user04", name: "최민형", age: 23 },
    { id: 5, username: "user05", name: "최민희", age: 24 },
    { id: 6, username: "user06", name: "최민숙", age: 25 },
    { id: 7, username: "user07", name: "최민주", age: 26 },
    { id: 8, username: "user08", name: "최민정", age: 28 },
];

// 특정 유저 신고 상세 (임시 데이터)
const dummyDetail = {
    reason: "욕설 및 비매너 행동",
    content: "게임 내에서 지속적인 욕설을 사용하여 불쾌감을 주었습니다.",
    reporter: "user09",
};

const Report = () => {
    const [selectedUser, setSelectedUser] = useState(null);

    return (
        <Container>
            <ReportCard>
                <Header>신고 목록</Header>

                {/* 유저 선택 전: 신고된 유저 리스트 */}
                {!selectedUser && (
                    <Table>
                        <thead>
                            <tr>
                                <th>아이디</th>
                                <th>이름</th>
                                <th>신고자</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dummyReports.map((user) => (
                                <tr
                                    key={user.id}
                                    onClick={() => setSelectedUser(user)}>
                                    <td>{user.username}</td>
                                    <td>{user.name}</td>
                                    <td>{dummyDetail.reporter}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                )}

                {/* 유저 선택 후: 신고 상세 페이지 */}
                {selectedUser && (
                    <DetailBox>
                        <h3>📋 {selectedUser.name}님의 신고 내용</h3>
                        <p>
                            <b>신고 사유:</b> {dummyDetail.reason}
                        </p>
                        <p>
                            <b>상세 내용:</b> {dummyDetail.content}
                        </p>
                        <p>
                            <b>신고자:</b> {dummyDetail.reporter}
                        </p>
                        <BtnZone>
                            <SuspensionBtn>7일 정지</SuspensionBtn>
                            <SuspensionBtn>1달 정지</SuspensionBtn>
                            <SuspensionBtn>영구 정지</SuspensionBtn>
                        </BtnZone>
                        <BackButton onClick={() => setSelectedUser(null)}>
                            ← 목록으로
                        </BackButton>
                    </DetailBox>
                )}
                <BottomNav />
            </ReportCard>
        </Container>
    );
};
export default Report;

/* styled-components */

const Header = styled.div`
    width: inherit;
    position: fixed; /* ✅ 스크롤 내려도 고정 */
    text-align: center;
    top: 0;
    font-size: 25px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    z-index: 20; /* ✅ 테이블/내용보다 위로 올라오도록 */
    border-bottom: 1px solid #ddd;
`;

const ReportCard = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 10px;
`;

/* 목록 테이블 */
const Table = styled.table`
    width: 100%;
    border-collapse: collapse;

    th,
    td {
        border: 1px solid #ccc;
        padding: 8px;
        text-align: center;
    }

    tr:hover {
        background-color: #f9f9f9;
        cursor: pointer;
    }
`;

/* 상세보기 */
const DetailBox = styled.div`
    flex: 1;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 12px;
    background: #fafafa;
`;

const BtnZone = styled.div`
    width: inherit;
    display: flex;
    justify-content: space-evenly;
`;

const SuspensionBtn = styled.button`
    margin-top: 20px;
    padding: 8px 12px;
    background: #eee;
    border: none;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
        background: #ddd;
    }
`;

const BackButton = styled.button`
    margin-top: 20px;
    padding: 8px 12px;
    background: #eee;
    border: none;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
        background: #ddd;
    }
`;
