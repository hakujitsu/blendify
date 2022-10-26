import { CircularProgress } from "@mui/material";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const Callback = () => {
  const effectCalled = useRef(false);
  const { userDetails, setUserDetails } = useAuthContext();
  const navigate = useNavigate();

  const authenticate = async (code) => {
    effectCalled.current = true;
    const res = await fetch(`/api/callback/?code=${code}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    const { access_token, refresh_token, display_name, image, uri } = data;
    setUserDetails({
      username: display_name,
      img: image,
      uri: uri,
      accessToken: access_token,
      refreshToken: refresh_token,
    });
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

  return <CircularProgress />;
};

export default Callback;
