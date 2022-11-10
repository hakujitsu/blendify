import { Box } from "@mui/material"
import LikedSongsPage from "../likedSongs";
import Playlists from "../playlists";

const sx = {
  body: {
    height: `calc(100vh - 84px - 64px)`,
    overflowY: "auto",
  },
}

const AppBody = () => {
  return (
    <Box sx={sx.body}>
      <LikedSongsPage />
      {/* <Playlists/> */}
    </Box>
  )
}

export default AppBody;