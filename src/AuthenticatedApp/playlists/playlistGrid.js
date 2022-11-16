/* eslint-disable react/jsx-pascal-case */
import { Unstable_Grid2 } from "@mui/material";
import PlaylistCard from "./playlistCard";

const sx = {
  gridContainer: {
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
          <Unstable_Grid2 xs={4} sm={4} md={3} lg={2.4} xl={2} pxxl={1}>
            <PlaylistCard key={p.id} playlist={p}  />
          </Unstable_Grid2>
        )
      })}
    </Unstable_Grid2>
  )

}

export default PlaylistGrid;