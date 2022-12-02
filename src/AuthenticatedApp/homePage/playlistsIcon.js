import { Paper } from "@mui/material"
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

const sx = {
  background: {
    background: `linear-gradient(61deg, rgba(29,44,118,1) 0%, rgba(68,1,91,1) 56%, rgba(101,12,49,2) 100%)`
  },
  icon: (size) => {
    return { fontSize: `${size / 2}px` };
  },
  paper: (size) => {
    return {
      minHeight: `${size}px`,
      minWidth: `${size}px`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      verticalAlign: "middle",
    }
  },
}

const PlaylistsIcon = (props) => {
  const { height } = props
  return (
    <Paper elevation={3} sx={sx.paper(height)} style={sx.background}>
      <LibraryMusicIcon sx={sx.icon(height)} />
    </Paper>
  )
}

export default PlaylistsIcon