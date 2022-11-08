import { useState } from "react"
import { useAuthContext } from "../auth/useAuthContext"

const useLikedSongs = () => {
  const [likedSongs, setLikedSongs] = useState(null)
  const [offset, setOffset] = useState(0)
  const {getAccessToken} = useAuthContext()

  const getLikedSongs = async () => {
    const access_token = getAccessToken()

    if (access_token) {
      const res = await fetch(`/api/data/getSavedTracks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_token,
          offset: offset ? offset : 0
        })
      });
      const data = await res.json();
      console.log(data)
    }
  };

  return {likedSongs, getLikedSongs}
}

export default useLikedSongs;