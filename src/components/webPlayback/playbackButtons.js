import { Box, Fab, IconButton, Stack } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import usePlayback from "../../hooks/usePlayback";
import { useState } from "react";

const sx = {
  playPauseButton: {
    transform: 'scale(0.9)',
    boxShadow: 0,
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 0,
    },
  }
}

const PlaybackButtons = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const { playSong, pauseSong, resumeSong } = usePlayback();

  const togglePlay = () => {
    const currentState = isPlaying
    setIsPlaying(!currentState)
    if (currentState) {
      pauseSong()
    } else {
      resumeSong()
    }
  }

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      <IconButton
        size="small"
        // onClick={playSong}
      >
        <SkipPreviousIcon />
      </IconButton>
      <Fab
        size="small"
        disableRipple
        onClick={togglePlay}
        sx={sx.playPauseButton}
      >
        <PlayArrowIcon />
      </Fab>
      <IconButton
        size="small"
        // onClick={() => { player.nextTrack() }}
      >
        <SkipNextIcon />
      </IconButton>
    </Stack>
  )
}

export default PlaybackButtons