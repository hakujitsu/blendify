import { Box, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { convertMsToSongDuration, getDateAddedString } from "../../util/datetime";
import RowLayout from "./rowLayout";
import SongTitleBox from "./songTitleCell";
import React, { useState } from "react";
import usePlayback from "../../hooks/usePlayback";
import PlayingAnimation from "./playingAnimation";

const sx = {
  durationText: {
    pr: 2
  },
  playingAnimation: {
    height: "100%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    mt: 3,
    ml: 1
  },
  playButton: {
    height: "100%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    ml: 2,
  }
}

const SongRow = React.forwardRef((props, ref) => {
  const { song, index, showAlbum, showDate } = props;
  const [showPlayButton, setShowPlayButton] = useState(false)
  const { playSong } = usePlayback()

  return (
    <div
      onMouseEnter={() => setShowPlayButton(true)}
      onMouseLeave={() => setShowPlayButton(false)}
      ref={ref}
    >
      <RowLayout
        indexContent={
          showPlayButton ?
            <Box sx={sx.playButton}>
              <PlayArrowIcon onClick={() => playSong(song.track.uri, song)} />
            </Box> :
            // <Box sx={sx.playingAnimation}>
            //   <PlayingAnimation />
            // </Box>
          <Typography noWrap align="right">
            {index + 1}
          </Typography>
        }
        titleContent={
          < SongTitleBox image={song.track.album.images.slice(-1)[0].url} title={song.track.name} artists={song.track.artists} />
        }
        albumContent={< Typography variant="body2" noWrap > {song?.track?.album.name}</Typography >}
        dateContent={< Typography variant="body2" noWrap > {getDateAddedString(song?.added_at)}</Typography >}
        likedContent={
          song?.track.liked ? <FavoriteIcon fontSize="small" /> : <FavoriteBorderIcon fontSize="small" />
        }
        durationContent={
          < Typography variant="body2" noWrap align="right" sx={sx.durationText} >
            {convertMsToSongDuration(song?.track.duration_ms)}
          </Typography >
        }
        showAlbum={showAlbum}
        showDate={showDate}
      />
    </div >
  )
})

export default SongRow