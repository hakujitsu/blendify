import { Box, Fab, IconButton, Stack } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';

const sx = {
  playPauseButton: {
    boxShadow: 0,
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 0,
    },
  }
}
const PlaybackButtons = () => {
  return (
    <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <IconButton>
          <SkipPreviousIcon />
        </IconButton>
        <Fab size="small" disableRipple sx={sx.playPauseButton}>
          <PlayArrowIcon />
        </Fab>
        <IconButton>
          <SkipNextIcon />
        </IconButton>
      </Stack>
  )
}

export default PlaybackButtons