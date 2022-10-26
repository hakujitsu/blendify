import { useTheme } from "@emotion/react";
import { Menu, MenuItem } from "@mui/material";

const sx = {
  menu: {
    mt: 1,
    list: {
      dense: true,
    },
  },
};

const UserMenu = (props) => {
  const { anchorEl, open, handleClose } = props;
  const theme = useTheme();

  const signOut = () => {
    // TODO: implement
  };

  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      PaperProps={{
        style: {
          width: 180,
          backgroundColor: theme.palette.background.drawer,
        },
      }}
      disableAutoFocusItem
      sx={sx.menu}
    >
      <MenuItem dense onClick={signOut}>
        Logout
      </MenuItem>
    </Menu>
  );
};

export default UserMenu;
