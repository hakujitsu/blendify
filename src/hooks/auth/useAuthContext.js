import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(null);

export const useAuthContextProvider = () => {
  const [userDetails, setUserDetails] = useState(null);

  const isLoggedIn = () => {
    return userDetails !== null;
  };

  const getAccessToken = () => {
    if (isLoggedIn()) {
      return userDetails.accessToken
    }

    return null
  }

  return { userDetails, setUserDetails, isLoggedIn, getAccessToken };
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
