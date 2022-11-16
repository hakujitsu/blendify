import { useTheme } from "@emotion/react";
import { Stack, useMediaQuery } from "@mui/material";
import _ from "lodash";
import { useEffect, useRef, useState } from "react";
import TestSongDisplay from "../../components/virtualisedDisplay/test";
import useVirtualDisplay from "../../components/virtualisedDisplay/useVirtualDisplay";
import VirtualSongRow from "../../components/virtualisedDisplay/virtualSongRow";
import VirtualSongRowSkeleton from "../../components/virtualisedDisplay/virtualSongRowSkeleton";
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

  const [observedElement, setObservedElement] = useState(null)

  const observer = useRef(new IntersectionObserver(_.debounce(getLikedSongs, 500)));

  useEffect(() => {
    if (!(observedElement && observer)) {
      return
    }

    observer.current = new IntersectionObserver(_.debounce(getLikedSongs, 500))

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

  const { onScroll, visibleChildren } = useVirtualDisplay({
    children: likedSongs.map((song, index) => {
      if (likedSongs.length >= 50 && index === likedSongs.length - 25) {
        return (
          <VirtualSongRow
            index={index}
            song={song}
            showAlbum={!lessThanMd}
            showDate={!lessThanLg}
            ref={setObservedElement}
          />
        )
      } else {
        return (
          <VirtualSongRow
            index={index}
            song={song}
            showAlbum={!lessThanMd}
            showDate={!lessThanLg}
          />
          )

      }
    }),
    rowHeight: 64,
    skeletonRow: <VirtualSongRowSkeleton showAlbum={!lessThanMd} showDate={!lessThanLg} />,
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
      <TestSongDisplay hasMoreSongs={hasMoreSongs} songs={likedSongs} getSongs={getLikedSongs} totalNumber={totalNumber} visibleChildren={visibleChildren} />
    </Stack>
  )
}

export default LikedSongsPage;