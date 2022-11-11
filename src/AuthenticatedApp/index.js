import { Box, Stack } from "@mui/material"
import AppHeader from "./appHeader";
import AppDrawer from "./appDrawer";
import AppBody from "./appBody";
import AppFooter from "./appFooter";
import { store } from '../store/index'
import { Provider } from 'react-redux'

const sx = {
  container: {
    display: 'flex',
    width: "100%",
  },
  main: {
    flexGrow: 1,
    bgcolor: 'background.default',
  },
  body: {
    height: "100%",
    marginBottom: "84px",
    backgroundColor: 'background.default',
  },
  stack: {
    height: "100vh",
    minWidth: "800px",
    display: "flex",
    overFlowX: "auto"
  }
}

const AuthenticatedApp = () => {
  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      spacing={0}
      sx={sx.stack}
    >
      <Box sx={sx.container}>
        <AppDrawer />
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="stretch"
          spacing={0}
          sx={sx.main}
        >
          <AppHeader />
          <AppBody />
        </Stack>
      </Box>
      <AppFooter />
    </Stack>
  )
}


const AuthenticatedAppWrapper = () => {
  return (
    <Provider store={store}>
      <AuthenticatedApp />
    </Provider>
  )
}

export default AuthenticatedAppWrapper;