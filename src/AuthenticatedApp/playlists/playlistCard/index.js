import { Card, CardActionArea, CardContent } from "@mui/material"
import PlaylistDesc from "./playlistDesc"
import PlaylistImage from "./playlistImage"

const sx = {
  card: {
    // height: "380px"
  },
  cardActionArea: {
    height: "100%",
    width: "100%",
    pb: 2
  },
  cardContent: {
    height: "100%",
    width: "100%"
  },
}

const PlaylistCard = (props) => {
  const { playlist } = props

  return (
    <Card sx={sx.card}>
      <CardActionArea sx={sx.cardActionArea}>
        <CardContent sx={sx.cardActionArea}>
          <PlaylistImage img={playlist.images.length > 0 ? playlist.images[0].url : ""} />
          <PlaylistDesc title={playlist.title} desc={playlist.description} owner={playlist.owner.display_name} />
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default PlaylistCard;