import { BODY_MARGIN, FOOTER_HEIGHT, HEADER_HEIGHT } from "../styles/layout";
import useWindowDimensions from "./useWindowDimensions";

const getNumericalValue = (height) => {
  return parseInt(height.slice(0, -2))
}

const usePlaylistTableHeight = () => {
  const { height: windowHeight } = useWindowDimensions()

  const playlistTableHeight = windowHeight - getNumericalValue(HEADER_HEIGHT)
    - getNumericalValue(FOOTER_HEIGHT) - getNumericalValue(BODY_MARGIN) - 50

  return { playlistTableHeight }
}

export default usePlaylistTableHeight;