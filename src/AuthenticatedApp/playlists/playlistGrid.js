/* eslint-disable react/jsx-pascal-case */
import { Unstable_Grid2 } from "@mui/material";
import { PLAYLIST_GRID_WIDTH } from "../../styles/layout";
import PlaylistCard from "./playlistCard";

const sx = {
  gridContainer: {
    // width: PLAYLIST_GRID_WIDTH + " !important",
    marginLeft: "-8px !important",
    marginRight: "0px !important"
  },
}

const PlaylistGrid = (props) => {
  const { playlists } = props

  return (
    <Unstable_Grid2 container spacing={2} sx={sx.gridContainer}>
      {playlists.map(p => {
        return (
          <Unstable_Grid2 xs={6} md={4} lg={3} xl={2}>
            <PlaylistCard key={p.id} playlist={p}  />
          </Unstable_Grid2>
        )
      })}
    </Unstable_Grid2>
  )

}

export default PlaylistGrid;