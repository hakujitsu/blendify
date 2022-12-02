import { Box, Typography } from "@mui/material"
import useHistory from "../../hooks/useHistory"

const sx = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  logo: {
    fontFamily: "Comfortaa"
  }
}

const Logo = () => {
  const { navigateTo } = useHistory()
  return (
    <Box sx={sx.container} onClick={() => navigateTo("/")}>
      <Typography variant="h5" sx={sx.logo}>
        blendify
      </Typography>
    </Box>
  )
}

export default Logo;