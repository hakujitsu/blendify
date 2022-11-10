import { instance } from "../client"

const LIMIT = 50;

const getSavedTracks = async (access_token, offset = 0) => {
  const response = await instance.get(`/me/tracks?offset=${offset}&limit=${LIMIT}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    }
  })

  const { items, next } = response.data
  const hasMoreSongs = !(next === null);

  return { items, hasMoreSongs }
}

export default getSavedTracks;