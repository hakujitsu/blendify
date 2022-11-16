import { Box, Stack } from "@mui/material"
import PlaylistImage from "./playlistImage";
import PlaylistTitleLabel from "./playlistTitleLabel";

const sx = {
  container: {
    height: "160px",
    mb: "8px",
  }
}

const PlaylistLabel = (props) => {
  const { title, numOfSongs, img = "" } = props

  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={0} sx={sx.container}
      >
        <PlaylistImage img={img} />
        <PlaylistTitleLabel title={title} numOfSongs={numOfSongs} />
      </Stack>
    </Box>
  )
}

export default PlaylistLabel