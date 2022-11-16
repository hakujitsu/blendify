import { Card, CardMedia, Fab, Fade, Paper } from "@mui/material"
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import PlayButton from "./playButton";

const sx = {
  cardContainer: {
    position: 'relative'
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
    backgroundColor: "#cd5dde",
    "&:hover": {
      backgroundColor: "#cd5dde",
    }
  },
  playIcon: {
    color: "black",
  }
}

const PlaylistImage = (props) => {
  const { title, img, showPlayButton } = props

  return (
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
  )
}

export default PlaylistImage;