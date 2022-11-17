import { Box } from "@mui/material"
import { Outlet } from "react-router-dom";
import { FOOTER_HEIGHT, HEADER_HEIGHT } from "../../styles/layout";

const sx = {
  body: {
    height: `calc(100vh - ${HEADER_HEIGHT} -${FOOTER_HEIGHT})`,
    overflowY: "auto",
    m: 4
  },
}

const AppBody = () => {
  return (
    <Box sx={sx.body}>
      <Outlet />
    </Box>
  )
}

export default AppBody;