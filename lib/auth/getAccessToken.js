import { authInstance } from "../client";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET
const REDIRECT_URI = "http://localhost:3000/callback" // TODO: use env variable

const getAccessToken = async (code) => {
  const params = new URLSearchParams({
    grant_type: 'authorization_code',
    code,
    redirect_uri: REDIRECT_URI
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