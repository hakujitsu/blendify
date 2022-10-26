import getProfile from "../../lib/auth/getProfile";
import refreshAccessToken from "../../lib/auth/refreshAccessToken";

export default async function handler(req, res) {
  const refresh_token = req.body.refresh_token || null;

  const { access_token } = await refreshAccessToken(refresh_token)

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