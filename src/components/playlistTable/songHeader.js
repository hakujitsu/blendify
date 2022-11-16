import { Box, Typography } from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RowLayout from "./rowLayout"

const sx = {
  container: {
    position: "sticky",
    top: 0,
    borderBottom: 1,
    py: 1,
    backgroundColor: "background.default",
    zIndex: 100,
    height: "50px"
  },
  index: {
    height: "100%",
    width: "100%",
  },
  duration: {
    height: "100%",
    width: "100%",
    pr: 1.5
  }
}

const SongHeader = (props) => {
  const { showAlbum, showDate } = props;
  return (
    <Box sx={sx.container}>
      <RowLayout
        isTitle={true}
        indexContent={
          <Box display="flex" justifyContent="flex-end" sx={sx.index}>
            <Typography variant="overline" align="right">#</Typography>
          </Box>
        }
        titleContent={<Typography variant="overline">TITLE</Typography>}
        albumContent={<Typography variant="overline">ALBUM</Typography>}
        dateContent={<Typography variant="overline">DATE ADDED</Typography>}
        likedContent={<></>}
        durationContent={
          <Box display="flex" justifyContent="flex-end" sx={sx.duration}>
            <AccessTimeIcon />
          </Box>
        }
        showAlbum={showAlbum}
        showDate={showDate}
      />
    </Box>
  )
}

export default SongHeader;