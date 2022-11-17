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
  const lessThanLg = useMediaQuery(theme.breakpoints.down("lg"));
  const lessThanMd = useMediaQuery(theme.breakpoints.down("md"));

  const titleVariant = lessThanLg ? (lessThanMd ? "h4" : "h3"): "h2" 

  return (
    <Stack
      direction="column"
      justifyContent="flex-end"
      alignItems="flex-start"
      spacing={1.5}
      sx={sx.textContainer}
    >
      <Typography variant={titleVariant} sx={sx.headerText} >
        {title}
      </Typography>
      <Typography variant="body2"  >
        {numOfSongs} songs
      </Typography>
    </Stack>
  )
}

export default PlaylistTitleLabel;