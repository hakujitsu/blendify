/* eslint-disable react/jsx-pascal-case */
import { Box, CircularProgress, Unstable_Grid2 } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import PlaylistCard from "./playlistCard";

const sx = {
  gridContainer: {
    marginLeft: "-8px !important",
    marginRight: "0px !important"
  },
  loadingContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    pt: 2
  }
}

const PlaylistGrid = (props) => {
  const { playlists, hasMorePlaylists, fetchPlaylists } = props

  const [observedElement, setObservedElement] = useState(null)

  const observer = useRef(new IntersectionObserver(fetchPlaylists));

  useEffect(() => {
    if (!(observedElement && observer)) {
      return
    }

    observer.current = new IntersectionObserver(fetchPlaylists)

    const currentObserver = observer.current;
    const rowToObserve = observedElement

    if (hasMorePlaylists) {
      currentObserver.observe(rowToObserve);
    } else {
      currentObserver.unobserve(rowToObserve)
    }
    return () => {
      if (currentObserver && observedElement) {
        currentObserver.unobserve(observedElement);
      }
    };
  }, [fetchPlaylists, observedElement])

  return (
    <Unstable_Grid2 container spacing={2} sx={sx.gridContainer}>
      {playlists.map(p => {
        return (
          <Unstable_Grid2 xs={4} sm={4} md={3} lg={2.4} xl={2} pxxl={1} key={p.id}>
            <PlaylistCard playlist={p} />
          </Unstable_Grid2>
        )
      })}
      {hasMorePlaylists &&
        <Unstable_Grid2 xs={12} key="progress indicator">
          <Box sx={sx.loadingContainer} ref={setObservedElement}>
            <CircularProgress />
          </Box>
        </Unstable_Grid2>
      }
    </Unstable_Grid2>
  )

}

export default PlaylistGrid;