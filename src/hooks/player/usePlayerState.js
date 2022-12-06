import { useDispatch, useSelector } from "react-redux"
import { updateState } from "../../store/slices/webPlayback"
import { callGetCurrentTrack } from "../../util/playback"
import { useAuthContext } from "../auth/useAuthContext"
import { CONTEXT_TYPE } from "../usePlayback"

const usePlayerState = () => {
  const { accessToken } = useAuthContext();
  const { songs } = useSelector((state) => state.likedSongs)
  const { playlists } = useSelector((state) => state.playlists)
  const { contextType, currentSong } = useSelector((state) => state.webPlayback)
  const dispatch = useDispatch()

  const updatePlayerState = async (playerState) => {
    if (playerState && playerState.track_window && playerState.track_window.current_track) {
      const currentUri = playerState.track_window.current_track.uri
      const progress = playerState.position
      const isPlaying = !playerState.paused
      if (currentSong && currentUri === currentSong.uri) {
        dispatch(updateState({ isPlaying, progress }))
        return
      }
      let updatedSong;
      if (contextType === CONTEXT_TYPE.spotifyPlaylist) {
        const playlistUri = playerState.context.uri
        const playlist = playlists.find(p => p.uri === playlistUri)
        if (playlist && playlist.tracks) {
          updatedSong = playlist.tracks.find(s => s.track.uri === currentUri)
        }
      } else if (contextType === CONTEXT_TYPE.likedSongs) {
        updatedSong = songs.find(s => s.track.uri === currentUri)
      }
      if (!updatedSong) {
        const track = await callGetCurrentTrack(accessToken)
        if (track) {
          updatedSong = { track }
        }
      }
      dispatch(updateState({ currentSong: updatedSong, isPlaying, progress }))
    }
  }
  return { updatePlayerState }
}

export default usePlayerState