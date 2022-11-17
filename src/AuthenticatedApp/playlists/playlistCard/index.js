import { Card, CardActionArea, CardContent } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
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
  const navigate = useNavigate()

  const navigateToPlaylist = () => {
    navigate("/playlist/" + playlist.id)
  }

  return (
    <Card sx={sx.card}
      onMouseEnter={() => setShowPlayButton(playlist.totalSongs > 0)}
      onMouseLeave={() => setShowPlayButton(false)}
    >
      <CardActionArea disableRipple sx={sx.cardActionArea} onClick={navigateToPlaylist}>
        <CardContent sx={sx.cardActionArea}>
          <PlaylistImage img={playlist.images.length > 0 ? playlist.images[0].url : ""} showPlayButton={showPlayButton} />
          <PlaylistDesc title={playlist.title} desc={playlist.description} owner={playlist.owner.display_name} />
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default PlaylistCard;