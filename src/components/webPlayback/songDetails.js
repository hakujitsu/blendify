import { Favorite } from "@mui/icons-material"
import { Stack, Typography } from "@mui/material"

const sx = {
  container: {
    height: "100%"
  },
}

const SongDetails = () => {
  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
      sx={sx.stack}
    >
      <img
        src="https://i.scdn.co/image/ab67616d000048515abcbc640612262854d79ebe"
        width="56px"
        height="56px"
      />
      <Stack
        direction="column"
        justifyContent="center"
        spacing={0.25}
      >
        <Typography variant="body2" noWrap>Pacific</Typography>
        <Typography variant="caption" noWrap>Chase Petra</Typography>
      </Stack>
      <Favorite fontSize="small" />
    </Stack>
  )
}

export default SongDetails