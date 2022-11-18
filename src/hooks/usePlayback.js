import { useSelector } from "react-redux"
import { callPauseSong, callPlaySongs, callResumeSong } from "../util/playback"
import { usePlayerContext } from "./player/usePlayerContext"

/**
 * Functions to do:
 * 1. Play specific song
 * 2. Toggle play/pause song
 * 3. Next Song
 * 4. Previous Song
 * 5. Seeking
 * 6. Toggle volume
 */

const usePlayback = () => {
  const { player } = usePlayerContext()
  const { deviceId } = useSelector((state) => state.webPlayback)

  const playSong = (uri) => {
    callPlaySongs({
      device_id: deviceId,
      playerInstance: player,
      spotify_uris: [uri],
    });
  }

  const pauseSong = () => {
    callPauseSong({
      device_id: deviceId,
      playerInstance: player,
    });
  }

  const resumeSong = () => {
    callResumeSong({
      device_id: deviceId,
      playerInstance: player,
    });
  }

  return { playSong, pauseSong, resumeSong }
}

export default usePlayback;