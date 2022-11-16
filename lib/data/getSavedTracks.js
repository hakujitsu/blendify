import { instance } from "../client"

const LIMIT = 50;

const getSavedTracks = async (access_token, offset = 0) => {
  const calculatedOffset = offset * LIMIT
  const response = await instance.get(`/me/tracks?offset=${calculatedOffset}&limit=${LIMIT}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    }
  })

  return response
}

export default getSavedTracks;