import { useNavigate } from "react-router-dom";
import styled from "styled-components";

/* ✅ 하단 네비게이션 */
const BottomWrapper = styled.nav`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: #ecf0f3; /* 밝은 회색톤 */
    padding: 12px 0 calc(env(safe-area-inset-bottom, 0) + 12px);
    display: flex;
    justify-content: space-evenly;

    border-radius: 20px 20px 0 0; /* 위쪽만 둥글게 */
    box-shadow: inset 4px 4px 8px #d1d9e6, inset -4px -4px 8px #ffffff; /* 뉴모피즘 음각 효과 */
    z-index: 999;
`;

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

const BottomNav = ({ currentUser }) => {
    const navigate = useNavigate();
    return (
        <BottomWrapper>
            <div>
                <NavBtn onClick={() => navigate("/home")}>🏠</NavBtn>
                <NavBtn onClick={() => navigate("/todaypost")}>🔍</NavBtn>
                <NavBtn
                    onClick={() =>
                        navigate("/activityNav", { state: { currentUser } })
                    }>
                    ❤️
                </NavBtn>
                <NavBtn onClick={() => navigate("/map")}>🗺️</NavBtn>
                <NavBtn onClick={() => navigate("/mypage")}>🔔</NavBtn>
                <NavBtn onClick={() => navigate("/chat")}>💌</NavBtn>
            </div>
        </BottomWrapper>
    );
};
export default BottomNav;
