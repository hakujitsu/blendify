import { authInstanceUrl, CLIENT_ID, CLIENT_SECRET } from "../client";

const refreshAccessToken = async (refresh_token) => {
  const params = new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token,
  });

  const response = await fetch(authInstanceUrl + "/api/token?" + params.toString(), {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${new Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
    }
  });

  const data = await response.json()
  const { access_token } = data;

  return { new_access_token: access_token };
};

export default refreshAccessToken;