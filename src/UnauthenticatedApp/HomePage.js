import { Button, Link } from "@mui/material";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID || "";

const HomePage = () => {
  const generateQueryString = () => {
    const redirect_uri = "http://localhost:3000/callback";

    const params = new URLSearchParams({
      response_type: "code",
      client_id: CLIENT_ID,
      scope: "user-read-private user-read-email",
      redirect_uri: redirect_uri,
      state: "1234123412341234", // TODO: add some state here
      show_dialog: "true",
    });
    return params;
  };

  return (
    <Link href={"https://accounts.spotify.com/authorize?" + generateQueryString()} >
      Log into Spotify
    </Link>
  );
};

export default HomePage;
