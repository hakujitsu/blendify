import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"

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
  cardImage: {
    aspectRatio: 1
  },
  playlistDesc: {
    overflow: "hidden",
    "display": "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": "2",
  },
  playlistDescBox: {
    height: "32px"
  },
  playlistTitle: {
    pt: 2,
    fontWeight: "bold"
  },
}

const PlaylistCard = (props) => {
  const { playlist } = props

  return (
    <Card sx={sx.card}>
      <CardActionArea sx={sx.cardActionArea}>
        <CardContent sx={sx.cardActionArea}>
          <Card>
            <CardMedia
              component="img"
              // height="140px"
              image={playlist.images.length > 0 ? playlist.images[0].url : ""}
              alt={playlist.title + " image"}
              sx={sx.cardImage}
            />
          </Card>
          <Typography gutterBottom variant="body1" noWrap sx={sx.playlistTitle}>
            {playlist.title}
          </Typography>
          <Box sx={sx.playlistDescBox}>
            <Typography variant="body2" color="text.secondary" component="div" sx={sx.playlistDesc}>
              {playlist.description ? playlist.description : "By " + playlist.owner.display_name}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default PlaylistCard;