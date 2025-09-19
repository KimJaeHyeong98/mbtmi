import styled from "styled-components";
import TmiLogo from "../assets/img/tmi.png";

const TopNav = () => {
  return (
    <TopBar>
      <TopBow>
        <Button>오늘의 글</Button>
      </TopBow>
      <hr />
    </TopBar>
  );
};

const TopBar = styled.nav`
  position: sticky; /* 화면 하단 고정 */
  left: 0;
  right: 0;
  top: 0;
  border-top: 1px solid #cfe8ee;
  padding: 10px 12px calc(env(safe-area-inset-bottom, 0) + 10px);
  z-index: 10;
  width: inherit;
`;

const TopBow = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  padding: 0;
  background: none;
  color: #363535;
  font-size: 25px;
  font-weight: bold;
`;

export default TopNav;
