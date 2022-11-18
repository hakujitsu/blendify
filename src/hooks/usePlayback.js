import { useSelector } from "react-redux"
import { callPauseSong, callPlaySongs, callResumeSong } from "../util/playback"

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
  const { deviceId, player } = useSelector((state) => state.webPlayback)

  // TODO: add spotify uri as argument
  const playSong = () => {
    console.log(player)
    console.log(deviceId)
    callPlaySongs({
      device_id: deviceId,
      playerInstance: player,
      spotify_uris: ["spotify:track:2cy5F36NoF5DihBkx0S3G7"],
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