import { useDispatch, useSelector } from "react-redux"
import { setCurrentSong, setIsPlaying } from "../store/slices/webPlayback"
import { callGetCurrentTrack, callNextSong, callPauseSong, callPlaySongs, callPlaySpotifyCollection, callPreviousSong, callResumeSong, callSeekPosition, callToggleVolume } from "../util/playback"
import { usePlayerContext } from "./player/usePlayerContext"

export const CONTEXT_TYPE = {
  likedSongs: "LIKED_SONGS",
  spotifyPlaylist: "SPOTIFY_PLAYLIST",
  blendifyPlaylist: "BLENDIFY_PLAYLIST",
  album: "ALBUM",
  song: "SONG"
}

/**
 * Functions to do:
 * 1. Play specific song – DONE
 * 2. Toggle play/pause song – DONE
 * 3. Next Song
 * 4. Previous Song
 * 5. Seeking – DONE
 * 6. Toggle volume – DONE (though debouncing can be improved)
 */

const usePlayback = () => {
  const { player } = usePlayerContext()
  const { deviceId, isShuffle } = useSelector((state) => state.webPlayback)
  const dispatch = useDispatch()

  const playSongs = (song, songs, context) => {
    const spotify_uris = songs.map(s => s.track.uri)
    callPlaySongs({
      device_id: deviceId,
      playerInstance: player,
      spotify_uris,
    });
  }

  const playSpotifyCollection = (song, context_uri, offset, context) => {
    callPlaySpotifyCollection({
      device_id: deviceId,
      playerInstance: player,
      context_uri,
      offset,
    });
  }

  const playSongFromLikedSongs = (likedSongs) => (song, index) => {
    if (isShuffle) {
      playSongs(song, likedSongs, CONTEXT_TYPE.likedSongs)
    } else {
      playSongs(song, likedSongs.slice(index), CONTEXT_TYPE.likedSongs)
    }
  }

  const playSongFromPlaylist = (context_uri) => (song, index) => {
    playSpotifyCollection(song, context_uri, index, CONTEXT_TYPE.spotifyPlaylist)
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

  const previousSong = () => {
    callPreviousSong(
      {
        device_id: deviceId,
        playerInstance: player,
      }
    )
  }

  const nextSong = () => {
    callNextSong(
      {
        device_id: deviceId,
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

  return {
    playSongFromLikedSongs,
    playSongFromPlaylist,
    pauseSong,
    seekPosition,
    resumeSong,
    previousSong,
    nextSong,
    toggleVolume
  }
}

export default usePlayback;