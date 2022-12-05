import { Box, Card, CardMedia } from "@mui/material"
import PlayButton from "./playButton";
import IconPlaceholder from "./iconPlaceholder";
import usePlayback from "../../../hooks/usePlayback";

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
  const { title, img, showPlayButton, uri } = props
  const { playSongFromPlaylist } = usePlayback()

  return (
    <Box sx={sx.box}>
      <Card elevation={3} sx={sx.cardContainer}>
        {img ?
          <CardMedia
            component="img"
            image={img}
            alt={title + " image"}
            sx={sx.cardImage}
          />
          : <IconPlaceholder />
        }
        <PlayButton showPlayButton={showPlayButton} title={title} play={() => playSongFromPlaylist(uri)(0)} />
      </Card>
    </Box>
  )
}

export default PlaylistImage;