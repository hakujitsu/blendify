import { Fab, Fade } from "@mui/material"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const sx = {
  playButton: {
    position: "absolute",
    bottom: "4px",
    right: "4px",
    backgroundColor: "#cd5dde",
    "&:hover": {
      backgroundColor: "#cd5dde",
    }
  },
  playIcon: {
    color: "black",
    fontSize: "1.8rem !important"
  }
}
const PlayButton = (props) => {
  const { showPlayButton, title } = props;
  return (
    <Fade in={showPlayButton} timeout={450}>
      <Fab variant="contained" aria-label={`play ${title} playlist`} size="large" sx={sx.playButton}>
        <PlayArrowIcon sx={sx.playIcon} />
      </Fab>
    </Fade>
  )
}

export default PlayButton;