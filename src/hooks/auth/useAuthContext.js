import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(null);

export const useAuthContextProvider = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [accessToken, setAccessToken] = useState(null)

  const isLoggedIn = () => {
    return userDetails !== null;
  };

  const setUserDetailsAndAccessToken = (details, token) => {
    setUserDetails(details)
    setAccessToken(token)
  }

  const logOutCurrentUser = () => {
    setUserDetails(null)
    setAccessToken(null)
  }

  return { accessToken, userDetails, setUserDetailsAndAccessToken, logOutCurrentUser, isLoggedIn };
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error(
      "useAuthContext should be called in an useAuthContextProvider"
    );
  }
  return context;
};
