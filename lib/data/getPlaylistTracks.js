import { dataInstanceUrl } from "../client"

const LIMIT = 50;

const getPlaylistTracks = async (access_token, playlist_id, offset = 0) => {
  const calculatedOffset = offset * LIMIT

  const response = await fetch(dataInstanceUrl + `/playlists/${playlist_id}/tracks/?offset=${calculatedOffset}&limit=${LIMIT}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${access_token}`,
    }
  });
  if (response.status !== 200) {
    return {status: response.status}
  }

  const data = await response.json()
  console.log(data)

  return {status: response.status, data}
}

export default getPlaylistTracks;