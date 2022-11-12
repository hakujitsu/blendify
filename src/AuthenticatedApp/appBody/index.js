import { Box } from "@mui/material"
import { createBrowserRouter, createRoutesFromElements, Navigate, Outlet, Route, RouterProvider } from "react-router-dom";
import LikedSongsPage from "../likedSongs";
import Playlists from "../playlists";

const sx = {
  body: {
    height: `calc(100vh - 84px - 64px)`,
    overflowY: "auto",
  },
}

const playerRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<Playlists />} index />
      <Route path="playlists" element={<Playlists />} />
      <Route path="liked-songs" element={<LikedSongsPage />} />
      <Route path="/callback" element={<Navigate to="/" replace />} />
    </Route>
  )
);

const AppBody = () => {
  return (
    <Box sx={sx.body}>
      <Outlet/>
      {/* <RouterProvider router={playerRouter} /> */}
    </Box>
  )
}

export default AppBody;