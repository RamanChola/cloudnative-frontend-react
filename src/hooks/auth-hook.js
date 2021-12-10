import { useState, useCallback, useEffect } from "react";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(false);
  const [userId, setUserId] = useState("");
  const [username, setUsername] = useState("");
  const login = useCallback((userId, username, token) => {
    setIsLoggedIn(true);
    setToken(token);
    setUserId(userId);
    setUsername(username);
    localStorage.setItem(
      "userData",
      JSON.stringify({ userId, username, token })
    );
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId("");
    setToken(null);
    localStorage.removeItem("userData");
  }, []);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData && storedData.token) {
      login(storedData.userId, storedData.token, storedData.username);
    }
  }, [login]);

  return {
    isLoggedIn,
    token,
    login,
    logout,
    userId,
    username,
  };
};
