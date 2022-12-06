import PlayArrow from "@mui/icons-material/PlayArrow";
import { Box, Fab } from "@mui/material"

const sx = {
  buttonContainer: {
    height: "60px",
    position: "relative"
  },
  playButton: {
    position: "absolute",
    backgroundColor: "#cd5dde",
    width: "48px",
    height: "48px",
    top: "2px",
    left: "2px",
    transition: "all .25s ease",
    "&:hover": {
      backgroundColor: "#cd5dde",
      width: "52px",
      height: "52px",
      top: "0px",
      left: "0px",
    }
  },
  playIcon: {
    fontSize: "2rem !important"
  },
}

const PlaylistButton = (props) => {
  const {title, onClick} = props;

  return (
    <Box sx={sx.buttonContainer}>
      <Fab variant="contained" aria-label={`play ${title} playlist`} size="large" sx={sx.playButton} onClick={onClick}>
        <PlayArrow sx={sx.playIcon} />
      </Fab>
    </Box>
  )
}

export default PlaylistButton