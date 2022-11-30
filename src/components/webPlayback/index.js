import { Stack } from '@mui/material';
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
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={0}
      sx={sx.container}
    >
      <SongDetails />
      <PlaybackDetails />
      <VolumeSlider />
    </Stack>
  )
}

export default WebPlayback;