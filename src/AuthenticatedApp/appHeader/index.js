import { Box, Stack } from "@mui/material";
import { HEADER_HEIGHT } from "../../styles/layout";
import UserBadge from "./userBadge";

const sx = {
  headerContainer: {
    height: HEADER_HEIGHT,
    display: "flex",
    width: "100%",
    borderBottom: 1,
    borderColor: "background.border",
    justifyContent: "center",
  },
  stack: {
    width: "100%",
    px: 4,
  },
};

const AppHeader = () => {
  return (
    <Box sx={sx.headerContainer}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        sx={sx.stack}
      >
        <Box />
        <UserBadge />
      </Stack>
    </Box>
  );
};

export default AppHeader;
