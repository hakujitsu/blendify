import { Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import SongDisplay from "../../components/songDisplay";
import useLikedSongs from "../../hooks/data/useLikedSongs";

const sx = {
  stack: {
    mx: 4,
    my: 4
  }
}

const LikedSongsPage = () => {
  const { likedSongs, getLikedSongs } = useLikedSongs()

  useEffect(() => {
    getLikedSongs()
  }, [])


  return (
    <Stack sx={sx.stack}>
      <Typography>Liked Songs</Typography>
      <SongDisplay songs={likedSongs}/>
    </Stack>
  )
}

export default LikedSongsPage;