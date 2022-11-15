import { Table, useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import VirtualWindow from '.';
import SongTableSkeletonRow from '../songDisplay/skeletonRow';
import SongTableHeader from '../songDisplay/tableHeader';
import SongTableRow from '../songDisplay/tableRow';
import _ from 'lodash';

const sx = {
  table: {
    tableLayout: "fixed",
    maxWidth: "100%",
  },
  spacerRow: {
    height: "16px"
  }
}

const TestSongDisplay = (props) => {
  const { hasMoreSongs, getSongs, songs, totalNumber } = props
  const theme = useTheme();
  const lessThanLg = useMediaQuery(theme.breakpoints.down('lg'));
  const lessThanMd = useMediaQuery(theme.breakpoints.down('md'));
  const [observedElement, setObservedElement] = useState(null)

  const observer = useRef(new IntersectionObserver(_.debounce(getSongs, 1000)));

  useEffect(() => {
    if (!(observedElement && observer)) {
      return
    }

    observer.current = new IntersectionObserver(_.debounce(getSongs, 500))

    const currentObserver = observer.current;
    const rowToObserve = observedElement

    if (hasMoreSongs) {
      currentObserver.observe(rowToObserve);
    } else {
      currentObserver.unobserve(rowToObserve)
    }
    return () => {
      if (currentObserver && observedElement) {
        currentObserver.unobserve(observedElement);
      }
    };
  }, [getSongs, observedElement])

  return (
    <Table aria-label="song list" stickyHeader size="small" style={sx.table}>
      <SongTableHeader showAlbum={!lessThanMd} showDate={!lessThanLg} />
      {/* <TableRow sx={sx.spacerRow} /> */}
      <VirtualWindow children={
        songs.map((song, index) => {
          if (songs.length >= 50 && index === songs.length - 25) {
            return (
              <SongTableRow
                key={song.track.uri}
                index={index}
                song={song}
                showAlbum={!lessThanMd}
                showDate={!lessThanLg}
                ref={setObservedElement}
              />
            )
          } else {
            return (
              <SongTableRow
                key={song.track.uri}
                index={index}
                song={song}
                showAlbum={!lessThanMd}
                showDate={!lessThanLg}
              />
            )
          }
        }).concat(
          hasMoreSongs
            ? new Array(totalNumber > 0 ? totalNumber - songs.length : 10).fill(0).map((_, index) => (
              <SongTableSkeletonRow key={index} />
            ))
            : []
        )
      }
        rowHeight={60}
      />
    </Table>
  );

}

export default TestSongDisplay;
