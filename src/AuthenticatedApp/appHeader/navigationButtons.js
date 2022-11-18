import { IconButton, Stack } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useEffect, useRef } from "react";
import useHistory from "../../hooks/useHistory";

const sx = {
  container: {
    height: "100%"
  },
}

// TODO: check whether there is history in either direction to pop
const NavigationButtons = () => {
  const {
    canNavigateBack,
    canNavigateForward,
    navigateBack,
    navigateForward,
  } = useHistory()


  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={4}
      sx={sx.container}
    >
      <IconButton variant="contained" size="small" disabled={!canNavigateBack} sx={sx.button} onClick={navigateBack}>
        <ArrowBackIosNewIcon size="small" />
      </IconButton>
      <IconButton variant="contained" size="small" disabled={!canNavigateForward} sx={sx.button} onClick={navigateForward}>
        <ArrowForwardIosIcon size="small" />
      </IconButton>
    </Stack>
  )
}

export default NavigationButtons;