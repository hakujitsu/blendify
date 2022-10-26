import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(null);

export const useAuthContextProvider = () => {
  const [userDetails, setUserDetails] = useState(null);

  const isLoggedIn = () => {
    return userDetails !== null;
  };

  return { userDetails, setUserDetails, isLoggedIn };
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
