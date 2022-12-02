import { Button, Link } from "@mui/material";
import { useEffect, useState } from "react";
import useAuth from "../hooks/auth/useAuth";
import LoadingScreen from "./LoadingScreen";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID || "";

const LandingPage = () => {
  const [loading, setLoading] = useState(true)
  const { authenticateWithToken } = useAuth();

  const authenticate = async () => {
    await authenticateWithToken();
    setLoading(false)
  }

  const generateQueryString = () => {
    const redirect_uri = "http://localhost:3000/callback";

    const params = new URLSearchParams({
      response_type: "code",
      client_id: CLIENT_ID,
      scope: "user-read-private user-read-email user-library-read user-read-playback-state playlist-read-private streaming",
      redirect_uri: redirect_uri,
      state: "1234123412341234", // TODO: add some state here
      show_dialog: "true",
    });
    return params;
  };

  useEffect(() => {
    authenticate()
  }, [])

  return (
    <>
      {loading
        ? <LoadingScreen />
        : <Link href={"https://accounts.spotify.com/authorize?" + generateQueryString()} >
          Log into Spotify
        </Link>
      }
    </>
  );
};

export default LandingPage;
