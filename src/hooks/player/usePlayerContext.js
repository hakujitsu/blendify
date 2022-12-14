import { createContext, useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setDeviceId } from "../../store/slices/webPlayback";
import { useAuthContext } from "../auth/useAuthContext";
import usePlayerState from "./usePlayerState";

export const PlayerContext = createContext(null);

export const usePlayerContextProvider = () => {
  const [spotifyPlayer, setSpotifyPlayer] = useState(null);
  const { accessToken } = useAuthContext();
  const { updatePlayerState } = usePlayerState();
  const dispatch = useDispatch()

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: 'blendify',
        getOAuthToken: cb => { cb(accessToken); },
        volume: 0.5
      });

      setSpotifyPlayer(player);

      player.addListener('ready', ({ device_id }) => {
        dispatch(setDeviceId(device_id))
        console.log('Ready with Device ID', device_id);
      });

      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });

      player.connect();
    };
  }, []);

  useEffect(() => {
    if (spotifyPlayer) {
      spotifyPlayer.removeListener('player_state_changed');
      spotifyPlayer.addListener('player_state_changed', (state => {
        updatePlayerState(state)
      }));
    }
  }, [updatePlayerState])

  return { player: spotifyPlayer }
};

export const usePlayerContext = () => {
  const context = useContext(PlayerContext);
  if (context === null) {
    throw new Error(
      "usePlayerContext should be called in an usePlayerContextProvider"
    );
  }

  return context;
};
