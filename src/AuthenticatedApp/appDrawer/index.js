import { Box, Stack } from "@mui/material"
import Logo from "./logo";
import DrawerMenu from "./drawerMenu";
import { DRAWER_WIDTH, FOOTER_HEIGHT } from "../../styles/layout";

const sx = {
  drawer: {
    height: `calc(100vh - ${FOOTER_HEIGHT})`,
    width: DRAWER_WIDTH,
    backgroundColor: 'background.drawer',
    borderRight: 1,
    borderColor: 'background.border',
  },
  container: {
    overflowY: "auto",
  },
  logoBox: {
    py: 2,
  }
}

const AppDrawer = () => {
  return (
    <Box sx={sx.drawer}>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
        sx={sx.container}>
        <Box sx={sx.logoBox}>
          <Logo />
        </Box>
        <DrawerMenu />
      </Stack>
    </Box>
  )
}

export default AppDrawer;