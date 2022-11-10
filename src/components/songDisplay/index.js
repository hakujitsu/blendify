import { Table, TableBody, TableRow, useMediaQuery, useTheme } from '@mui/material';
import SongTableSkeletonRow from './skeletonRow';
import SongTableHeader from './tableHeader';
import SongTableRow from './tableRow';

const sx = {
  table: {
    tableLayout: "fixed",
    maxWidth: "100%",
  },
  spacerRow: {
    height: "16px"
  }
}

const SongDisplay = (props) => {
  const { hasMoreSongs, getSongs, songs } = props
  const theme = useTheme();
  const lessThanMd = useMediaQuery(theme.breakpoints.down('lg'));
  const lessThanSm = useMediaQuery(theme.breakpoints.down('md'));

  console.log(songs)

  console.log("showAlbum " + !lessThanSm)
  console.log("showDate " + !lessThanMd)

  return (
    <Table aria-label="song list" stickyHeader size="small" style={sx.table}>
      <SongTableHeader showAlbum={!lessThanSm} showDate={!lessThanMd} />
      <TableBody>
      <TableRow sx={sx.spacerRow} />
        {songs.map((song, index) => (
          <SongTableRow
            key={song.track.uri}
            index={index}
            song={song}
            showAlbum={!lessThanSm}
            showDate={!lessThanMd} />
        ))}
        {hasMoreSongs &&
          <SongTableSkeletonRow />
        }
      </TableBody>
    </Table>
  );

}

export default SongDisplay;
