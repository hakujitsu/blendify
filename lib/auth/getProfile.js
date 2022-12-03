import { dataInstanceUrl } from "../client"

const getProfile = async (access_token) => {
  const response = await fetch(dataInstanceUrl + "/me", {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${access_token}`,
    }
  });
  const data = await response.json()
  const { display_name, images, uri } = data;

  return { display_name, images, uri }
}

export default getProfile;