import { Grid } from "@mui/material";
import LikedSongsIcon from "../likedSongs/likedSongsIcon";
import HomePageCards from "./homePageCards";
import PlaylistsIcon from "./playlistsIcon";

const sx = {
  container: {
    my: 4,
    width: "100%"
  },
}

const HomePage = () => {
  return (
    <Grid container sx={sx.container} spacing={2} elevation={10}>
      <Grid item sm={12} md={6}>
        <HomePageCards text="View Liked Songs" icon={<LikedSongsIcon height={72} />} />
      </Grid>
      <Grid item sm={12} md={6}>
        <HomePageCards text="View Playlists" icon={<PlaylistsIcon height={72} />} />
      </Grid>
    </Grid>
  )
}

export default HomePage;