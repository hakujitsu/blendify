import { Box, Slider, Stack, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import usePlayback from "../../hooks/usePlayback";
import { incrementProgress, setProgress } from "../../store/slices/webPlayback";
import { convertMsToSongDuration } from "../../util/datetime";

const sx = {
  container: {
    width: "100%",
    px: 1,
  },
  slider: {
    height: "5px",
    "& .MuiSlider-thumb": {
      // display: "none",
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
    },
    flexGrow: 1
  },
  timeText: {
    height: "100%",
    width: "35px",
    display: "flex",
    justifyContent: "center"
  }
}

const PlaybackProgress = () => {
  const { currentSong, isPlaying, progress } = useSelector((state) => state.webPlayback)
  const {seekPosition } = usePlayback()
  const dispatch = useDispatch()

  const handleChange = (event, newValue) => {
    dispatch(setProgress(newValue))
  };

  const interval = useRef(null);
  useEffect(() => {
    interval.current = setInterval(() => {
      if (isPlaying) {
        dispatch(incrementProgress())
      }
    }, 500);
    return () => clearInterval(interval.current);
  }, [isPlaying]);

  const onChangeCommitted = (event, newValue) => {
    seekPosition(newValue)
  }

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1.5}
      sx={sx.container}
    >
      <Box sx={sx.timeText}>
        <Typography variant="caption" align="right">
          {currentSong ? convertMsToSongDuration(progress) : ""}
        </Typography>
      </Box>
      <Slider
        size="small"
        aria-label="Volume"
        min={0}
        max={currentSong ? currentSong.track.duration_ms : 100}
        value={progress}
        onChange={handleChange}
        onChangeCommitted={onChangeCommitted}
        sx={sx.slider}
      />
      <Box sx={sx.timeText}>
        <Typography variant="caption" align="left">
          {currentSong && currentSong.track ? convertMsToSongDuration(currentSong.track.duration_ms) : ""}
        </Typography>
      </Box>
    </Stack>
  )
}

export default PlaybackProgress;