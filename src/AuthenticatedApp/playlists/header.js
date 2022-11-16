import { Box, Typography } from "@mui/material";

const sx = {
  title: {
    fontWeight: "bold"
  }
}

const PlaylistsHeader = () => {
  return (
    <Box>
      <Typography variant="h5" sx={sx.title}>
        Playlists
      </Typography>
    </Box>
  )

}

export default PlaylistsHeader;