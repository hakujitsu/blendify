import { useDispatch, useSelector } from "react-redux"
import { setCurrentSong, setIsPlaying } from "../store/slices/webPlayback"
import { callPauseSong, callPlaySongs, callResumeSong, callSeekPosition, callToggleVolume } from "../util/playback"
import { usePlayerContext } from "./player/usePlayerContext"

/**
 * Functions to do:
 * 1. Play specific song – DONE
 * 2. Toggle play/pause song – DONE
 * 3. Next Song
 * 4. Previous Song
 * 5. Seeking
 * 6. Toggle volume – DONE (though debouncing can be improved)
 */

const usePlayback = () => {
  const { player } = usePlayerContext()
  const { deviceId } = useSelector((state) => state.webPlayback)
  const dispatch = useDispatch()

  const playSong = (uri, song) => {
    callPlaySongs({
      device_id: deviceId,
      playerInstance: player,
      spotify_uris: [uri],
    });
    console.log(song)
    dispatch(setCurrentSong(song))
  }

  const pauseSong = () => {
    callPauseSong({
      device_id: deviceId,
      playerInstance: player,
    });
    dispatch(setIsPlaying(false))
  }

  const resumeSong = () => {
    callResumeSong({
      device_id: deviceId,
      playerInstance: player,
    });
    dispatch(setIsPlaying(true))
  }

  const seekPosition = (position_ms) => {
    callSeekPosition(
      {
        device_id: deviceId,
        position_ms,
        playerInstance: player,
      }
    )
  }

  const toggleVolume = (volume) => {
    callToggleVolume({
      volume,
      device_id: deviceId,
      playerInstance: player,
    });
  }

  return { playSong, pauseSong, seekPosition, resumeSong, toggleVolume }
}

export default usePlayback;