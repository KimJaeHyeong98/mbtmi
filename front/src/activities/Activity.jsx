import styled from "styled-components";
import logoimage from "../assets/img/mbtmi.jpg";

const Activity = ({ profileUser, activity, onClick }) => {
    return (
        <Container onClick={onClick}>
            <ProfileBlock>
                {/* 프로필 이미지 */}
                <ProfileImage
                    src={
                        profileUser?.photoUrl
                            ? `http://localhost:8080/uploads/${profileUser.photoUrl}`
                            : "/default-profile.png"
                    }
                    alt={`${profileUser?.name} 프로필`}
                    draggable={false}
                />
                {/* 활동 텍스트 */}
                <Give>{activity}</Give>
            </ProfileBlock>
        </Container>
    );
};

export default Activity;

/* ===== styled ===== */
const Container = styled.div`
    margin: 10px 0;
    min-width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ProfileBlock = styled.div`
    display: flex;
    width: 350px;
    align-items: center;
    gap: 10px;
`;

const Give = styled.h2`
    margin-left: 10px;
    font-size: 10pt;
`;

const ProfileImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    object-fit: cover;
`;
