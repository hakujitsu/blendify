import { useAuthContext } from "../auth/useAuthContext"
import { useSelector, useDispatch } from 'react-redux'
import { getPlaylists } from "../../store/slices/playlists";
import useAuth from "../auth/useAuth"

const usePlaylists = () => {
  const { accessToken } = useAuthContext()
  const { getRefreshToken } = useAuth()
  const dispatch = useDispatch();
  const { playlists, offset, totalNumber, hasMorePlaylists } = useSelector((state) => state.playlists)

  const refreshToken = getRefreshToken();

  const fetchPlaylists = async () => {
    console.log('hi')
    if (!hasMorePlaylists) {
      console.log('no more')
      return
    }
    const currentOffset = offset;

    if (accessToken) {
      const res = await fetch(`/api/data/getPlaylists`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_token: accessToken,
          refresh_token: refreshToken,
          offset: currentOffset
        })
      });
      const { data, total } = await res.json();
      const playlistsToAdd = data.map(p => {
        const { id, name, description, images, owner, tracks } = p
        return { id, title: name, description, images, owner, totalSongs: tracks.total }
      })
      dispatch(getPlaylists({ totalNumber: total, offset: currentOffset, playlistsToAdd }))
    }
  };

  return { totalNumber, hasMorePlaylists, playlists, fetchPlaylists }
}

export default usePlaylists;