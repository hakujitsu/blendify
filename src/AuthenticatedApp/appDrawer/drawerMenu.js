import { Box, ListItemIcon, ListItemText, MenuItem, MenuList, Typography } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AlbumIcon from '@mui/icons-material/Album';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { useNavigate } from "react-router-dom";
import useHistory from "../../hooks/useHistory";


const sx = {
  menuText: {
    ml: 1,
    // fontWeight: "bold"
  },
  menuItem: {
    py: 1.5,
    mx: 1,
    borderRadius: "16px",
  }
}

const MENU_ITEMS = [
  {
    icon: <HomeIcon fontSize="medium" />,
    text: "Home",
    route: "/"
  },
  {
    icon: <FavoriteIcon fontSize="medium" />,
    text: "Liked Songs",
    route: "/liked-songs"
  }, {
    icon: <LibraryMusicIcon fontSize="medium" />,
    text: "Playlists",
    route: "/playlists"
  },
  // {
  //   icon: <AlbumIcon fontSize="medium" />,
  //   text: "Albums"
  // }, {
  //   icon: <PeopleAltIcon fontSize="medium" />,
  //   text: "Artists"
  // }
]

const DrawerMenu = () => {
  const { navigateTo } = useHistory();

  return (
    <MenuList sx={{ width: '100%' }}>
      {MENU_ITEMS.map(item => (
        <MenuItem key={item.text} sx={sx.menuItem}
          onClick={() => navigateTo(item.route)}
        >
          <ListItemIcon>
            {item.icon}
          </ListItemIcon>
          <Typography variant="body1" sx={sx.menuText}>{item.text}</Typography>
        </MenuItem>
      ))}
    </MenuList>
  )
}

export default DrawerMenu