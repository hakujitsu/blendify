import refreshAccessToken from "../../lib/auth/refreshAccessToken";
import getSavedTracks from "../../lib/data/getSavedTracks";

export default async function handler(req, res) {
  let access_token = req.body.access_token;
  const refresh_token = req.body.refresh_token
  const offset = req.body.offset;

  let response = await getSavedTracks(access_token, offset)

  if (response.status === 401) {
    const { new_access_token } = refreshAccessToken(refresh_token)
    access_token = new_access_token
    response = await getSavedTracks(access_token, offset)
  }

  if (response.status === 200) {
    const { items, next, total } = response.data
    const hasMoreSongs = !(next === null);

    return res.status(200).json({
      data: items,
      hasMoreSongs,
      total,
      access_token: access_token,
    })
  }

  return res.status(400).json({
    error: "could not get saved tracks"
  })
}