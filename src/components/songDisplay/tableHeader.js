import { TableCell, TableHead, TableRow } from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const SongTableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>#</TableCell>
        <TableCell>TITLE</TableCell>
        <TableCell>ALBUM</TableCell>
        <TableCell>DATE ADDED</TableCell>
        <TableCell>{/* EMPTY, for liked symbol */}</TableCell>
        <TableCell align="right"><AccessTimeIcon /></TableCell>
      </TableRow>
    </TableHead>
  )
}

export default SongTableHeader;