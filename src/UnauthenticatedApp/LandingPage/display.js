import { Box, Button, Container, Link, Stack, Typography, useMediaQuery } from "@mui/material";
import { ReactComponent as DisplayImage } from './music-equalizer.svg';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID || "";
const CALLBACK_URL = process.env.REACT_APP_CALLBACK_URL || "http://localhost:3000/callback"

const sx = {
  container: {
    height: "100vh",
    width: "100vw",
    // display: "flex",
    // alignItem: "flex-start",
    // justifyContent: "space-between",
    pt: 8,
  },
  logo: {
    fontFamily: "Comfortaa",
  },
  leftTextContainer: {
    // height: "630px",
    ml: 12,
  },
  bottomTextContainer: {

  }
}

const LandingPageDisplay = () => {
  const isBiggerThanLg = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  const generateQueryString = () => {
    const params = new URLSearchParams({
      response_type: "code",
      client_id: CLIENT_ID,
      scope: "user-read-private user-read-email user-library-read user-read-playback-state playlist-read-private streaming",
      redirect_uri: CALLBACK_URL,
      state: "1234123412341234", // TODO: add some state here
      show_dialog: "true",
    });
    return params;
  };


  return (
    <Container maxWidth="xl" sx={sx.container}>
      <Stack
        direction={isBiggerThanLg ? "row" : "column-reverse"}
        justifyContent={isBiggerThanLg ? "space-between" : "flex-end"}
        alignItems="center"
        spacing={isBiggerThanLg ? 8 : 2}
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems={isBiggerThanLg ? "flex-start" : "center"}
          spacing={2}
          sx={isBiggerThanLg ? sx.leftTextContainer : sx.bottomTextContainer}
        >
          <Typography variant="h2" sx={sx.logo}>
            blendify
          </Typography>
          <Typography variant="h6" sx={sx.logo}>
            all your music in one place
          </Typography>
          <Button variant="contained" href={"https://accounts.spotify.com/authorize?" + generateQueryString()}>
            <Typography variant="button" display="block" >
              Sign in with Spotify
            </Typography>
          </Button>
        </Stack>
        <Box>
          <DisplayImage width={isBiggerThanLg ? "840px" : "640px"} />
        </Box>
      </Stack>
    </Container>
  )
}

export default LandingPageDisplay