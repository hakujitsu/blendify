import { Paper } from "@mui/material"
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

const sx = {
  cardImage: {
    aspectRatio: "1",
    width: "100%"
  },
  placeholder: {
    backgroundColor: "background.border",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    verticalAlign: "middle",
  },
  placeholderIcon: {
    fontSize: "72px",
  },
}

const IconPlaceholder = () => {
  return (
    <Paper sx={[sx.cardImage, sx.placeholder]}>
      <LibraryMusicIcon sx={sx.placeholderIcon} />
    </Paper>
  )
}

export default IconPlaceholder