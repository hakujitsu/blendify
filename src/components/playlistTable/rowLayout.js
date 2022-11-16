import { Box, Stack } from "@mui/material";
import { useRef } from "react";
import useComponentSize from "@rehooks/component-size";

const INDEX_WIDTH = "60px";
const LIKED_WIDTH = "30px";
const DURATION_WIDTH = "80px";

const sx = {
  stack: {
    maxWidth: "100%",
    borderRadius: "16px",
  },
  hoverStyles: {
    height: "64px",
    "&:hover": {
      backgroundColor: '#2b1743'
    }
  },
  cell: {
    px: 2
  },
  indexCell: {
    width: INDEX_WIDTH
  },
  titleColumn: (width, showAlbum, showDate) => {
    return showDate
      ? { width: calculateWidth(0.45, width) }
      : (showAlbum
        ? { width: calculateWidth(0.6, width) }
        : { width: calculateWidth(1, width) });
  },
  albumColumn: (width, showDate) => {
    return showDate
      ? { width: calculateWidth(0.35, width) }
      : { width: calculateWidth(0.4, width) }
  },
  dateColumn: (width) => {
    return { width: calculateWidth(0.2, width) }
  },
  likedCell: {
    width: LIKED_WIDTH
  },
  durationCell: {
    width: DURATION_WIDTH,
  },
  durationText: {
    pr: 2
  }
}

const calculateWidth = (percentage, width) => {
  const totalWidth = width - 170
  return "" + (percentage * totalWidth) + "px";
}

const RowLayout = (props) => {
  const {
    indexContent,
    titleContent,
    albumContent,
    dateContent,
    likedContent,
    durationContent,
    showAlbum,
    showDate,
    isTitle = false,
    style = {}
  } = props;
  const ref = useRef(null);
  let dimensions = useComponentSize(ref);

  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={0}
      style={style}
      sx={[sx.stack, isTitle ? {} : sx.hoverStyles]}
      ref={ref}
    >
      <Box sx={[sx.indexCell, sx.cell]}>
        {indexContent}
      </Box>
      <Box sx={[sx.titleColumn(dimensions.width, showAlbum, showDate), sx.cell]}>
        {titleContent}
      </Box>
      {showAlbum &&
        <Box sx={[sx.albumColumn(dimensions.width, showDate), sx.cell]}>
          {albumContent}
        </Box>
      }
      {showDate &&
        <Box sx={[sx.dateColumn(dimensions.width), sx.cell]}>
          {dateContent}
        </Box>
      }
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={[sx.likedCell, sx.cell]}
      >
        {likedContent}
      </Box>
      <Box sx={[sx.durationCell, sx.cell]}>
        {durationContent}
      </Box>
    </Stack>
  )
}

export default RowLayout