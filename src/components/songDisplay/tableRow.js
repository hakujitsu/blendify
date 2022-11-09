import { TableCell, TableRow } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { convertMsToSongDuration, getDateAddedString } from "../../util/datetime";

const SongTableRow = (props) => {
  const { song, index } = props
  return (
    <TableRow
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {index + 1}
      </TableCell>
      <TableCell >{song.track.name}</TableCell>
      <TableCell >{song.track.album.name}</TableCell>
      <TableCell >{getDateAddedString(song.added_at)}</TableCell>
      <TableCell ><FavoriteIcon /></TableCell>

      <TableCell align="right">{convertMsToSongDuration(song.track.duration_ms)}</TableCell>
    </TableRow>
  )
}

export default SongTableRow;
