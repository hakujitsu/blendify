import { Grid } from "@mui/material";
import useHistory from "../../hooks/useHistory";
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
  const {navigateTo } = useHistory()
  return (
    <Grid container sx={sx.container} spacing={2} elevation={10}>
      <Grid item sm={12} md={6}>
        <HomePageCards
          text="View Liked Songs"
          icon={<LikedSongsIcon height={72} />}
          onClick={() => navigateTo("/liked-songs")}
        />
      </Grid>
      <Grid item sm={12} md={6}>
        <HomePageCards
          text="View Playlists"
          icon={<PlaylistsIcon height={72} />}
          onClick={() => navigateTo("/playlists")}
        />
      </Grid>
    </Grid>
  )
}

export default HomePage;