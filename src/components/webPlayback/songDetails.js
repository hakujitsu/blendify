import { Box, Stack, Typography } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useSelector } from "react-redux"
import MusicOffIcon from '@mui/icons-material/MusicOff';

// TODO: fix overflow bug

const sx = {
  container: {
    height: "100%",
    width: "30%",
    maxWidth: "30%",
  },
  placeholderBox: {
    height: "56px",
    width: "56px",
    backgroundColor: "background.border",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}

const SongDetails = () => {
  const { currentSong } = useSelector((state) => state.webPlayback)

  if (!currentSong) {
    return (
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
        sx={sx.stack}
      >
        <Box sx={sx.placeholderBox}>
          <MusicOffIcon />
        </Box>
        <Typography variant="body2" noWrap>No Track Playing</Typography>
      </Stack>
    )
  }

  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
      sx={sx.stack}
    >
      <img
        src={currentSong.track.album.images.slice(-1)[0].url}
        width="56px"
        height="56px"
      />
      <Stack
        direction="column"
        justifyContent="center"
        spacing={0.25}
      >
        <Typography variant="body2" noWrap>{currentSong.track.name}</Typography>
        <Typography variant="caption" noWrap>{currentSong.track.artists.map(a => a.name).join(", ")}</Typography>
      </Stack>
      {currentSong.track.liked ? <FavoriteIcon fontSize="small" /> : <FavoriteBorderIcon fontSize="small" />}
    </Stack>
  )
}

export default SongDetails