import { Routes, Route, Navigate } from "react-router-dom";
import Account01 from "./account01";
import Home from "../main/Home";
import AccountLogin from "./AccountLogin";
import { useAuth } from "../main/AuthContext";
import MyInfo from "../setting/MyInfo";
import { SignupProvider } from "../SignupProvider";

import AccountInfo from "./AccountInfo";
import AccountSelMbti from "./AccountSelMbti";
import AccountMbti from "./AccountMbti";
import AccountwantedIntro from "./AccountWantedIntro";
import AccountWantedHobby from "./AccountWantedHobby";
import IntroduceMySelf from "./IntroduceMySelf";
import AccountIntro from "./AccountIntro";
import AccountHobby from "./AccountHobby";
import EasyMbti1 from "../easyMbtiTest/EasyMbti1";
import { MbtiProvider } from "../easyMbtiTest/MbtiContext";
import EasyMbti2 from "../easyMbtiTest/EasyMbti2";
import EasyMbti3 from "../easyMbtiTest/EasyMbti3";
import EasyMbti4 from "../easyMbtiTest/EasyMbti4";
import EasyMbti5 from "../easyMbtiTest/EasyMbti5";
import EasyMbti6 from "../easyMbtiTest/EasyMbti6";
import EasyMbti7 from "../easyMbtiTest/EasyMbti7";
import EasyMbti8 from "../easyMbtiTest/EasyMbti8";
import EasyMbti9 from "../easyMbtiTest/EasyMbti9";
import EasyMbti10 from "../easyMbtiTest/EasyMbti10";
import EasyMbti11 from "../easyMbtiTest/EasyMbti11";
import EasyMbti12 from "../easyMbtiTest/EasyMbti12";
import ResultMbti from "../easyMbtiTest/ResultMbti";
import Mymbit from "../setting/MyMbit";
import Summary from "./Summary";

import Myprofile from "../setting/Myprofile";
import MyIntro from "../setting/MyIntro";
import Myhobby from "../setting/Myhobby";
import WantedInfor from "../setting/WantedInfor";
import PreCard from "./PreCard";
import AccountDelConfirm from "../deleteAccount/AccountDelConfirm";
import RegionTreeSelect from "./RegionTreeSelect";

import Chatting from "../chatting/Chatting.jsx";
import ChattingNav from "../chatting/ChattingNav.jsx";
import ChattingSend from "../chatting/ChattingSend.jsx";
import ChattingRoomNav from "../chatting/ChattingRoomNav.jsx";
import BottomNav from "../globaltool/BottomNav.jsx";
import styled from "styled-components";

import HomeModal from "../homeSearchModal/HomeModal";
import NothingResultHome from "../main/NothingResultHome";
import GenderSelect from "../homeSearchModal/GenderSelect";
import ProfilePhoto from "./ProfilePhoto";
import TodayPost from "../today's_post/TodayPost";
import ActivityNav from "../activities/ActivityNav.jsx";
import ProfileModal from "../today's_post/ProfileModal.jsx";


const AccountMain = () => {
  const { loggedIn, loading } = useAuth(); // loading 상태 추가

  // ✅ 세션 확인 완료 전에는 아무것도 렌더링하지 않음
  if (loading) {
    return null; // 원하면 로딩 스피너를 넣어도 됩니다
  }

  const PrivateRoute = ({ element }) => {
    const { loggedIn, loading } = useAuth();
    if (loading) return null;
    return loggedIn ? element : <Navigate to="/account01" replace />;
  };

  return (
    <SignupProvider>
      <Routes>
        {/* / 접속 시 로그인 여부에 따라 리다이렉트 */}
        <Route
          path="/"
          element={
            loggedIn ? (
              <Navigate to="/home" replace />
            ) : (
              <Navigate to="/account01" replace />
            )
          }
        />

        <Route path="/account01" element={<Account01 />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<AccountLogin />} />

        {/* My page */}
        <Route path="/mypage" element={<PrivateRoute element={<MyInfo />} />} />
        <Route
          path="/mypage/profile"
          element={<PrivateRoute element={<Myprofile />} />}
        />

        <Route
          path="/mypage/mymbti"
          element={<PrivateRoute element={<Mymbit />} />}
        />

        <Route
          path="/mypage/myintro"
          element={<PrivateRoute element={<MyIntro />} />}
        />
        <Route
          path="/mypage/myhobby"
          element={<PrivateRoute element={<Myhobby />} />}
        />

        <Route
          path="/mypage/wantedinfor"
          element={<PrivateRoute element={<WantedInfor />} />}
        />

        {/* 회원가입 */}

        <Route path="/info" element={<AccountInfo />} />
        <Route path="/region" element={<RegionTreeSelect />} />
        <Route path="/intro" element={<AccountIntro />} />
        <Route path="/hobby" element={<AccountHobby />} />
        <Route path="/selmbti" element={<AccountSelMbti />} />
        <Route path="/wantedmbti" element={<AccountMbti />} />

        <Route path="/wantedintro" element={<AccountwantedIntro />} />
        <Route path="/wantedhobby" element={<AccountWantedHobby />} />
        <Route path="/introduce" element={<IntroduceMySelf />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/precard" element={<PreCard />} />
        <Route path="/region" element={<RegionTreeSelect />} />
        <Route path="/profilephoto" element={<ProfilePhoto />} />
        <Route path="/todaypost" element={<TodayPost />} />

        <Route path="/postprofile" element={<ProfileModal />} />



        {/* 간단한 MBTI */}

        <Route
          path="/easymbti1"
          element={
            <MbtiProvider>
              <EasyMbti1 />
            </MbtiProvider>
          }
        />
        <Route
          path="/easymbti2"
          element={
            <MbtiProvider>
              <EasyMbti2 />
            </MbtiProvider>
          }
        />
        <Route
          path="/easymbti3"
          element={
            <MbtiProvider>
              <EasyMbti3 />
            </MbtiProvider>
          }
        />
        <Route
          path="/easymbti4"
          element={
            <MbtiProvider>
              <EasyMbti4 />
            </MbtiProvider>
          }
        />
        <Route
          path="/easymbti5"
          element={
            <MbtiProvider>
              <EasyMbti5 />
            </MbtiProvider>
          }
        />
        <Route
          path="/easymbti6"
          element={
            <MbtiProvider>
              <EasyMbti6 />
            </MbtiProvider>
          }
        />
        <Route
          path="/easymbti7"
          element={
            <MbtiProvider>
              <EasyMbti7 />
            </MbtiProvider>
          }
        />
        <Route
          path="/easymbti8"
          element={
            <MbtiProvider>
              <EasyMbti8 />
            </MbtiProvider>
          }
        />
        <Route
          path="/easymbti9"
          element={
            <MbtiProvider>
              <EasyMbti9 />
            </MbtiProvider>
          }
        />
        <Route
          path="/easymbti10"
          element={
            <MbtiProvider>
              <EasyMbti10 />
            </MbtiProvider>
          }
        />
        <Route
          path="/easymbti11"
          element={
            <MbtiProvider>
              <EasyMbti11 />
            </MbtiProvider>
          }
        />
        <Route
          path="/easymbti12"
          element={
            <MbtiProvider>
              <EasyMbti12 />
            </MbtiProvider>
          }
        />
        <Route
          path="/resultmbti"
          element={
            <MbtiProvider>
              <ResultMbti />
            </MbtiProvider>
          }
        />
        <Route
          path="/chat"
          element={
            <Container>
              <ChattingRoomNav />
              <BottomNav />
            </Container>
          }
        />
        <Route
          path="/chat/:id"
          element={
            <>
              <ChattingNav />
              <Chatting />
            </>
          }
        />

        {/* 회원탈퇴 */}
        <Route path="/AccountDelConfirm" element={<AccountDelConfirm />} />
        {/* 홈 모달창 */}
        <Route path="HomeModal" element={<HomeModal />} />
        {/* 결과화면 없을때 보여주는 창 */}
        <Route path="/NothingResultHome" element={<NothingResultHome />} />
      </Routes>
    </SignupProvider>
  );
};

export default AccountMain;
const Container = styled.div`
  min-height: 100dvh;
  width: 100vw;
  overflow-x: hidden;
  display: flex;
  box-sizing: border-box;
  flex-direction: column; /* 🔥 하단 네비 배치를 위해 세로 정렬 */

  background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
  position: relative; /* 🔥 하단 네비 절대위치 기준 */
  padding-top: 60px;
`;
