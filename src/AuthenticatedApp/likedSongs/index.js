import { Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import SongDisplay from "../../components/songDisplay";
import useLikedSongs from "../../hooks/data/useLikedSongs";

const sx = {
  stack: {
    mx: 4,
    my: 4,
    maxWidth: "100%",
  }
}

const LikedSongsPage = () => {
  const { hasMoreSongs, likedSongs, getLikedSongs, totalNumber } = useLikedSongs()

  useEffect(() => {
    getLikedSongs()
  }, [])


  return (
    <Stack sx={sx.stack}>
      <Typography>Liked Songs</Typography>
      <SongDisplay hasMoreSongs={hasMoreSongs} songs={likedSongs} getSongs={getLikedSongs} totalNumber={totalNumber}/>
    </Stack>
  )
}

export default LikedSongsPage;