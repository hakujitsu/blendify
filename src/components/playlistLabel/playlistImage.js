import { Box, Card, CardMedia, } from "@mui/material"
import IconPlaceholder from "../../AuthenticatedApp/playlists/playlistCard/iconPlaceholder";
import LikedSongsIcon from "../../AuthenticatedApp/likedSongs/likedSongsIcon";

const sx = {
  container: {
    minHeight: "128px",
    minWidth: "128px",
    mr: 4,
  },
}
const PlaylistImage = (props) => {
  const { img, likedSongs } = props;

  if (img) {
    return (
      <Card elevation={3} sx={sx.container}>
        <CardMedia
          height="128px"
          width="128px"
          component="img"
          image={img}
          sx={sx.cardImage}
        />
      </Card>
    )
  } else if (likedSongs) {
    return (
      <Box sx={sx.container}>
        <LikedSongsIcon height={128}/>
      </Box>
    )
  } else {
    return (
      <Box sx={sx.container}>
        <IconPlaceholder />
      </Box>
    )
  }
}

export default PlaylistImage;