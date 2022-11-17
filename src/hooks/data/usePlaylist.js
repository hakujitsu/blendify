import { useDispatch, useSelector } from "react-redux";
import { addPlaylistTracks } from "../../store/slices/playlists";
import useAuth from "../auth/useAuth";
import { useAuthContext } from "../auth/useAuthContext";

const usePlaylist = (id) => {
  const playlist = useSelector((state) => state.playlists.playlists.find(p => p.id === id))
  const { accessToken, updateAccessToken } = useAuthContext()
  const { getRefreshToken } = useAuth()
  const dispatch = useDispatch();

  const refreshToken = getRefreshToken();

  const fetchPlaylistTracks = async () => {
    if (!playlist.hasMoreSongs) {
      return
    }

    const currentOffset = playlist.offset;

    if (accessToken) {
      const res = await fetch(`/api/data/getPlaylistTracks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_token: accessToken,
          refresh_token: refreshToken,
          playlist_id: id,
          offset: currentOffset
        })
      });

      const { data, access_token } = await res.json();
      updateAccessToken(access_token)
      dispatch(addPlaylistTracks({id, tracks: data, offset: currentOffset }))
    }
  }

  return { playlist, fetchPlaylistTracks };
}

export default usePlaylist;