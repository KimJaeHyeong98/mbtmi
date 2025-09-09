import { createContext, useContext, useState } from "react";

const SignupContext = createContext();
export const useSignup = () => useContext(SignupContext);

export const SignupProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    id: "",
    passWord: "",
    location: "",
    name: "",
    mbti: {
      EI: "",
      SN: "",
      TF: "",
      JP: "",
    },
    birth_date: Date,
    age: "",
    introTags: [],
    hobby: [],
    introduce: "",
    profile: { file: null, preview: "" },
    // 나중에 더 추가 가능

    //내가 원하는 상대 정보
    de_mbti: "",
    de_introTags: [],
    de_hobby: [],
  });

  const [returnToSummary, setReturnToSummary] = useState(false);

  return (
    <SignupContext.Provider
      value={{
        formData,
        setFormData,
        returnToSummary,
        setReturnToSummary,
      }}
    >
      {children}
    </SignupContext.Provider>
  );
};
