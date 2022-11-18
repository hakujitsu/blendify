import { Box, Slider, Stack, Typography } from "@mui/material";
import { useState } from "react";

const sx = {
  container: {
    width: "100%",
    px: 1,
  },
  slider: {
    height: "5px",
    "& .MuiSlider-thumb": {
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
    },
  },
}

const PlaybackProgress = () => {
  const [progress, setProgress] = useState(0)


  const handleChange = (event, newValue) => {
    setProgress(newValue);
  };

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={sx.container}
    >
      <Typography variant="caption">
        1:16
      </Typography>
      <Slider
        size="small"
        aria-label="Volume"
        value={progress}
        onChange={handleChange}
        sx={sx.slider}
        flexGrow={1}
      />
      <Typography variant="caption">
        2:28
      </Typography>
    </Stack>
  )
}

export default PlaybackProgress;