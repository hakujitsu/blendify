import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";

const PREFIX = "BLENDIFY/";

const REFRESH_TOKEN = `${PREFIX}REFRESH_TOKEN`;

const useAuth = () => {
  const { logOutCurrentUser, setUserDetailsAndAccessToken } = useAuthContext();
  const navigate = useNavigate()

  const authenticateWithCode = async (code) => {
    const res = await fetch(`/api/auth/callback/?code=${code}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    const { access_token, refresh_token, display_name, image, uri } = data;
    saveRefreshToken(refresh_token)
    setUserDetailsAndAccessToken({
      username: display_name,
      img: image,
      uri: uri,
    }, access_token);
  };

  const authenticateWithToken = async () => {
    const refresh_token = getRefreshToken()

    if (refresh_token) {
      const res = await fetch(`/api/auth/authorize`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          refresh_token
        })
      });
      const data = await res.json();
      const { access_token, display_name, image, uri } = data;
      setUserDetailsAndAccessToken({
        username: display_name,
        img: image,
        uri: uri,
      }, access_token);
    } else {
      return null
    }
  };

  const logOut = () => {
    localStorage.removeItem(REFRESH_TOKEN)
    logOutCurrentUser()
    navigate("/")
  }

  const saveRefreshToken = (token) => {
    localStorage.setItem(REFRESH_TOKEN, token);
  }

  const getRefreshToken = () => {
    return localStorage.getItem(REFRESH_TOKEN);
  }

  return { authenticateWithCode, authenticateWithToken, logOut, getRefreshToken }
}

export default useAuth;