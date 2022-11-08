import { useEffect } from "react";
import useLikedSongs from "../../hooks/data/useLikedSongs";

const LikedSongsPage = () => {
  const {getLikedSongs} = useLikedSongs()

  getLikedSongs()


  return (
    <div>
      liked songs page
    </div>
  )
}

export default LikedSongsPage;