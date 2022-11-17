import { instance } from "../client"

const LIMIT = 50;

const getPlaylistTracks = async (access_token, playlist_id, offset = 0) => {
  const calculatedOffset = offset * LIMIT
  const response = await instance.get(`/playlists/${playlist_id}/tracks/?offset=${calculatedOffset}&limit=${LIMIT}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    }
  })

  return response
}

export default getPlaylistTracks;