import { Box, useMediaQuery, useTheme } from '@mui/material';
import VirtualWindow from '.';
import SongHeader from './songHeader';
import { BODY_WIDTH } from '../../styles/layout';

const sx = {
  table: {
    maxWidth: BODY_WIDTH,
  },
  spacerRow: {
    height: "12px"
  }
}

const TestSongDisplay = (props) => {
  const { hasMoreSongs, getSongs, songs, totalNumber, visibleChildren } = props
  const theme = useTheme();
  const lessThanLg = useMediaQuery(theme.breakpoints.down('lg'));
  const lessThanMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box style={sx.table}>
      <SongHeader showAlbum={!lessThanMd} showDate={!lessThanLg} />
      <Box sx={sx.spacerRow} />
      <VirtualWindow visibleChildren={visibleChildren} numberOfItems={songs.length} />
    </Box>
  );

}

export default TestSongDisplay;
