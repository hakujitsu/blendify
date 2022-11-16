import { instance } from "../client"

const LIMIT = 48;

const getPlaylists = async (access_token, offset = 0) => {
  const calculatedOffset = offset * LIMIT
  const response = await instance.get(`/me/playlists?offset=${calculatedOffset}&limit=${LIMIT}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    }
  })

  return response
}

export default getPlaylists;