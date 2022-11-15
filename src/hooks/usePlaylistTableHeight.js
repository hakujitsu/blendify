import useWindowDimensions from "./useWindowDimensions";

const usePlaylistTableHeight = () => {
  const { height: windowHeight } = useWindowDimensions()

  const playlistTableHeight = (windowHeight - 64 - 84 - 64 - 168)

  return { playlistTableHeight }
}

export default usePlaylistTableHeight;