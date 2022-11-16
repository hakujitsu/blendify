import { Stack, Typography } from "@mui/material"

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

  return (
    <Stack
      direction="column"
      justifyContent="flex-end"
      alignItems="flex-start"
      spacing={1.5}
      sx={sx.textContainer}
    >
      <Typography variant="h2" sx={sx.headerText} >
        {title}
      </Typography>
      <Typography variant="body2"  >
        {numOfSongs} songs
      </Typography>
    </Stack>
  )
}

export default PlaylistTitleLabel;