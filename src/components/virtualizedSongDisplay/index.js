import { Table, useMediaQuery, useTheme } from '@mui/material';
import SongTableHeader from '../songDisplay/tableHeader';
import SongTableList from './songTableList';
import { useEffect, useRef } from "react";
import useComponentSize from "@rehooks/component-size";
import SongHeader from './songHeader';

const sx = {
  table: {
    tableLayout: "fixed",
    width: "100%",
    height: "100%"
  }
}

const VirtualizedTable = (props) => {
  const { hasMoreSongs, songs, getLikedSongs, totalNumber } = props;
  const theme = useTheme();
  const lessThanLg = useMediaQuery(theme.breakpoints.down('lg'));
  const lessThanMd = useMediaQuery(theme.breakpoints.down('md'));

  const ref = useRef(null);
  let dimensions = useComponentSize(ref);

  return (
    <>
      <Table aria-label="song list" stickyHeader size="small" style={sx.table} ref={ref}>
        <SongHeader showAlbum={!lessThanMd} showDate={!lessThanLg} />
        {/* <SongTableHeader showAlbum={!lessThanMd} showDate={!lessThanLg} /> */}
        <SongTableList
          hasMoreSongs={hasMoreSongs}
          showAlbum={!lessThanMd}
          showDate={!lessThanLg}
          height={dimensions.height}
          width={dimensions.width}
          songs={songs}
          totalNumber={totalNumber}
        />
      </Table>
    </>
  )
}

export default VirtualizedTable;