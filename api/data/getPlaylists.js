import refreshAccessToken from "../../lib/auth/refreshAccessToken";
import getPlaylists from "../../lib/data/getPlaylists";

export default async function handler(req, res) {
  let access_token = req.body.access_token;
  const refresh_token = req.body.refresh_token
  const offset = req.body.offset;

  let response = await getPlaylists(access_token, offset)

  if (response.status === 401) {
    const { new_access_token } = refreshAccessToken(refresh_token)
    access_token = new_access_token
    response = await getPlaylists(access_token, offset)
  }

  if (response.status === 200) {
    const { items, total } = response.data

    return res.status(200).json({
      data: items,
      total,
      access_token: access_token,
    })
  }

  return res.status(400).json({
    error: "could not get playlists"
  })
}
