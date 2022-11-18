import { Box, Stack } from '@mui/material';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuthContext } from '../../hooks/auth/useAuthContext';
import { setDeviceId, setPlayer } from '../../store/slices/webPlayback';
import { MIN_WIDTH } from '../../styles/layout';
import PlaybackDetails from './playbackDetails';
import SongDetails from './songDetails';
import VolumeSlider from './volumeSlider';


const sx = {
  container: {
    height: "100%",
    width: "100vw",
    minWidth: MIN_WIDTH,
    px: 2.5
  }
}

const WebPlayback = () => {
  const { accessToken } = useAuthContext();
  // const [isPaused, setPaused] = useState(false);
  // const [isActive, setActive] = useState(false);
  // const [currentTrack, setTrack] = useState(track);

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

      dispatch(setPlayer(player));

      player.addListener('ready', ({ device_id }) => {
        dispatch(setDeviceId(device_id))
        console.log('Ready with Device ID', device_id);
      });

      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });

      player.addListener('player_state_changed', (state => {
        console.log(state)
        if (!state) {
          return;
        }
      }));

      player.connect();
    };
  }, []);

  

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={0}
      sx={sx.container}
    >
      <SongDetails/>
      <PlaybackDetails/>
      <VolumeSlider/>
    </Stack>
  )

  // return (
  //   <div className="container">
  //     <div className="main-wrapper">
  //       <img src={currentTrack.album.images[0].url}
  //         className="now-playing__cover" alt="" />

  //       <div className="now-playing__side">
  //         <div className="now-playing__name">
  //           {currentTrack.name}</div>

  //         <div className="now-playing__artist">
  //           {currentTrack.artists[0].name}</div>
  //       </div>
  //       <button className="btn-spotify" onClick={() => { player.previousTrack() }} >
  //         &lt;&lt;
  //       </button>

  //       <button className="btn-spotify" onClick={() => { player.togglePlay() }} >
  //         {isPaused ? "PLAY" : "PAUSE"}
  //       </button>

  //       <button className="btn-spotify" onClick={() => { player.nextTrack() }} >
  //         &gt;&gt;
  //       </button>
  //     </div>
  //   </div>
  // );
}

export default WebPlayback;