import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import usePlaylists from "../../hooks/data/usePlaylists";
import { BODY_HEIGHT, BODY_WIDTH } from "../../styles/layout";
import PlaylistsHeader from "./header";
import PlaylistGrid from "./playlistGrid";

const sx = {
  stack: {
    maxHeight: BODY_HEIGHT,
    maxWidth: BODY_WIDTH,
    overflowY: "auto"
  }
}

const Playlists = () => {
  const [list, setList] = useState([]);
  const { totalNumber, hasMorePlaylists, playlists, fetchPlaylists } = usePlaylists();

  useEffect(() => {
    fetchPlaylists()
  }, [])


  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="stretch"
      spacing={2}
      sx={sx.stack}
    >
      <PlaylistsHeader/>
      <PlaylistGrid playlists={playlists} hasMorePlaylists={hasMorePlaylists} fetchPlaylists={fetchPlaylists}/>
    </Stack>
  );
}

export default Playlists;