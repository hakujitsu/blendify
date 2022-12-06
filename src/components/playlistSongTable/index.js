import { Box, useMediaQuery, useTheme } from '@mui/material';
import VirtualWindow from '../virtualisedRowDisplay';
import { BODY_WIDTH } from '../../styles/layout';
import SongHeader from './songHeader';

const sx = {
  table: {
    maxWidth: BODY_WIDTH,
    marginBottom: 4,
  },
  spacerRow: {
    height: "12px"
  }
}

const PlaylistTable = (props) => {
  const { totalNumber, visibleChildren } = props
  const theme = useTheme();
  const lessThanLg = useMediaQuery(theme.breakpoints.down('lg'));
  const lessThanMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={sx.table}>
      <SongHeader showAlbum={!lessThanMd} showDate={!lessThanLg} />
      <Box sx={sx.spacerRow} />
      <VirtualWindow visibleChildren={visibleChildren} numberOfItems={totalNumber} />
    </Box>
  );
}

export default PlaylistTable;
