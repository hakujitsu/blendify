import { Box, Stack } from "@mui/material"
import Playlists from "../playlists";

const sx = {
  body: {
    height: `calc(100vh - 84px - 64px)`,
    overflowY: "auto"
  },
}

const AppBody = () => {
  return (
    <Box sx={sx.body}>
      {/* <Playlists/> */}
    </Box>
  )
}

export default AppBody;