import { Box, useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import VirtualWindow from '.';
import SongTableRow from '../songDisplay/tableRow';
import _ from 'lodash';
import SongHeader from '../virtualizedSongDisplay/songHeader';
import { BODY_WIDTH } from '../../styles/layout';
import VirtualSongRow from './virtualSongRow';

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
  // const [observedElement, setObservedElement] = useState(null)

  // const observer = useRef(new IntersectionObserver(_.debounce(getSongs, 1000)));

  // useEffect(() => {
  //   if (!(observedElement && observer)) {
  //     return
  //   }

  //   observer.current = new IntersectionObserver(_.debounce(getSongs, 500))

  //   const currentObserver = observer.current;
  //   const rowToObserve = observedElement

  //   if (hasMoreSongs) {
  //     currentObserver.observe(rowToObserve);
  //   } else {
  //     currentObserver.unobserve(rowToObserve)
  //   }
  //   return () => {
  //     if (currentObserver && observedElement) {
  //       currentObserver.unobserve(observedElement);
  //     }
  //   };
  // }, [getSongs, observedElement])

  return (
    <Box style={sx.table}>
      <SongHeader showAlbum={!lessThanMd} showDate={!lessThanLg} />
      <Box sx={sx.spacerRow}/>
      <VirtualWindow visibleChildren={visibleChildren} numberOfItems={songs.length} />
    </Box>
  );

}

export default TestSongDisplay;
