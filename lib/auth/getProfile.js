import { instance } from "../client"

const getProfile = async (access_token) => {
  const response = await instance.get("/me", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    }
  })

  const { display_name, images, uri } = response.data

  return { display_name, images, uri }
}

export default getProfile;