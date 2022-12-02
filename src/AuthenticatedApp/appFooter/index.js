import { Box } from "@mui/material"
import WebPlayback from "../../components/webPlayback";
import { FOOTER_HEIGHT, MIN_WIDTH } from "../../styles/layout";

const sx = {
  footer: {
    width: "100%",
    height: FOOTER_HEIGHT,
    minWidth: MIN_WIDTH,
    backgroundColor: "background.drawer",
    borderTop: 1,
    borderColor: "background.border",
    zIndex: 1000,
  }
}

const AppFooter = () => {
  return (
    <Box sx={sx.footer} >
      <WebPlayback />
    </Box>
  )
}

export default AppFooter;