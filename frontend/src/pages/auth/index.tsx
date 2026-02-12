import { useState } from "react";

//components
import LoginPage from "./Login";
import RegisterPage from "./Register";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const togglePage = () => {
    setIsLogin(!isLogin);
  };

  if (isLogin) {
    return <LoginPage togglePage={togglePage} />;
  } else {
    return <RegisterPage togglePage={togglePage} />;
  }
};

export default AuthPage;
