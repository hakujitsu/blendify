import { Box, Typography } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PlayingAnimation from "./playingAnimation";
import { useSelector } from "react-redux";

const sx = {
  playingAnimation: {
    height: "100%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    mt: 3,
    ml: 1
  },
  playButton: {
    height: "100%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    ml: 2,
  }
}

const SongIndex = (props) => {
  const { index, playSong, showPlayButton, song } = props
  const { currentSong, isPlaying } = useSelector((state) => state.webPlayback)

  return (
    showPlayButton ?
      <Box sx={sx.playButton}>
        <PlayArrowIcon onClick={() => playSong(song, index)} />
      </Box> :
      (isPlaying && currentSong && currentSong.track.uri === song.track.uri ?
        <Box sx={sx.playingAnimation}>
          <PlayingAnimation />
        </Box>
        :
        <Typography noWrap align="right">
          {index + 1}
        </Typography>)
  )
}

export default SongIndex