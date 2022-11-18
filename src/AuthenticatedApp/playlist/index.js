import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import { Stack } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import PlaylistLabel from "../../components/playlistLabel";
import PlaylistTable from "../../components/playlistSongTable";
import SongRowSkeleton from "../../components/playlistSongTable/songRowSkeleton";
import useGenerateRows from "../../components/playlistSongTable/useGenerateRows";
import useVirtualRowDisplay from "../../components/virtualisedRowDisplay/useVirtualRowDisplay";
import usePlaylist from "../../hooks/data/usePlaylist";
import playlists from "../../store/slices/playlists";
import { BODY_HEIGHT, BODY_WIDTH } from "../../styles/layout";

const sx = {
  stack: {
    height: BODY_HEIGHT,
    maxWidth: BODY_WIDTH,
    overflowY: "auto"
  }
}

const PlaylistPage = () => {
  let { playlistId } = useParams();
  const { playlist, fetchPlaylistTracks } = usePlaylist(playlistId);
  const theme = useTheme();
  const lessThanLg = useMediaQuery(theme.breakpoints.down('lg'));
  const lessThanMd = useMediaQuery(theme.breakpoints.down('md'));

  const [observedElement, setObservedElement] = useState(null)

  const observer = useRef(new IntersectionObserver(fetchPlaylistTracks));

  useEffect(() => {
    if (!(observedElement && observer)) {
      return
    }

    observer.current = new IntersectionObserver(fetchPlaylistTracks)

    const currentObserver = observer.current;
    const rowToObserve = observedElement

    if (playlist.hasMoreSongs) {
      currentObserver.observe(rowToObserve);
    } else {
      currentObserver.unobserve(rowToObserve)
    }
    return () => {
      if (currentObserver && observedElement) {
        currentObserver.unobserve(observedElement);
      }
    };
  }, [fetchPlaylistTracks, observedElement])

  const { onScroll, visibleChildren } = useVirtualRowDisplay({
    children: useGenerateRows({
      songs: playlist.tracks, showAlbum: !lessThanMd, showDate: !lessThanLg,
      setObservedElement, hasMoreSongs: playlist.hasMoreSongs, totalNumber: playlist.totalSongs
    }),
    rowHeight: 64,
    skeletonRow: <SongRowSkeleton showAlbum={!lessThanMd} showDate={!lessThanLg} />,
  })

  useEffect(() => {
    fetchPlaylistTracks()
  })

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
        title={playlist.title}
        numOfSongs={playlist.totalSongs}
        img={playlist.images.length > 0
          ? (playlist.images.length === 1 ? playlist.images[0].url : playlist.images.at(-2).url)
          : ""
        }
      />
      <PlaylistTable
        hasMoreSongs={playlist.hasMoreSongs}
        songs={playlist.tracks}
        getSongs={fetchPlaylistTracks}
        totalNumber={playlist.totalSongs}
        visibleChildren={visibleChildren}
      />
    </Stack>
  )
}

export default PlaylistPage;