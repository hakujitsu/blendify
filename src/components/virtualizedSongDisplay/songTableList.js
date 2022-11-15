import { FixedSizeList as List } from 'react-window';
import SongRow from './songRow';

const sx = {
  tbody: {
    mt: 4
  }
}

const SongTableList = (props) => {
  const { hasMoreSongs, showAlbum, showDate, height, width, songs, totalNumber } = props
  console.log(height)
  return (
    <tbody style={sx.tbody}>
      <tr>
        <td>
          <List
            height={400}
            itemCount={totalNumber}
            itemSize={64}
            width={width}
            itemData={{songs, showAlbum, showDate}}
          >
            {SongRow}
          </List>
        </td>
      </tr>
    </tbody>
  )
};

export default SongTableList;
