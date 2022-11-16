import { useTheme } from "@emotion/react";
import { Stack, Typography, useMediaQuery } from "@mui/material"

const sx = {
  headerText: {
    fontWeight: 'bold'
  },
  textContainer: {
    pt: 3
  }
}

const PlaylistTitleLabel = (props) => {
  const { title, numOfSongs } = props
  const theme = useTheme();
  const lessThanMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Stack
      direction="column"
      justifyContent="flex-end"
      alignItems="flex-start"
      spacing={1.5}
      sx={sx.textContainer}
    >
      <Typography variant={lessThanMd ? "h3" : "h2"} sx={sx.headerText} >
        {title}
      </Typography>
      <Typography variant="body2"  >
        {numOfSongs} songs
      </Typography>
    </Stack>
  )
}

export default PlaylistTitleLabel;