import { dataInstanceUrl } from "../client"


const checkSavedTracks = async (access_token, ids) => {
  const response = await fetch(dataInstanceUrl + `/me/tracks/contains?ids=${ids}`, {
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

export default checkSavedTracks;