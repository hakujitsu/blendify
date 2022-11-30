import { Box } from "@mui/material";
import "../../styles/playingAnimation.css"

const sx = {
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ml: 2,
  }
}

const PlayingAnimation = () => {
  return (
    <div id="bars">
      <div class="bar" />
      <div class="bar" />
      <div class="bar" />
      <div class="bar" />
    </div>
  )
}

export default PlayingAnimation;