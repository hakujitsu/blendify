import { Box, Card, CardMedia, Paper } from "@mui/material"
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import PlayButton from "./playButton";

const sx = {
  box: {
    aspectRatio: "1",
    width: "100%",
  },
  cardContainer: {
    position: "absolute",
    top: "16px",
    left: "16px",
    width: "calc(100% - 32px)",
  },
  cardImage: {
    aspectRatio: "1",
    width: "100%"
  },
  placeholder: {
    backgroundColor: "background.border",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    verticalAlign: "middle",
  },
  placeholderIcon: {
    fontSize: "72px",
  },
  playButton: {
    position: "absolute",
    bottom: "4px",
    right: "4px",
    backgroundColor: "primary.main",
    "&:hover": {
      backgroundColor: "primary.main",
    }
  },
  playIcon: {
    color: "black",
  }
}

const PlaylistImage = (props) => {
  const { title, img, showPlayButton } = props

  return (
    <Box sx={sx.box}>
      <Card elevation={3} sx={sx.cardContainer}>
        {img ?
          <CardMedia
            component="img"
            image={img}
            alt={title + " image"}
            sx={sx.cardImage}
          /> :
          <Paper sx={[sx.cardImage, sx.placeholder]}>
            <LibraryMusicIcon sx={sx.placeholderIcon} />
          </Paper>
        }
        <PlayButton showPlayButton={showPlayButton} title={title} />
      </Card>
    </Box>
  )
}

export default PlaylistImage;