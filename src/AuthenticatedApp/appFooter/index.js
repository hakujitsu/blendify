import { Box } from "@mui/material"

const sx = {
  footer: {
    width: "100%",
    height: "84px",
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