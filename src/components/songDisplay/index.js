import { Table, useMediaQuery, useTheme } from '@mui/material';
import SongTableBody from './tableBody';
import SongTableHeader from './tableHeader';

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
  const lessThanLg = useMediaQuery(theme.breakpoints.down('lg'));
  const lessThanMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Table aria-label="song list" stickyHeader size="small" style={sx.table}>
      <SongTableHeader showAlbum={!lessThanMd} showDate={!lessThanLg} />
      <SongTableBody
        songs={songs}
        hasMoreSongs={hasMoreSongs}
        getSongs={getSongs}
        showAlbum={!lessThanMd}
        showDate={!lessThanLg}
      />
    </Table>
  );

}

export default SongDisplay;
