import { Box, Fab, IconButton, Stack } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import usePlayback from "../../hooks/usePlayback";
import { useSelector } from "react-redux";

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
  const { isPlaying } = useSelector((state) => state.webPlayback)
  const { pauseSong, resumeSong } = usePlayback();

  const togglePlay = () => {
    if (isPlaying) {
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
        {isPlaying ? <PauseIcon/> : <PlayArrowIcon />}
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