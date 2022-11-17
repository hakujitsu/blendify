import { Box, Fab, Fade } from "@mui/material"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const sx = {
  playButton: {
    position: "absolute",
    bottom: "6px",
    right: "6px",
    backgroundColor: "#cd5dde",
    width: "48px",
    height: "48px",
    transition: "all .25s ease",
    "&:hover": {
      backgroundColor: "#cd5dde",
      width: "54px",
      height: "54px",
      bottom: "3px",
      right: "3px",
    }
  },
  playIcon: {
    color: "black",
    fontSize: "2rem !important"
  }
}

const PlayButton = (props) => {
  const { showPlayButton, title } = props;

  const onClick = (e) => {
    e.stopPropagation()
  }

  return (
    <Fade in={showPlayButton} timeout={450}>
      <Box>
        <Fab variant="contained" aria-label={`play ${title} playlist`} size="large" sx={sx.playButton} onClick={onClick}>
          <PlayArrowIcon sx={sx.playIcon} />
        </Fab>
      </Box>
    </Fade>
  )
}

export default PlayButton;