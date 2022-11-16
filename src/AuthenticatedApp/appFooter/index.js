import { Box } from "@mui/material"
import { FOOTER_HEIGHT } from "../../styles/layout";

const sx = {
  footer: {
    width: "100vw",
    height: FOOTER_HEIGHT,
    backgroundColor: "background.drawer",
    borderTop: 1,
    borderColor: "background.border",
    zIndex: 1000,
  }
}

const AppFooter = () => {
  return (
    <Box sx={sx.footer} >
      footer
    </Box>
  )
}

export default AppFooter;