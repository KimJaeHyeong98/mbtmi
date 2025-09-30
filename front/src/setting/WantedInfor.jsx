import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../main/AuthContext";

import axios from "axios";

/* ======================== 공통 스타일 ======================== */

const Container = styled.div`
    min-height: 100dvh;
    width: 100%;
    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 16px;
    box-sizing: border-box;
`;

const Title = styled.h1`
    font-size: 22px;
    margin-bottom: 10px;
    color: #333;
`;

const TagTitle = styled.div`
    font-size: 18px;
    margin: 20px 0 10px;
    font-weight: bold;
    color: #444;
    text-align: center;
`;

const TagsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    max-width: 600px;
    width: 100%;
`;

const TagButton = styled.button`
    padding: 12px;
    border-radius: 16px;
    border: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    background-color: ${(props) => (props.selected ? "#a6c1ee" : "#fff")};
    color: ${(props) => (props.selected ? "#fff" : "#333")};
    box-shadow: ${(props) =>
        props.selected
            ? "inset 3px 3px 6px rgba(0,0,0,0.2)"
            : "2px 2px 8px rgba(0,0,0,0.15)"};
    transition: all 0.2s;
    &:hover {
        background-color: ${(props) =>
            props.selected ? "#8aa9e6" : "#f7f7f7"};
    }
`;

const NextButton = styled.button`
    width: 220px;
    padding: 12px;
    margin-top: 20px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 15px;
    border: none;
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
    box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.25),
        -6px -6px 15px rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(6px);
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        box-shadow: inset 4px 4px 12px rgba(0, 0, 0, 0.3),
            inset -4px -4px 12px rgba(255, 255, 255, 0.15);
        background: rgba(255, 255, 255, 0.15);
        transform: translateY(1px);
    }
`;

const SelectedText = styled.p`
    margin-top: 20px;
    font-size: 14px;
    color: #333;
    text-align: center;
`;

const Mbti = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

// MBTI 버튼 스타일
const MbtiIn = styled.div`
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 20px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    background-color: ${(props) => (props.selected ? "#a6c1ee" : "#f0f0f0")};
    color: ${(props) => (props.selected ? "white" : "black")};

    &:hover {
        background-color: ${(props) =>
            props.selected ? "#a6c1ee" : "#e0e0e0"};
    }
`;

const Input = styled.input`
    text-align: center;
    width: 100px;
    padding: 12px 15px;
    border-radius: 10px;
    border: 1px solid #ccc;
    font-size: 20px;
    margin-right: 10px;
`;

const PersonMBTI = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    input,
    button {
        height: 50px; /* 높이를 동일하게 */
        font-size: 18px; /* 글자 크기 맞춤 */
        border-radius: 10px;
        border: 1px solid #ccc;
        padding: 0 15px; /* 내부 여백 */
        box-sizing: border-box;
    }

    button {
        margin-left: 10px;
        cursor: pointer;
        background-color: #a6c1ee;
        color: white;
        transition: background-color 0.3s;
        &:hover {
            background-color: #6b90d9;
        }
    }
`;
/* ======================== Step 1: 상대 MBTI ======================== */
const StepMbti = ({ onNext, onPrev, selectedMbti, setSelectedMbti }) => {
    const { user } = useAuth();
    const [mbti, setMbti] = useState({
        EI: "",
        SN: "",
        TF: "",
        JP: "",
    });

    // ✅ 기존 선택값 불러오기 (뒤로 갔다가 다시 올 때 유지되도록)
    useEffect(() => {
        // selectedMbti가 있으면 우선 적용

        // selectedMbti 없으면 user.desired_mbti 적용
        user?.desired_mbti;
        const [EI, SN, TF, JP] = user.desired_mbti.split("");
        setMbti({ EI, SN, TF, JP });
        // 상위 state에도 세팅해주고 싶으면
        setSelectedMbti(user.desired_mbti);
    }, [selectedMbti, user]);

    // ✅ 선택 핸들러
    const handleMbtiSelect = (category, value) => {
        setMbti((prev) => ({
            ...prev,
            [category]: prev[category] === value ? "" : value,
        }));
    };

    // ✅ 다음 버튼 클릭 시 상위 state에 저장
    const handleNext = () => {
        const newMbti = `${mbti.EI}${mbti.SN}${mbti.TF}${mbti.JP}`;
        if (newMbti.length !== 4) {
            alert("MBTI 4글자를 모두 선택해주세요!");
            return;
        }
        setSelectedMbti(newMbti);
        onNext();
    };

    return (
        <Container>
            <Title>원하는 상대방의 MBTI</Title>

            {/* E / I */}
            <Mbti>
                <MbtiIn
                    selected={mbti.EI === "E"}
                    onClick={() => handleMbtiSelect("EI", "E")}>
                    E
                </MbtiIn>
                <MbtiIn
                    selected={mbti.EI === "I"}
                    onClick={() => handleMbtiSelect("EI", "I")}>
                    I
                </MbtiIn>
            </Mbti>

            {/* S / N */}
            <Mbti>
                <MbtiIn
                    selected={mbti.SN === "S"}
                    onClick={() => handleMbtiSelect("SN", "S")}>
                    S
                </MbtiIn>
                <MbtiIn
                    selected={mbti.SN === "N"}
                    onClick={() => handleMbtiSelect("SN", "N")}>
                    N
                </MbtiIn>
            </Mbti>

            {/* T / F */}
            <Mbti>
                <MbtiIn
                    selected={mbti.TF === "T"}
                    onClick={() => handleMbtiSelect("TF", "T")}>
                    T
                </MbtiIn>
                <MbtiIn
                    selected={mbti.TF === "F"}
                    onClick={() => handleMbtiSelect("TF", "F")}>
                    F
                </MbtiIn>
            </Mbti>

            {/* J / P */}
            <Mbti>
                <MbtiIn
                    selected={mbti.JP === "J"}
                    onClick={() => handleMbtiSelect("JP", "J")}>
                    J
                </MbtiIn>
                <MbtiIn
                    selected={mbti.JP === "P"}
                    onClick={() => handleMbtiSelect("JP", "P")}>
                    P
                </MbtiIn>
            </Mbti>

            <PersonMBTI>
                <Input
                    type="text"
                    value={`${mbti.EI}${mbti.SN}${mbti.TF}${mbti.JP}`} // 순서대로 합치기
                    readOnly // 사용자가 직접 수정하지 못하도록
                />
                {/* <button onClick={handleNext}>수정하기</button> */}
            </PersonMBTI>

            <NextButton onClick={handleNext}>다음</NextButton>
            <NextButton onClick={onPrev}>이전</NextButton>
        </Container>
    );
};

/* ======================== Step 2: 원하는 성격 ======================== */

const tagsPersonality = [
    "#활발한",
    "#차분한",
    "#진지한",
    "#유머러스한",
    "#논리적인",
    "#즉흥적인",
    "#내향적인",
    "#외향적인",
    "#열정적인",
];
const tagsEmotion = [
    "#감정적인",
    "#솔직한",
    "#애교많은",
    "#쿨한",
    "#신중한",
    "#허세없는",
    "#다정한",
    "#따뜻한",
    "#센스있는",
];
const tagsUnique = [
    "#엉뚱한",
    "#창의적인",
    "#독립적인",
    "#낙천적인",
    "#분석적인",
    "#모험적인",
    "#츤데레",
    "#얀데레",
    "#자유로운",
];

const StepWantedIntro = ({ onNext, onPrev, selectedTags, setSelectedTags }) => {
    useEffect(() => {
        const fetchTags = async () => {
            try {
                const res = await axios.get("/api/wanted/tags?type=DESIRED", {
                    withCredentials: true,
                });

                if (Array.isArray(res.data)) {
                    const tagNames = res.data
                        .map((tag) =>
                            String(tag.tag_name || "").replace(/^#/, "")
                        )
                        .filter(Boolean);

                    setSelectedTags(tagNames); // ✅ 상위 state만 업데이트
                }
            } catch (err) {
                console.error("DESIRED tags 불러오기 실패:", err);
            }
        };
        fetchTags();
    }, [setSelectedTags]);

    // 버튼 클릭 시 토글
    const toggleTag = (tagName) => {
        if (selectedTags.includes(tagName)) {
            setSelectedTags(selectedTags.filter((t) => t !== tagName));
        } else {
            if (selectedTags.length < 6) {
                setSelectedTags([...selectedTags, tagName]);
            } else {
                alert("최대 6개까지만 선택할 수 있어요!");
            }
        }
    };

    const renderTags = (tagArray) =>
        tagArray.map((tag) => {
            const tagNameWithoutHash = tag.replace(/^#/, "");
            return (
                <TagButton
                    key={tag}
                    onClick={() => toggleTag(tagNameWithoutHash)}
                    selected={selectedTags.includes(tagNameWithoutHash)} // ✅ selectedTags 기준
                >
                    {tag}
                </TagButton>
            );
        });

    return (
        <Container>
            <Title>당신이 원하는 상대는?</Title>
            <TagTitle>---------- 성격 · 태도 ----------</TagTitle>
            <TagsWrapper>{renderTags(tagsPersonality)}</TagsWrapper>

            <TagTitle>감정 · 표현</TagTitle>
            <TagsWrapper>{renderTags(tagsEmotion)}</TagsWrapper>

            <TagTitle>독특한 매력</TagTitle>
            <TagsWrapper>{renderTags(tagsUnique)}</TagsWrapper>

            <SelectedText>선택된 태그: {selectedTags.join(", ")}</SelectedText>
            <NextButton onClick={onNext}>다음</NextButton>
            <NextButton onClick={onPrev}>이전</NextButton>
        </Container>
    );
};

/* ======================== Step 3: 원하는 취미 ======================== */
const activeHobbies = [
    "#등산",
    "#여행",
    "#자전거",
    "#러닝",
    "#댄스",
    "#수영",
    "#헬스",
    "#볼링",
    "#스포츠관람",
    "#캠핑",
    "#서핑",
    "#클라이밍",
    "#농구",
    "#축구",
    "#방탈출",
];
const passiveHobbies = [
    "#영화보기",
    "#드라마",
    "#넷플릭스",
    "#유튜브",
    "#독서",
    "#요리하기",
    "#베이킹",
    "#악기연주",
    "#사진찍기",
    "#보드게임",
    "#명상",
    "#그림그리기",
    "#수다",
    "#멍때리기",
    "#산책하기",
];

const StepWantedHobby = ({
    onNext,
    onPrev,
    selectedHobbies,
    setSelectedHobbies,
}) => {
    useEffect(() => {
        const fetchHobbies = async () => {
            try {
                const res = await axios.get("/api/wanted/hobby?type=DESIRED", {
                    withCredentials: true, // 세션 쿠키 포함 (로그인 세션 기반)
                });

                if (Array.isArray(res.data)) {
                    const normalized = res.data
                        .map((item) =>
                            String(item.hobby_name || "").replace(/^#/, "")
                        )
                        .filter(Boolean);

                    // ✅ 화면 눌림 상태를 props로 받은 상위 state에 세팅
                    setSelectedHobbies(normalized);
                }
            } catch (err) {
                console.error("DESIRED hobby 불러오기 실패:", err);
            }
        };

        fetchHobbies();
        // ✅ 의존성: setter는 안정적이므로 포함해도 재렌더 루프 안 생김.
        //   selectedHobbies를 넣으면 '설정 -> 변화 -> 다시 fetch' 루프 위험이 있으니 넣지 않음.
    }, [setSelectedHobbies]);

    const toggleTag = (tagNameNoHash) => {
        // 이미 선택되어 있으면 제거, 아니면 추가 (최대 6개 제한)
        if (selectedHobbies.includes(tagNameNoHash)) {
            setSelectedHobbies(
                selectedHobbies.filter((t) => t !== tagNameNoHash)
            );
        } else if (selectedHobbies.length < 6) {
            setSelectedHobbies([...selectedHobbies, tagNameNoHash]);
        } else {
            alert("최대 6개까지만 선택할 수 있어요!");
        }
    };

    const renderTags = (tagArray) =>
        tagArray.map((tagWithHash) => {
            const noHash = tagWithHash.replace(/^#/, "");
            const isSelected = selectedHobbies.includes(noHash);

            return (
                <TagButton
                    key={tagWithHash}
                    onClick={() => toggleTag(noHash)}
                    selected={isSelected}>
                    {tagWithHash}
                </TagButton>
            );
        });

    return (
        <Container>
            <Title>상대의 이런 취미를 원해요!</Title>

            <TagTitle>밖에서 즐기는</TagTitle>
            <TagsWrapper>{renderTags(activeHobbies)}</TagsWrapper>

            <TagTitle>집에서 즐기는</TagTitle>
            <TagsWrapper>{renderTags(passiveHobbies)}</TagsWrapper>

            {/* ✅ 선택 목록은 보기 좋게 '#' 붙여서 표기 */}
            <SelectedText>
                선택된 취미: {selectedHobbies.map((h) => `#${h}`).join(", ")}
            </SelectedText>

            <NextButton onClick={onNext}>완료</NextButton>
            <NextButton onClick={onPrev}>이전</NextButton>
        </Container>
    );
};

/* ======================== 최상위 Flow ======================== */
const WantedInfor = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const { updateDesired } = useAuth();

    // 최상위 state
    const [wantedMbti, setWantedMbti] = useState(null);
    const [wantedTags, setWantedTags] = useState([]);
    const [wantedHobbies, setWantedHobbies] = useState([]);

    const handleNext = async () => {
        try {
            const payload = {
                wantedMbti,
                wantedTags,
                wantedHobbies,
            };

            const success = await updateDesired(payload); // 서버 업데이트 + 전역 상태 갱신
            if (success) {
                alert("원하는 상대방 정보 업데이트 완료!");
                navigate("/mypage");
            } else {
                alert("업데이트 실패");
            }
        } catch (err) {
            console.error(err);
            alert("업데이트 중 오류가 발생했습니다.");
        }
    };

    const goNext = () => {
        if (step === 3) {
            handleNext();
        } else {
            setStep(step + 1);
        }
    };

    const goPrev = () => {
        if (step === 1) {
            navigate(-1);
        } else {
            setStep(step - 1);
        }
    };

    return (
        <>
            {step === 1 && (
                <StepMbti
                    onNext={goNext}
                    onPrev={goPrev}
                    selectedMbti={wantedMbti} // ✅ 전달
                    setSelectedMbti={setWantedMbti} // ✅ 전달
                />
            )}
            {step === 2 && (
                <StepWantedIntro
                    onNext={goNext}
                    onPrev={goPrev}
                    selectedTags={wantedTags} // ✅ 연결
                    setSelectedTags={setWantedTags} // ✅ 연결
                />
            )}
            {step === 3 && (
                <StepWantedHobby
                    onNext={goNext}
                    onPrev={goPrev}
                    selectedHobbies={wantedHobbies} // ✅ 연결
                    setSelectedHobbies={setWantedHobbies} // ✅ 연결
                />
            )}
        </>
    );
};

export default WantedInfor;
