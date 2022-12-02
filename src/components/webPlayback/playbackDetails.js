import { Stack } from "@mui/material";
import PlaybackButtons from "./playbackButtons";
import PlaybackProgress from "./playbackProgress";

const sx = {
  container: {
    width: "max(240px, (100vw - 40px - 48px) / 10 * 4)",
  }
}

const PlaybackDetails = () => {
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