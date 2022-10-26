import { Box, Typography } from "@mui/material"

const sx = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    fontFamily: "Comfortaa"
  }
}

const Logo = () => {
  return (
    <Box sx={sx.container}>
      <Typography variant="h5" sx={sx.logo}>
        blendify
      </Typography>
    </Box>
  )
}

export default Logo;