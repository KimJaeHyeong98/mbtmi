import { createContext, useContext, useEffect, useState, setUser } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080"; // <-- 반드시 localhost로 통일
axios.defaults.withCredentials = true; // 쿠키 자동 포함

const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const checkSession = async () => {
    try {
      const res = await axios.get("/api/check-session"); // 상대 경로 사용
      console.log("checkSession response:", res.data);
      if (res.data?.loggedIn) {
        setLoggedIn(true);
        setUser(res.data.user);
      } else {
        setLoggedIn(false);
        setUser(null);
      }
    } catch (err) {
      console.error("checkSession error:", err);
      setLoggedIn(false);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkSession();
  }, []);

  //회원가입 관련 코드
  const sendFormData = async (formData) => {
    try {
      const birth_date = new Date(
        Number(formData.year),
        Number(formData.month - 1),
        Number(formData.day)
      );
      const payload = {
        username: formData.id, // 회원가입 아이디1
        password: formData.passWord, // 회원가입 비번2
        name: formData.name,
        birth_date: birth_date,
        created_at: new Date(), // 가입 시점
        mbti: `${formData.mbti.EI}${formData.mbti.SN}${formData.mbti.TF}${formData.mbti.JP}`, // 문자열로 변환
        desired_mbti: formData.de_mbti,
        self_intro: formData.introduce,
        photo_url: formData.profile.preview || null,
        email: formData.email,
        location: formData.location,
        gender: formData.gender,
      };

      const stripHash = (s) =>
        typeof s === "string" && s.startsWith("#") ? s.slice(1) : s;

      // ✅ SELF(내 태그)
      const createUserTagsModel = {
        hobby_name: (formData.hobby ?? []).map(stripHash), // ["#헬스", "#농구", ...]
        tag_name: (formData.introTags ?? []).map(stripHash), // ["#외향적인", "#다정한", ...]
        type: "SELF",
      };

      // ✅ DESIRED(원하는 상대 태그)
      const createUserDesiredTagsModel = {
        hobby_name: (formData.de_hobby ?? []).map(stripHash), // ["#캠핑", ...]
        tag_name: (formData.de_introTags ?? []).map(stripHash), // ["#차분한", ...]
        type: "DESIRED",
      };

      // const res = await axios.post(
      //   "/api/signup",
      //   {
      //     createAcModel: payload,
      //     createUserTagsModel,
      //     createUserDesiredTagsModel,
      //   },
      //   { withCredentials: true }
      // );
      // console.log("전송성공", formData);
      // console.log("Signup response:", res.data);
      // if (res.data.success) {
      //   setUser(res.data.user); // 전역 상태 갱신
      //   return true;
      // }
      // return false;
      const res = await axios.post(
        "/api/signup",
        {
          createAcModel: payload,
          createUserTagsModel,
          createUserDesiredTagsModel,
        },
        { withCredentials: true }
      );

      console.log("Signup response:", res.data);

      // success 키 없을 때도 true로 처리
      if (res.data && (res.data.success || res.status === 200)) {
        setUser(res.data.user || res.data);
        return true;
      }
      return false;
    } catch (err) {
      console.error("sendFormData error:", err);
      return false;
    }
  };

  const login = async (id, password) => {
    try {
      const res = await axios.post(
        "/api/login",
        { username: id, password },
        { withCredentials: true }
      );
      console.log("login response:", res);
      if (res.data) {
        setLoggedIn(true);
        setUser(res.data);
        return true;
      } else {
        setLoggedIn(false);
        setUser(null);
        return false;
      }
    } catch (err) {
      console.error("login error:", err);
      setLoggedIn(false);
      setUser(null);
      return false;
    }
  };

  const logout = async () => {
    await axios.get("/api/logout", { withCredentials: true });
    setLoggedIn(false);
    setUser(null);
  };

  const updateMymbti = async (updatedData) => {
    try {
      const res = await axios.put("/api/update-mymbti", updatedData, {
        withCredentials: true,
      });
      if (res.data) {
        setUser(res.data); // 전역 상태 갱신
        return true;
      }
      return false;
    } catch (err) {
      console.error("updateMymbti error:", err);
      return false;
    }
  };

  const updateDesired = async (payload) => {
    try {
      const res = await axios.put("/api/update/desired", payload, {
        withCredentials: true,
      });

      if (res.status === 200) {
        // 서버 세션 갱신 후, 전역 상태도 갱신
        await checkSession(); // 최신 user 정보 가져오기
        return true;
      }
      return false;
    } catch (err) {
      console.error("updateDesired error:", err);
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        user,
        sendFormData,
        login,
        logout,
        loading,
        setUser,
        updateMymbti,
        updateDesired,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
