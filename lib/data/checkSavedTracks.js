import { instance } from "../client"


const checkSavedTracks = async (access_token, ids) => {
  const response = await instance.get(`/me/tracks/contains?ids=${ids}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    }
  })

  return response
}

export default checkSavedTracks;