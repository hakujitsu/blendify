import { authInstance, CLIENT_ID, CLIENT_SECRET } from "../client";

const CALLBACK_URL = process.env.REACT_APP_CALLBACK_URL || "http://localhost:3000/callback"

const getAccessToken = async (code) => {
  const params = new URLSearchParams({
    grant_type: 'authorization_code',
    code,
    redirect_uri: CALLBACK_URL
  });

  const response = await authInstance.post("/api/token", params.toString(), {
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${new Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
    }
  })

  const { access_token, refresh_token } = response.data;

  return { access_token, refresh_token };
};

export default getAccessToken;