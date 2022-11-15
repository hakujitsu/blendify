import {Box , Typography } from "@mui/material"

const sx = {
  container: {
    height: "160px",
    mb: "8px",
  }
}

const LikedSongsLabel = () => {
  return (
    <Box>
      <Box sx={sx.container}>
      <Typography variant="h4" >
        Liked Songs
      </Typography>
      </Box>
    </Box>
  )
}

export default LikedSongsLabel