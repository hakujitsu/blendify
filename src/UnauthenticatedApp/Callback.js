import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/auth/useAuth";
import { useAuthContext } from "../hooks/auth/useAuthContext";
import LoadingScreen from "./LoadingScreen";

const Callback = () => {
  const effectCalled = useRef(false);
  const { userDetails } = useAuthContext();
  const { authenticateWithCode } = useAuth();
  const navigate = useNavigate();

  const authenticate = async (code) => {
    effectCalled.current = true;
    await authenticateWithCode(code)
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    const error = searchParams.get("error");
    // TODO: add error handling

    if (!effectCalled.current && code) {
      authenticate(code);
    }
  }, []);

  useEffect(() => {
    if (userDetails) {
      navigate("/");
    }
  }, [userDetails]);

  // TODO: fix display

  return <LoadingScreen />;
};

export default Callback;
