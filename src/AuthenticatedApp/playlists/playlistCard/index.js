import { Card, CardActionArea, CardContent } from "@mui/material"
import { useState } from "react"
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
  const [showPlayButton, setShowPlayButton] = useState(false)

  return (
    <Card sx={sx.card} onMouseEnter={() => setShowPlayButton(true)}
      onMouseLeave={() => setShowPlayButton(false)}>
      <CardActionArea sx={sx.cardActionArea}>
        <CardContent sx={sx.cardActionArea}>
          <PlaylistImage img={playlist.images.length > 0 ? playlist.images[0].url : ""} showPlayButton={showPlayButton} />
          <PlaylistDesc title={playlist.title} desc={playlist.description} owner={playlist.owner.display_name} />
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default PlaylistCard;