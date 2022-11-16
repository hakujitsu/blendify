import { Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { convertMsToSongDuration, getDateAddedString } from "../../util/datetime";
import RowLayout from "./rowLayout";
import SongTitleBox from "./songTitleCell";
import React from "react";

const sx = {
  durationText: {
    pr: 2
  }
}

const SongRow = React.forwardRef((props, ref) => {
  const { song, index, showAlbum, showDate } = props;

  return (
    <div ref={ref}>
      <RowLayout
        indexContent={
          <Typography noWrap align="right">
            {index + 1}
          </Typography>
        }
        titleContent={
          <SongTitleBox image={song.track.album.images.slice(-1)[0].url} title={song.track.name} artists={song.track.artists} />
        }
        albumContent={<Typography variant="body2" noWrap>{song?.track?.album.name}</Typography>}
        dateContent={<Typography variant="body2" noWrap>{getDateAddedString(song?.added_at)}</Typography>}
        likedContent={<FavoriteIcon fontSize="small" />}
        durationContent={
          <Typography variant="body2" noWrap align="right" sx={sx.durationText}>
            {convertMsToSongDuration(song?.track.duration_ms)}
          </Typography>
        }
        showAlbum={showAlbum}
        showDate={showDate}
      />
    </div>
  )
})

export default SongRow