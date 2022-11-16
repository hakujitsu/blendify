import { Paper } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';

const sx = {
  background: {
    background: `linear-gradient(61deg, rgba(29,44,118,1) 0%, rgba(68,1,91,1) 56%, rgba(101,12,49,2) 100%)`
  },
  icon: {
    fontSize: "60px",
  },
  paper: {
    height: "128px",
    width: "128px",
    mr: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    verticalAlign: "middle",
  },
}
const PlaylistImage = (props) => {
  const { img } = props;

  if (img) {
    return (<></>)
  } else {
    return (
      <Paper elevation={3} sx={sx.paper} style={sx.background}>
        <FavoriteIcon sx={sx.icon} />
      </Paper>
    )
  }
}

export default PlaylistImage;