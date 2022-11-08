import { instance } from "../client"

const LIMIT = 50;

const getSavedTracks = async (access_token, offset = 0) => {
  const response = await instance.get(`/me/tracks?offset=${0}&limit=${LIMIT}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    }
  })

  console.log(response.data)

  const { items } = response.data

  return { items }
}

export default getSavedTracks;