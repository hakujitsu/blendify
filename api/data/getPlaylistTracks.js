import refreshAccessToken from "../../lib/auth/refreshAccessToken";
import checkSavedTracks from "../../lib/data/checkSavedTracks";
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

  if (response.status !== 200) {
    return res.status(400).json({
      error: "could not get playlist tracks"
    })
  }

  const { items } = response.data
  const ids = items.map(i => i.track.id).join(",")
  const booleanResponse = await checkSavedTracks(access_token, ids)

  for (let i = 0; i < items.length; i++) {
    items[i].track.liked = booleanResponse.data[i]
  }

  return res.status(200).json({
    data: items,
    access_token: access_token,
  })
}