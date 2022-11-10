import { Stack, TableCell, TableRow, Typography } from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { convertMsToSongDuration, getDateAddedString } from "../../util/datetime";
import SongTitleCell from "./songTitleCell";

const sx = {
  row: {
    '&:last-child td, &:last-child th': { border: 0 },
    [`& .${tableCellClasses.root}`]: {
      borderBottom: "none",
      py: 1,
    },
  },
  test: {
    backgroundColor: "cyan"
  },
  stack: {
    maxWidth: "100%",
  },
  green: {
    backgroundColor: "green"
  }
}

const SongTableRow = (props) => {
  const { song, index, showAlbum, showDate } = props
  return (
    <TableRow hover sx={sx.row} >
      <TableCell component="th" scope="row">
        {index + 1}
      </TableCell>
      <SongTitleCell image={song.track.album.images.slice(-1)[0].url} title={song.track.name} artists={song.track.artists} />
      {/* <TableCell sx={sx.test}>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
          sx={sx.stack}
        >
          <img src={song.track.album.images.slice(-1)[0].url} width="48px" height="48px" />
          <Stack
            direction="column"
            justifyContent="center"
            spacing={0.5}
            sx={sx.green}
          >
            <Typography variant="body1" noWrap>{song.track.name}</Typography>
            <Typography variant="body2" noWrap>{song.track.artists.map(a => a.name).join(", ")}</Typography>
          </Stack>
        </Stack>
      </TableCell> */}
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
      <TableCell align="right">
        <Typography variant="body2" noWrap>
          {convertMsToSongDuration(song.track.duration_ms)}
        </Typography>
      </TableCell>
    </TableRow>
  )
}

export default SongTableRow;
