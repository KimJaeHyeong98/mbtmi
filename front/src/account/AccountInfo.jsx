import { useState } from "react";
import styled from "styled-components";
import mbtmi from "../assets/img/mbtmi.jpg";
import AccountYear from "./AccountYear";
import { useNavigate } from "react-router-dom";
import { useSignup } from "../SignupProvider";
import axios from "axios";

const AccountInfo = () => {
    const [id, setId] = useState("");
    const [passWord, setPassWord] = useState("");
    const [checkPassWord, setCheckPassWord] = useState("");
    const [name, setName] = useState("");
    const [isIdAvailable, setIsIdAvailable] = useState(false);
    const navigate = useNavigate();
    const { formData, setFormData } = useSignup();

    const currentYear = new Date().getFullYear();
    const maxYear = currentYear - 20; // 20살 이상만 가능
    const minYear = currentYear - 80; // 80년 전까지 허용
    const years = Array.from({ length: maxYear - minYear + 1 }, (_, i) =>
        String(maxYear - i)
    );
    const months = Array.from({ length: 12 }, (_, i) => String(i + 1));
    const days = Array.from({ length: 31 }, (_, i) => String(i + 1));
    const [year, setYear] = useState(String(maxYear));
    const [month, setMonth] = useState("1");
    const [day, setDay] = useState("1");
    const [gender, setGender] = useState("남");

    //날짜 계산
    const calculateAge = (year, month, day) => {
        const today = new Date();
        const birthDate = new Date(year, month - 1, day);
        let age = today.getFullYear() - birthDate.getFullYear();

        const m = today.getMonth() - birthDate.getMonth();
        const d = today.getDate() - birthDate.getDate();

        if (m < 0 || (m === 0 && d < 0)) {
            age--;
        }

        return age;
    };

    //ID중복확인 관련 핸들러 ,  isIdAvailable -> 아이디가 사용가능하지 않으면 다음 페이지 못넘어가게 하는 스테이트
    const IdCheckHandle = async () => {
        if (!id) {
            alert("아이디를 입력해주세요!");
            return;
        }

        try {
            const res = await axios.get(
                "http://localhost:8080/api/users/exists",
                {
                    params: { username: id },
                }
            );

            if (res.data.exists) {
                alert("이미 사용 중인 아이디입니다.");
                setIsIdAvailable(false);
            } else {
                alert("사용 가능한 아이디입니다!");
                setIsIdAvailable(true);
            }
        } catch (err) {
            console.error("중복 체크 오류:", err);
            alert("서버와 통신 중 문제가 발생했습니다.");
        }
    };

    //비번 vs 재입력 비번이 틀렸을때
    const checkPassWordBoth = () => {
        if (passWord !== checkPassWord) {
            alert("비밀번호가 다릅니다.");
            return false;
        }
        return true;
    };

    //빈칸이 있는지 없는지 확인
    const allCheck = () => {
        if (!id || !passWord || !name) {
            alert("빈칸이 있어요!");
            return false;
        }
        return true;
    };

    // 아이디: 영문만 허용 (대/소문자)
    const handleIdChange = (e) => {
        const onlyValid = e.target.value.replace(
            /[^A-Za-z0-9!@#$%^&*()\-_=+\[\]{};:'",.<>/?\\|`~]/g,
            ""
        );
        setId(onlyValid);
    };

    // 비번: 영문만 허용 (대/소문자)
    const handlePwChange = (e) => {
        const onlyValid = e.target.value.replace(
            /[^A-Za-z0-9!@#$%^&*()\-_=+\[\]{};:'",.<>/?\\|`~]/g,
            ""
        );
        setPassWord(onlyValid);
    };

    // 비번 재입력: 한글 차단 — 기존 비번과 동일 규칙
    const handlePwConfirmChange = (e) => {
        const onlyValid = e.target.value.replace(
            /[^A-Za-z0-9!@#$%^&*()\-=+\[\]{};:'",.<>/?\\|`~]/g,
            ""
        );
        setCheckPassWord(onlyValid);
    };

    //전체 로그인 관련 흐름
    const Loging = () => {
        if (!allCheck()) return;
        if (!checkPassWordBoth()) return;

        if (!isIdAvailable) {
            alert("아이디 중복 체크를 먼저 해주세요");
            return;
        }

        navigate("/region");
    };

    return (
        <Container>
            <Card>
                <LogoWrapper>
                    <Mbtmi src={mbtmi} alt="MBTI Logo" />
                </LogoWrapper>

                <TitleWrapper>회원가입</TitleWrapper>
            </Card>
            <Card>
                <SideLeft>
                    <h2>아이디 입력</h2>
                    <Input
                        type="text"
                        value={id}
                        onChange={handleIdChange}
                        placeholder="영문, 특수문자, 숫자만 입력 가능합니다"
                    />
                    <BtnSmall onClick={IdCheckHandle}>중복체크</BtnSmall>
                </SideLeft>
            </Card>
            <Card>
                <SideLeft>
                    <h2>비밀번호 입력</h2>
                    <Input
                        type="text"
                        value={passWord}
                        onChange={handlePwChange}
                        placeholder="영문, 특수문자, 숫자만 입력 가능합니다"
                    />
                </SideLeft>

                <SideLeft>
                    <h2>비밀번호 재입력</h2>
                    <Input
                        type="password"
                        value={checkPassWord}
                        onChange={handlePwConfirmChange}
                        placeholder="비밀번호를 다시한번 입력해주세요"
                    />
                </SideLeft>
            </Card>
            <Card>
                <SideLeft>
                    <h2>이름 입력</h2>
                    <Input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="이름을 입력해주세요"
                    />
                </SideLeft>
            </Card>
            <Card>
                <SideLeft>
                    <h2>생년월일</h2>
                    <Year>
                        <AccountYear
                            options={years}
                            value={year}
                            onChange={setYear}
                        />
                        <AccountYear
                            options={months}
                            value={month}
                            onChange={setMonth}
                        />
                        <AccountYear
                            options={days}
                            value={day}
                            onChange={setDay}
                        />
                    </Year>

                    <div>
                        <h2 style={{ marginTop: "30px" }}>성별</h2>
                        <GenderWrapper>
                            <GenderLabel>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="M"
                                    checked={gender === "M"}
                                    onChange={(e) => setGender(e.target.value)}
                                />
                                <span>남</span>
                            </GenderLabel>

                            <GenderLabel>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="F"
                                    checked={gender === "F"}
                                    onChange={(e) => setGender(e.target.value)}
                                />
                                <span>여</span>
                            </GenderLabel>
                        </GenderWrapper>
                    </div>
                </SideLeft>
            </Card>
            <Card>
                <ButtonWrapper>
                    <BtnLarge
                        onClick={() => {
                            const age = calculateAge(year, month, day); // ✅ 나이 계산

                            setFormData((prev) => ({
                                ...prev,
                                name: name,
                                age: age, // ✅ 나이만 저장
                                gender: gender,
                                year: year,
                                month: month,
                                day: day,
                                id: id,
                                passWord: passWord,
                            }));
                            Loging();
                        }}>
                        다음으로
                    </BtnLarge>
                </ButtonWrapper>
            </Card>
            <ButtonWrapper></ButtonWrapper>
        </Container>
    );
};
/* =================== Styled Components =================== */
const Card = styled.div`
    width: 100%;
    max-width: 350px;
    padding: 10px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.4);
    background-image: linear-gradient(
        120deg,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0.1) 40%,
        transparent 100%
    );
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    color: #fff;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
`;
const Container = styled.div`
    min-height: 100dvh;
    width: 100vw;
    overflow-x: hidden;
    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    font-size: 10pt;
    justify-content: center; /* 세로 중앙 */
    align-items: center; /* 가로 중앙 */
`;

const LogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
`;

const TitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
    font-size: 30px;
    color: #000000;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);
    margin-bottom: 30px;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;

const Mbtmi = styled.img`
    width: 200px;
    height: auto;
`;

const SideLeft = styled.div`
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
`;

const BtnSmall = styled.button`
    margin: 15px auto 20px auto; /* 좌우 margin auto */
    display: block; /* block 요소여야 auto가 적용됨 */
    width: 220px;
    height: 50px; /* 높이 지정해서 버튼 크기 통일 */
    padding: 12px;
    margin-top: 15px;
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

    /* 텍스트 중앙 정렬 */
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        box-shadow: inset 4px 4px 12px rgba(0, 0, 0, 0.3),
            inset -4px -4px 12px rgba(255, 255, 255, 0.15);
        background: rgba(255, 255, 255, 0.15);
        transform: translateY(1px);
    }
`;

const BtnLarge = styled.button`
    width: 220px;
    height: 50px; /* 높이 지정해서 버튼 크기 통일 */
    font-size: 20px;
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

    /* 텍스트 중앙 정렬 */
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        box-shadow: inset 4px 4px 12px rgba(0, 0, 0, 0.3),
            inset -4px -4px 12px rgba(255, 255, 255, 0.15);
        background: rgba(255, 255, 255, 0.15);
        transform: translateY(1px);
    }
`;

const Input = styled.input`
    width: 320px;
    padding: 12px 15px;
    margin: 10px 0;
    border-radius: 10px;
    border: 1px solid #ccc;
    font-size: 16px;
    outline: none;
    transition: 0.3s;

    &:focus {
        border-color: #a6c1ee;
        box-shadow: 0 0 8px rgba(166, 193, 238, 0.5);
    }
`;

const Year = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-top: 20px;
`;

const GenderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 10px;
`;

const GenderLabel = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 40px;
    border-radius: 6px;
    border: 2px solid #a6c1ee;
    cursor: pointer;
    font-weight: bold;
    background-color: #fff;
    color: black;
    transition: all 0.2s;

    input {
        display: none;
    }

    span {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.2s;
    }

    input:checked + span {
        background-color: #a6c1ee;
        color: white;
    }

    &:hover span {
        background-color: #d0b9f5;
    }
`;

export default AccountInfo;
