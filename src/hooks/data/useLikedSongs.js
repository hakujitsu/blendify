import { useState } from "react"
import { useAuthContext } from "../auth/useAuthContext"

const useLikedSongs = () => {
  const [likedSongs, setLikedSongs] = useState([])
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
          offset: offset
        })
      });
      const data = await res.json();
      const updatedSongs = likedSongs.concat(data.data)
      setLikedSongs(updatedSongs)
      setOffset(offset + 1)
    }
  };

  return {likedSongs, getLikedSongs}
}

export default useLikedSongs;