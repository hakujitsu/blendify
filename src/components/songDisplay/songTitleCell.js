import { Stack, TableCell, Typography } from "@mui/material";
import { useRef } from "react";
import useComponentSize from "@rehooks/component-size";

const sx = {
  stack: {
    maxWidth: "100%",
  },
}


const SongTitleCell = (props) => {
  const { image, title, artists } = props
  const ref = useRef(null);
  let dimensions = useComponentSize(ref);

  return (
    <TableCell ref={ref}>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
        sx={sx.stack}
      >
        <img src={image} width="48px" height="48px" />
        <Stack
          direction="column"
          justifyContent="center"
          spacing={0.5}
          sx={{ maxWidth: `calc(${dimensions.width}px - 48px - 40px)` }}
        >
          <Typography variant="body1" noWrap>{title}</Typography>
          <Typography variant="body2" noWrap>{artists.map(a => a.name).join(", ")}</Typography>
        </Stack>
      </Stack>
    </TableCell>
  )
}

export default SongTitleCell;