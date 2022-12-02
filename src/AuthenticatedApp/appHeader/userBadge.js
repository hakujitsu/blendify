import { Box, Stack, Typography } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
import UserMenu from "./userMenu";
import { useAuthContext } from "../../hooks/auth/useAuthContext";

const sx = {
  badge: {
    display: "flex",
    justifyContent: "center",
    height: "36px",
    backgroundColor: "background.border",
    borderRadius: 100,
    "&:hover": {
      backgroundColor: "#483063",
    }
  },
  icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    pr: 0.5,
  },
  image: {
    height: "36px",
    width: "36px",
    borderRadius: 100,
  },
  name: {
    fontWeight: "bold"
  },
  stack: {
    width: "100%",
  },
};

const UserBadge = () => {
  const { userDetails } = useAuthContext();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={sx.badge} onClick={handleClick}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={1.5}
          sx={sx.stack}
        >
          <img src={userDetails?.img} alt="profile image" style={sx.image}></img>
          <Typography variant="body2" sx={sx.name}>
            {userDetails?.username}
          </Typography>
          <Box sx={sx.icon}>
            {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </Box>
        </Stack>
      </Box>
      <UserMenu anchorEl={anchorEl} open={open} handleClose={handleClose} />
    </>
  );
};

export default UserBadge;
