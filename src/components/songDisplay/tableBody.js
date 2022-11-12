import { TableBody, TableRow } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import SongTableSkeletonRow from './skeletonRow';
import SongTableRow from './tableRow';
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

const SongTableBody = (props) => {
  const { songs, hasMoreSongs, getSongs, totalNumber, showAlbum, showDate } = props;
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
    <TableBody>
      <TableRow sx={sx.spacerRow} />
      {songs.map((song, index) => {
        if (songs.length >= 50 && index === songs.length - 25) {
          return (
            <SongTableRow
              key={song.track.uri}
              index={index}
              song={song}
              showAlbum={showAlbum}
              showDate={showDate}
              ref={setObservedElement}
            />
          )
        } else {
          return (
            <SongTableRow
              key={song.track.uri}
              index={index}
              song={song}
              showAlbum={showAlbum}
              showDate={showDate} />
          )
        }
      })}
      {hasMoreSongs && new Array(totalNumber > 0 ? totalNumber - songs.length : 10).fill(0).map((_, index) => (
        <SongTableSkeletonRow key={index} />
      ))}
    </TableBody>
  )
}

export default SongTableBody;