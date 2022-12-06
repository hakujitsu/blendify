import { Box, CircularProgress } from "@mui/material";

const sx = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%"
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