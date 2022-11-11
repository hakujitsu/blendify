import { TableBody, TableRow } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import SongTableSkeletonRow from './skeletonRow';
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


const SongTableBody = (props) => {
  const { songs, hasMoreSongs, getSongs, showAlbum, showDate } = props;
  const [observedElement, setObservedElement] = useState(null)

  const observer = useRef(
    new IntersectionObserver(getSongs)
  );

  useEffect(() => {
    if (!(observedElement && observer)) {
      return
    }

    observer.current = new IntersectionObserver(getSongs)

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
  }, [songs, observedElement])


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
      {hasMoreSongs && new Array(50).fill(0).map((_, index) => (
        <SongTableSkeletonRow key={index} />
      ))}
    </TableBody>
  )

}

export default SongTableBody;