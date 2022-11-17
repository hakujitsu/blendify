import refreshAccessToken from "../../lib/auth/refreshAccessToken";
import getPlaylistTracks from "../../lib/data/getPlaylistTracks";

export default async function handler(req, res) {
  let access_token = req.body.access_token;
  const playlist_id = req.body.playlist_id;
  const refresh_token = req.body.refresh_token
  const offset = req.body.offset;

  let response = await getPlaylistTracks(access_token, playlist_id, offset)

  if (response.status === 401) {
    const { new_access_token } = refreshAccessToken(refresh_token)
    access_token = new_access_token
    response = await getPlaylistTracks(access_token, playlist_id, offset)
  }

  if (response.status === 200) {
    const { items } = response.data

    return res.status(200).json({
      data: items,
      access_token: access_token,
    })
  }

  return res.status(400).json({
    error: "could not get playlists"
  })
}