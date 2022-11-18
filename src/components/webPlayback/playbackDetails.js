import {Stack } from "@mui/material";
import PlaybackButtons from "./playbackButtons";
import PlaybackProgress from "./playbackProgress";

const sx = {
  container: {
    width: "45%",
  }
}

const PlaybackDetails = () => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={0.5}
      sx={sx.container}
    >
      <PlaybackButtons />
      <PlaybackProgress />
    </Stack>
  )
}

export default PlaybackDetails;