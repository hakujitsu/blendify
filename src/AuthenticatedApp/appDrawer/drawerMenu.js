import { Box, ListItemIcon, ListItemText, MenuItem, MenuList, Typography } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AlbumIcon from '@mui/icons-material/Album';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';


const sx = {
  menuText: {
    ml: 1,
    // fontWeight: "bold"
  },
  menuItem: {
    py: 1.5,
    mx: 1,
  }
}

const MENU_ITEMS = [
  {
    icon: <HomeIcon fontSize="medium" />,
    text: "Home"
  },
  {
    icon: <FavoriteIcon fontSize="medium" />,
    text: "Liked Songs"
  }, {
    icon: <LibraryMusicIcon fontSize="medium" />,
    text: "Playlists"
  },
  // {
  //   icon: <AlbumIcon fontSize="medium" />,
  //   text: "Album"
  // }, {
  //   icon: <PeopleAltIcon fontSize="medium" />,
  //   text: "Artists"
  // }
]

const DrawerMenu = () => {
  return (
    <MenuList sx={{ width: '100%' }}>
      {MENU_ITEMS.map(item => (
        <MenuItem key={item.text} sx={sx.menuItem}>
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