import { Box, CircularProgress } from "@mui/material";

const sx = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw"
  }
}

const LoadingScreen = () => {
  return (
    <Box sx={sx.container}>
      <CircularProgress size="3rem" />
    </Box>
  )
}

export default LoadingScreen;