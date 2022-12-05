import { useTheme } from "@emotion/react";
import { Stack, useMediaQuery } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import PlaylistTable from "../../components/playlistSongTable";
import useVirtualRowDisplay from "../../components/virtualisedRowDisplay/useVirtualRowDisplay";
import SongRowSkeleton from "../../components/playlistSongTable/songRowSkeleton";
import useLikedSongs from "../../hooks/data/useLikedSongs";
import { BODY_HEIGHT, BODY_WIDTH } from "../../styles/layout";
import PlaylistLabel from "../../components/playlistLabel";
import useGenerateRows from "../../components/playlistSongTable/useGenerateRows";
import usePlayback from "../../hooks/usePlayback";

const sx = {
  stack: {
    maxHeight: BODY_HEIGHT,
    maxWidth: BODY_WIDTH,
    overflowY: "auto",
    pb: 4
  }
}

// TODO: add observer for skeleton elements

const LikedSongsPage = () => {
  const { hasMoreSongs, likedSongs, getLikedSongs, totalNumber } = useLikedSongs()
  const { playSongFromLikedSongs } = usePlayback();
  const theme = useTheme();
  const lessThanLg = useMediaQuery(theme.breakpoints.down('lg'));
  const lessThanMd = useMediaQuery(theme.breakpoints.down('md'));

  const [observedElement, setObservedElement] = useState(null)

  const observer = useRef(new IntersectionObserver(getLikedSongs));

  useEffect(() => {
    if (!(observedElement && observer)) {
      return
    }

    observer.current = new IntersectionObserver(getLikedSongs)

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
  }, [getLikedSongs, observedElement])

  const { onScroll, visibleChildren } = useVirtualRowDisplay({
    children: useGenerateRows({
      songs: likedSongs, showAlbum: !lessThanMd, showDate: !lessThanLg,
      setObservedElement, hasMoreSongs, totalNumber, playSong: playSongFromLikedSongs(likedSongs)
    }),
    rowHeight: 64,
    skeletonRow: <SongRowSkeleton showAlbum={!lessThanMd} showDate={!lessThanLg} />,
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
      <PlaylistLabel
        title="Liked Songs"
        numOfSongs={totalNumber}
        likedSongs={true}
        play={() => playSongFromLikedSongs(likedSongs)(0)}
      />
      <PlaylistTable
        hasMoreSongs={hasMoreSongs}
        songs={likedSongs}
        getSongs={getLikedSongs}
        totalNumber={totalNumber}
        visibleChildren={visibleChildren}
      />
    </Stack>
  )
}

export default LikedSongsPage;