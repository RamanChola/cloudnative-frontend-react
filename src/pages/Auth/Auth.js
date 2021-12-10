import React, { useState } from "react";

import SignIn from "./components/SignIn";
import SignUp from "./components/Signup";

const Auth = () => {
  const [loginState, setLoginState] = useState(true);
  const handleChange = (newValue) => {
    setLoginState(newValue);
  };
  return loginState ? (
    <SignIn handleChange={handleChange} />
  ) : (
    <SignUp handleChange={handleChange} />
  );
};
export default Auth;

