import { useAuthContext } from "../auth/useAuthContext"
import { useSelector, useDispatch } from 'react-redux'
import { getPlaylists } from "../../store/slices/playlists";

const useLikedSongs = () => {
  const { getAccessToken } = useAuthContext()
  const dispatch = useDispatch();
  const { playlists, offset, totalNumber, hasMorePlaylists } = useSelector((state) => state.playlists)

  const fetchPlaylists = async () => {
    if (!hasMorePlaylists) {
      return
    }
    const access_token = getAccessToken()
    const currentOffset = offset;

    if (access_token) {
      const res = await fetch(`/api/data/getPlaylists`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_token,
          offset: currentOffset
        })
      });
      const { data, total } = await res.json();
      const playlistsToAdd = data.map(p => {
        const { id, name, description, images, owner, tracks } = p
        return { id, title: name, description, images, owner, totalSongs: tracks.total }
      })
      dispatch(getPlaylists({ totalNumber: total, playlistsToAdd }))
    }
  };

  return { totalNumber, hasMorePlaylists, playlists, fetchPlaylists }
}

export default useLikedSongs;