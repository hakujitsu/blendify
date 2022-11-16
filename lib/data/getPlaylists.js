import { instance } from "../client"

const LIMIT = 50;

const getPlaylists = async (access_token, offset = 0) => {
  const calculatedOffset = offset * LIMIT
  const response = await instance.get(`/me/playlists?offset=${calculatedOffset}&limit=${LIMIT}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    }
  })

  const { items, total } = response.data

  return { items, total }
}

export default getPlaylists;