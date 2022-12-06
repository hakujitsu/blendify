import PlayArrow from "@mui/icons-material/PlayArrow";
import { Box, Fab, Stack } from "@mui/material"
import PlaylistButton from "./playlistButton";
import PlaylistImage from "./playlistImage";
import PlaylistTitleLabel from "./playlistTitleLabel";

const sx = {
  container: {
    mt: 4,
    height: "220px",
    mb: "8px",
  },
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
  rowContainer: {
    height: "160px"
  }
}

const PlaylistLabel = (props) => {
  const { title, numOfSongs, img = "", likedSongs = false, play } = props

  const onClick = () => {
    play()
  }

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={0}
      sx={sx.container}
    >
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={0} sx={sx.rowContainer}
      >
        <PlaylistImage img={img} likedSongs={likedSongs} />
        <PlaylistTitleLabel title={title} numOfSongs={numOfSongs} />
      </Stack>
      <PlaylistButton title={title} onClick={onClick} />
    </Stack>
  )
}

export default PlaylistLabel