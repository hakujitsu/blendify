import { Box } from '@mui/material';
import React, { Suspense, useEffect } from 'react';
import { useParams } from "react-router-dom";
import usePlaylist from "../../hooks/data/usePlaylist";
import usePlaylists from '../../hooks/data/usePlaylists';
import { BODY_HEIGHT } from '../../styles/layout';
import LoadingScreen from '../../UnauthenticatedApp/LoadingScreen';

const sx = {
  container: {
    height: BODY_HEIGHT,
  }
}

const PlaylistPage = () => {
  let { playlistId } = useParams();
  const { fetchPlaylists } = usePlaylists();
  const { playlist, fetchPlaylistTracks } = usePlaylist(playlistId);

  const PlaylistDisplay = React.lazy(() => import('./display'));

  const fetchData = async () => {
    await fetchPlaylists()
    await fetchPlaylistTracks()
  }

  useEffect(() => {
    if (!playlist) {
      fetchData()
    } else if (playlist.totalSongs > 0 || playlist.tracks.length === 0) {
      fetchPlaylistTracks()
    }
  }, [playlist])

  return (
    <>
      {playlist && (playlist.totalSongs < 0 || playlist.tracks.length > 0)
        ? <Suspense fallback={<Box sx={sx.container}><LoadingScreen /></Box>}>
          <PlaylistDisplay playlist={playlist} fetchPlaylistTracks={fetchPlaylistTracks} />
        </Suspense>
        : <LoadingScreen />
      }
    </>
  )
}

export default PlaylistPage;