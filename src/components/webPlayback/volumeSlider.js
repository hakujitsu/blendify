import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { Slider, Stack } from '@mui/material';
import _ from 'lodash';
import { useCallback, useState } from 'react';
import usePlayback from '../../hooks/usePlayback';

const sx = {
  container: {
    width: "max(240px, (100vw - 40px - 48px) / 10 * 3)",
  },
  slider: {
    width: "100px",
    height: "5px",
    "& .MuiSlider-thumb": {
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
    },
  },
}

const VolumeSlider = () => {
  const [volume, setVolume] = useState(50);
  const { toggleVolume } = usePlayback()

  const setSpotifyVolume = useCallback(_.debounce((newValue) => {
    toggleVolume(newValue)
  }, 500), [volume, toggleVolume])

  const handleChange = (event, newValue) => {
    setVolume(newValue);
    setSpotifyVolume(newValue)
  };

  return (
    <Stack
      direction="row"
      justifyContent="flex-end"
      alignItems="center"
      spacing={2}
      sx={sx.container}
    >
      <VolumeDownIcon fontSize="small" />
      <Slider
        size="small"
        aria-label="Volume"
        min={0}
        max={100}
        value={volume}
        onChange={handleChange}
        sx={sx.slider}
      />
      <VolumeUpIcon fontSize="small" />
    </Stack>
  )
}

export default VolumeSlider;