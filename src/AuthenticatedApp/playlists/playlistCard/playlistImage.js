import { Card, CardMedia, Paper } from "@mui/material"
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

const sx = {
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
  }
}

const PlaylistImage = (props) => {
  const { title, img } = props
  return (
    <Card elevation={3}>
      {img ?
        <CardMedia
          component="img"
          image={img}
          alt={title + " image"}
          sx={sx.cardImage}
        /> :
        <Paper sx={[sx.cardImage, sx.placeholder]}>
          <LibraryMusicIcon sx={sx.placeholderIcon}/>
        </Paper>
      }
    </Card>
  )
}

export default PlaylistImage;