import { Table, TableBody } from '@mui/material';
import * as React from 'react';
import SongTableHeader from './tableHeader';
import SongTableRow from './tableRow';

const SongDisplay = (props) => {
  const { songs } = props

  console.log(songs)
  return (
    <Table sx={{ minWidth: 650 }} aria-label="song list" stickyHeader>
      <SongTableHeader />
      <TableBody>
        {songs.map((song, index) => (
          <SongTableRow key={song.track.uri} song={song} index={index}/>
        ))}
      </TableBody>
    </Table>
  );

}

export default SongDisplay;
