import { Stack } from "@mui/material";
import PlaybackButtons from "./playbackButtons";
import PlaybackProgress from "./playbackProgress";

const sx = {
  container: {
    width: "45%",
  }
}

const PlaybackDetails = (props) => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={0.25}
      sx={sx.container}
    >
      <PlaybackButtons />
      <PlaybackProgress />
    </Stack>
  )
}

export default PlaybackDetails;