import { dataInstanceUrl } from "../client"

const LIMIT = 50;

const getPlaylists = async (access_token, offset = 0) => {
  const calculatedOffset = offset * LIMIT

  const response = await fetch(dataInstanceUrl + `/me/playlists?offset=${calculatedOffset}&limit=${LIMIT}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${access_token}`,
    }
  });

  if (response.status !== 200) {
    return { status: response.status }
  }

  const data = await response.json()

  return { status: response.status, data }
}

export default getPlaylists;