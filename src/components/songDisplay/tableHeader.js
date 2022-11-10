import { TableCell, TableHead, TableRow, Typography } from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const sx = {
  indexColumn: {
    width: "30px"
  },
  titleColumn: (showAlbum, showDate) => {
    return showDate ? { width: "40%" } : (showAlbum ? { width: "50%" } : { width: "70%" });
  },
  albumColumn: (showAlbum, showDate) => {
    return showDate ? { width: "30%" } : { width: "30%" }
  },
  dateColumn: {
    width: "15%"
  },
  timeColumn: {
    width: "80px"
  }
}

const SongTableHeader = (props) => {
  const { showAlbum, showDate } = props;
  return (
    <TableHead>
      <TableRow>
        <TableCell sx={sx.indexColumn}>
          <Typography variant="overline">#</Typography>
        </TableCell>
        <TableCell sx={sx.titleColumn(showAlbum, showDate)}>
          <Typography variant="overline">TITLE</Typography>
        </TableCell>
        {showAlbum &&
          <TableCell sx={sx.albumColumn(showAlbum, showDate)}>
            <Typography variant="overline">ALBUM</Typography>
          </TableCell>
        }
        {showDate &&
          <TableCell sx={sx.dateColumn}>
            <Typography variant="overline">DATE ADDED</Typography>
          </TableCell>
        }
        <TableCell  sx={sx.indexColumn}/>
        <TableCell align="right" sx={sx.timeColumn}>
          <AccessTimeIcon />
        </TableCell>
      </TableRow>
    </TableHead>
  )
}

export default SongTableHeader;