import { useTheme } from "@emotion/react";
import { Stack, Typography, useMediaQuery } from "@mui/material";
import { useEffect } from "react";
import SongDisplay from "../../components/songDisplay";
import TestSongDisplay from "../../components/virtualisedDisplay/test";
import useVirtualDisplay from "../../components/virtualisedDisplay/useVirtualDisplay";
import VirtualSongRow from "../../components/virtualisedDisplay/virtualSongRow";
import useLikedSongs from "../../hooks/data/useLikedSongs";
import { BODY_HEIGHT, BODY_WIDTH } from "../../styles/layout";
import LikedSongsLabel from "./label";

const sx = {
  stack: {
    maxHeight: BODY_HEIGHT,
    maxWidth: BODY_WIDTH,
    overflowY: "auto"
  }
}

const LikedSongsPage = () => {
  const { hasMoreSongs, likedSongs, getLikedSongs, totalNumber } = useLikedSongs()
  const theme = useTheme();
  const lessThanLg = useMediaQuery(theme.breakpoints.down('lg'));
  const lessThanMd = useMediaQuery(theme.breakpoints.down('md'));
  const {onScroll, visibleChildren } = useVirtualDisplay({
    children: likedSongs.map((song, index) => (
      <VirtualSongRow
        key={song.track.uri}
        index={index}
        song={song}
        showAlbum={!lessThanMd}
        showDate={!lessThanLg}
      />
    )),
    rowHeight: 60
  })

  useEffect(() => {
    getLikedSongs()
  }, [])


  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="stretch"
      spacing={0}
      sx={sx.stack}
      onScroll={onScroll}
    >
      <LikedSongsLabel />
      <TestSongDisplay hasMoreSongs={hasMoreSongs} songs={likedSongs} getSongs={getLikedSongs} totalNumber={totalNumber} visibleChildren={visibleChildren}/>
    </Stack>
  )
}

export default LikedSongsPage;