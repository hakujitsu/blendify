import { TableCell, TableRow, Typography } from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { convertMsToSongDuration, getDateAddedString } from "../../util/datetime";
import SongTitleCell from "./songTitleCell";
import React from "react";

const sx = {
  firstCell: {
    borderTopLeftRadius: "16px",
    borderBottomLeftRadius: "16px"
  },
  lastCell: {
    borderTopRightRadius: "16px",
    borderBottomRightRadius: "16px"
  },
  row: {
    '&:last-child td, &:last-child th': { border: 0 },
    [`& .${tableCellClasses.root}`]: {
      borderBottom: "none",
      py: 1,
    },
  },
  stack: {
    maxWidth: "100%",
  },
}

const SongTableRow = React.forwardRef((props, ref) => {
  const { song, index, showAlbum, showDate } = props
  return (
    <TableRow hover sx={sx.row} ref={ref}>
      <TableCell component="th" scope="row" sx={sx.firstCell}>
        {index + 1}
      </TableCell>
      <SongTitleCell image={song.track.album.images.slice(-1)[0].url} title={song.track.name} artists={song.track.artists} />
      {showAlbum &&
        <TableCell>
          <Typography variant="body2" noWrap>{song.track.album.name}</Typography>
        </TableCell>
      }
      {showDate &&
        <TableCell>
          <Typography variant="body2" noWrap>{getDateAddedString(song.added_at)}</Typography>
        </TableCell>
      }
      <TableCell>
        <FavoriteIcon fontSize="small" />
      </TableCell>
      <TableCell align="right" sx={sx.lastCell}>
        <Typography variant="body2" noWrap>
          {convertMsToSongDuration(song.track.duration_ms)}
        </Typography>
      </TableCell>
    </TableRow>
  )
})

export default SongTableRow;
