import { dataInstanceUrl } from "../client"

const LIMIT = 50;

const callGetSavedTracksApi = async (access_token, calculatedOffset) => {
  return await fetch(dataInstanceUrl + `/me/tracks?offset=${calculatedOffset}&limit=${LIMIT}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${access_token}`,
    }
  });
}

const getSavedTracks = async (access_token, offset = 0) => {
  const intialOffset = offset;
  let calculatedOffset = offset * LIMIT

  const response = await callGetSavedTracksApi(access_token, calculatedOffset)
  if (response.status !== 200) {
    return { status: response.status }
  }

  const data = await response.json()
  let tracks = data.items;
  calculatedOffset += LIMIT

  while (calculatedOffset < data.total && calculatedOffset - intialOffset < 500) {
    const tracksToAdd = await Promise.all([
      callGetSavedTracksApi(access_token, calculatedOffset),
      callGetSavedTracksApi(access_token, calculatedOffset + 50),
      callGetSavedTracksApi(access_token, calculatedOffset + 100),
    ]).then((values) => {
      return Promise.all(values.map(v => v.json()))
    }
    ).then((values) => {
      return values.flatMap((data) => data.items)
    })
    tracks = tracks.concat(tracksToAdd)
    calculatedOffset += 150;
  }

  data.items = tracks

  return { status: response.status, data }
}

export default getSavedTracks;