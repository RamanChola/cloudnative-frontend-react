import { useState, useCallback, useEffect } from "react";

export const useAuth = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(false);
  const [userId, setUserId] = useState("");
  const login = useCallback((userId, token) => {
    setIsLoggedIn(true);
    setToken(token);
    setUserId(userId);
    localStorage.setItem("userData", JSON.stringify({ userId, token }));
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
      login(storedData.userId, storedData.token);
    }
  }, [login]);

  return {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    isLoggedIn,
    token,
    login,
    logout,
    userId,
  };
};
