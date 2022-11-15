import { throttle } from "lodash";
import { cloneElement, useMemo, useState } from "react";
import usePlaylistTableHeight from "../../hooks/usePlaylistTableHeight";

const BUFFERED_ITEMS = 10;

const useVirtualDisplay = (props) => {
  const {
    isVirtualizationEnabled = true,
    children,
    gap = 0,
    rowHeight,
  } = props
  const [scrollPosition, setScrollPosition] = useState(0);
  const { playlistTableHeight } = usePlaylistTableHeight()


  // get the children to be rendered
  const visibleChildren = useMemo(() => {
    if (children.length === 0) {
      return []
    }
    if (!isVirtualizationEnabled) {
      return children.map((child, index) =>
        cloneElement(child, {
          style: {
            position: "absolute",
            top: index * rowHeight + index * gap,
            height: rowHeight,
            left: 0,
            right: 0,
            lineHeight: `${rowHeight}px`
          }
        })
      );
    }
    const startIndex = Math.max(
      Math.floor(scrollPosition / rowHeight) - BUFFERED_ITEMS,
      0
    );
    const endIndex = Math.min(
      Math.ceil((scrollPosition + playlistTableHeight) / rowHeight - 1) +
      BUFFERED_ITEMS,
      children.length - 1
    );

    return children.slice(startIndex, endIndex + 1).map((child, index) =>
      cloneElement(child, {
        style: {
          position: "absolute",
          top: (startIndex + index) * rowHeight + index * gap,
          height: rowHeight,
          left: 0,
          right: 0,
          lineHeight: `${rowHeight}px`
        }
      })
    );
  }, [
    children,
    playlistTableHeight,
    rowHeight,
    scrollPosition,
    gap,
    isVirtualizationEnabled
  ]);

  const onScroll = useMemo(
    () =>
      throttle(
        function (e) {
          setScrollPosition(e.target.scrollTop);
        },
        50,
        { leading: false }
      ),
    []
  );

  return { onScroll, visibleChildren }
}

export default useVirtualDisplay;