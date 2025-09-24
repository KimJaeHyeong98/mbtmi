import styled from "styled-components";
import { useState, useEffect } from "react";
import { useAuth } from "../main/AuthContext";
import RegionTreeSelectMini from "../setting/RegionTreeSelectMini";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Myprofile = () => {
    const { user, updateUser, updateMyInfo } = useAuth();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        location: "",
        self_intro: "",
        profileFile: null, // 업로드할 파일
        preview: null, // 미리보기 URL
    });
    const [showRegionModal, setShowRegionModal] = useState(false);

    useEffect(() => {
        if (user) {
            setForm((prev) => ({
                ...prev,
                name: user.name || "",
                location: user.location || "",
                self_intro: user.self_intro || "",
                preview: user.profileUrl || null, // DB에 저장된 이미지 경로가 있다면 사용
            }));
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    // 이미지 업로드 핸들러
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const preview = URL.createObjectURL(file);
            setForm((prev) => ({ ...prev, profileFile: file, preview }));
        }
    };

    const handleUpdate = async () => {
        // payload 생성
        const payload = {
            name: form.name,
            location: form.location,
            self_intro: form.self_intro,
            profileFile: form.profileFile,
        };

        const success = await updateMyInfo(payload);
        if (success) {
            alert("프로필이 업데이트되었습니다!");
            navigate("/mypage");
        } else {
            alert("업데이트에 실패했습니다.");
        }
    };

    return (
        <Container>
            <Card>
                <ProfileSection>
                    {/* 프로필 이미지 & 업로드 */}
                    <ProfileImage
                        src={form.preview || "/default_profile.png"} // 기본 이미지
                        alt="프로필 이미지"
                        draggable="false"
                    />
                    <FileInputLabel>
                        이미지 변경
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                    </FileInputLabel>

                    {/* 이름 */}
                    <Label>
                        <span>이름:</span>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                        />
                    </Label>

                    {/* 지역 선택 */}
                    <Label>
                        <span>지역:</span>
                        <input
                            type="text"
                            name="location"
                            value={form.location}
                            readOnly
                            onClick={() => setShowRegionModal(true)}
                            style={{ cursor: "pointer", background: "#f5f5f5" }}
                        />
                    </Label>

                    {/* 자기소개 */}
                    <Label>
                        <span>자기소개:</span>
                        <textarea
                            name="self_intro"
                            value={form.self_intro}
                            onChange={handleChange}
                        />
                    </Label>

                    {/* 수정 버튼 */}
                    <ButtonGroup>
                        <ActionButton onClick={handleUpdate}>
                            수정하기
                        </ActionButton>
                    </ButtonGroup>
                </ProfileSection>
            </Card>

            {/* 지역 선택 모달 */}
            {showRegionModal && (
                <ModalOverlay>
                    <ModalContent>
                        <RegionTreeSelectMini
                            value={form.location}
                            onChange={(loc) =>
                                setForm((prev) => ({ ...prev, location: loc }))
                            }
                        />
                        <CloseBtn onClick={() => setShowRegionModal(false)}>
                            확인
                        </CloseBtn>
                    </ModalContent>
                </ModalOverlay>
            )}
        </Container>
    );
};

/* ===== 스타일 ===== */
const Container = styled.div`
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: hidden;
    width: 100vw;
    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
`;

const Card = styled.div`
    width: 100%;
    max-width: 300px;
    padding: 24px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.4);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ProfileSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

const ProfileImage = styled.img`
    width: 90px;
    height: 90px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
`;

const FileInputLabel = styled.label`
    font-size: 12px;
    color: #333;
    font-weight: bold;
    background: #fff;
    padding: 6px 10px;
    border-radius: 8px;
    border: 1px solid #ccc;
    cursor: pointer;
    margin-bottom: 10px;

    input {
        display: none;
    }
`;

const Label = styled.div`
    display: flex;
    align-items: center;
    font-size: 14pt;
    color: #000;
    font-weight: bold;
    margin-bottom: 10px;
    width: 100%;

    span {
        display: inline-block;
        min-width: 60px;
        text-align: right;
        margin-right: 10px;
    }

    input,
    textarea {
        flex: 1;
        padding: 5px 8px;
        border-radius: 8px;
        border: 1px solid #ccc;
        font-size: 12pt;
    }

    textarea {
        height: 120px;
        resize: none;
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 15px;
`;

const ActionButton = styled.button`
    padding: 10px 20px;
    border-radius: 12px;
    border: none;
    background: linear-gradient(135deg, #a6c1ee, #fbc2eb);
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
        opacity: 0.85;
        transform: scale(1.05);
    }
`;

const ModalOverlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContent = styled.div`
    background: white;
    border-radius: 16px;
    padding: 20px;
    width: 350px;
    max-width: 90vw;
    max-height: 75vh;
    overflow-y: auto;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
`;

const CloseBtn = styled.button`
    margin-top: 12px;
    padding: 8px 16px;
    border: none;
    border-radius: 8px;
    background: #6b90d9;
    color: white;
    cursor: pointer;
    display: block;
    width: 100%;
    font-weight: bold;
`;

export default Myprofile;
