import { useAuthContext } from "../auth/useAuthContext"
import { useSelector, useDispatch } from 'react-redux'
import { getSongs } from '../../store/slices/likedSongs'
import useAuth from "../auth/useAuth"

const useLikedSongs = () => {
  const { accessToken, updateAccessToken } = useAuthContext()
  const { getRefreshToken } = useAuth()
  const dispatch = useDispatch();
  const { songs, offset, totalNumber, hasMoreSongs } = useSelector((state) => state.likedSongs)

  const refreshToken = getRefreshToken();

  const getLikedSongs = async () => {
    if (!hasMoreSongs) {
      return
    }
    const currentOffset = offset;

    if (accessToken) {
      const res = await fetch(`/api/data/getSavedTracks`, {
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
      dispatch(getSongs({ totalNumber: total, offset: currentOffset, songsToAdd: data }))
    }
  };

  return { totalNumber, hasMoreSongs, likedSongs: songs, getLikedSongs: getLikedSongs }
}

export default useLikedSongs;