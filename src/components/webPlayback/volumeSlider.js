import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { Slider, Stack } from '@mui/material';
import { useState } from 'react';

const sx = {
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
  const [volume, setVolume] = useState(100);

  const handleChange = (event, newValue) => {
    setVolume(newValue);
  };

  return (
    <Stack
      direction="row"
      justifyContent="flex-end"
      alignItems="center"
      spacing={2}
    >
      <VolumeDownIcon fontSize="small" />
      <Slider
        size="small"
        aria-label="Volume"
        value={volume}
        onChange={handleChange}
        sx={sx.slider}
      />
      <VolumeUpIcon fontSize="small" />
    </Stack>
  )
}

export default VolumeSlider;