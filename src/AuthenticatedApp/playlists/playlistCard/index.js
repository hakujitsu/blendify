import { Card, CardActionArea, CardContent } from "@mui/material"
import { useState } from "react"
import useHistory from "../../../hooks/useHistory"
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
  const { navigateTo } = useHistory()

  const navigateToPlaylist = () => {
    navigateTo("/playlist/" + playlist.id)
  }

  return (
    <Card sx={sx.card}
      onMouseEnter={() => setShowPlayButton(playlist.totalSongs > 0)}
      onMouseLeave={() => setShowPlayButton(false)}
    >
      <CardActionArea disableRipple sx={sx.cardActionArea} onClick={navigateToPlaylist}>
        <CardContent sx={sx.cardActionArea}>
          <PlaylistImage img={playlist.images.length > 0 ? playlist.images[0].url : ""} showPlayButton={showPlayButton} uri={playlist.uri}/>
          <PlaylistDesc title={playlist.title} desc={playlist.description} owner={playlist.owner.display_name} />
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default PlaylistCard;