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

  const updateMyInfo = async (payload) => {
    try {
      // FormData 생성
      const formData = new FormData();
     // formData.append(payload);
      formData.append("name", payload.name);
      formData.append("location", payload.location);
      formData.append("self_intro", payload.self_intro);

      // 파일이 있다면 FormData에 추가
      if (payload.profileFile) {
        formData.append("profileFile", payload.profileFile);
      }

      // ✅ 콘솔로 FormData 값 확인
      for (let pair of formData.entries()) {
        console.log(pair[0], pair[1]);
      }

      // 실제 API 호출
      const res = await axios.post("/api/update/profile", formData, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.status === 200) {
        // 서버 세션 갱신 후, 전역 상태도 갱신
        await checkSession(); // 최신 user 정보 가져오기
        return true;
      }
      return false;
    } catch (err) {
      console.error("updateMyInfo error:", err);
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        user,
        login,
        logout,
        loading,
        setUser,
        updateMymbti,
        updateDesired,
        updateMyInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
