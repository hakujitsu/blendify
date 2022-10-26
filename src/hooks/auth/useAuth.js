import { useAuthContext } from "./useAuthContext";

const PREFIX = "BLENDIFY/";

const REFRESH_TOKEN = `${PREFIX}REFRESH_TOKEN`;

const useAuth = () => {
  const { setUserDetails } = useAuthContext();

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
    setUserDetails({
      username: display_name,
      img: image,
      uri: uri,
      accessToken: access_token,
      refreshToken: refresh_token,
    });
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
      setUserDetails({
        username: display_name,
        img: image,
        uri: uri,
        accessToken: access_token,
        refreshToken: refresh_token,
      });
    }
  };

  const logOut = () => {
    localStorage.removeItem(REFRESH_TOKEN)
    setUserDetails(null)
  }

  const saveRefreshToken = (token) => {
    localStorage.setItem(REFRESH_TOKEN, token);
  }

  const getRefreshToken = () => {
    return localStorage.getItem(REFRESH_TOKEN);
  }

  return { authenticateWithCode, authenticateWithToken, logOut }
}

export default useAuth;