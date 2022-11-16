import { Box, Typography } from "@mui/material"

const sx = {
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


const PlaylistDesc = (props) => {
  const { title, desc, owner } = props;
  return (
    <>
      <Typography gutterBottom variant="body2" noWrap sx={sx.playlistTitle}>
        {title}
      </Typography>
      <Box sx={sx.playlistDescBox}>
        <Typography variant="caption" color="text.secondary" component="div" sx={sx.playlistDesc}>
          {desc ? desc : "By " + owner}
        </Typography>
      </Box>
    </>
  )
}

export default PlaylistDesc