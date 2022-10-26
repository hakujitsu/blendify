import getAccessToken from "../../lib/auth/getAccessToken";
import getProfile from "../../lib/auth/getProfile";

export default async function handler(req, res) {
  const code = req.query.code || null;

  const { access_token, refresh_token } = await getAccessToken(code)

  const { display_name, images, uri } = await getProfile(access_token)

  const data = {
    access_token,
    refresh_token,
    display_name,
    image: images[0].url,
    uri,
  }

  return res.status(200).json(data)
}