import { useAuthContext } from "../auth/useAuthContext"
import { useSelector, useDispatch } from 'react-redux'
import { getPlaylists } from "../../store/slices/playlists";
import useAuth from "../auth/useAuth"

const usePlaylists = () => {
  const { accessToken, updateAccessToken } = useAuthContext()
  const { getRefreshToken } = useAuth()
  const dispatch = useDispatch();
  const { playlists, offset, totalNumber, hasMorePlaylists } = useSelector((state) => state.playlists)

  const refreshToken = getRefreshToken();

  const fetchPlaylists = async () => {
    if (!hasMorePlaylists) {
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
      const { data, total, access_token } = await res.json();
      updateAccessToken(access_token)
      const playlistsToAdd = data.map(p => {
        const { id, name, description, images, owner, tracks, uri } = p
        return {
          id,
          title: name,
          description,
          images,
          owner,
          uri,
          totalSongs: tracks.total,
          tracks: [],
          hasMoreSongs: tracks.total > 0,
          offset: 0
        }
      })
      dispatch(getPlaylists({ totalNumber: total, offset: currentOffset, playlistsToAdd }))
    }
  };

  return { totalNumber, hasMorePlaylists, playlists, fetchPlaylists }
}

export default usePlaylists;