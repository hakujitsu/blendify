import { throttle } from "lodash";
import { useMemo, useState } from "react";
import usePlaylistTableHeight from "../../hooks/usePlaylistTableHeight";

const BUFFERED_ITEMS = 5;
const SKELETON_COUNT = 40;

const useVirtualRowDisplay = (props) => {
  const {
    children,
    rowHeight,
    skeletonRow,
  } = props
  const [scrollPosition, setScrollPosition] = useState(0);
  const { playlistTableHeight } = usePlaylistTableHeight()

  // get the children to be rendered
  const visibleChildren = useMemo(() => {
    if (children.length === 0) {
      return []
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

    const skeletonStart = Math.max(0, startIndex - SKELETON_COUNT)
    const skeletonEnd = Math.min(children.length - 1, endIndex + SKELETON_COUNT)

    const skeletonAbove = children.slice(skeletonStart, startIndex).map((_, index) => {
      return (
        <div style={{
          position: "absolute",
          top: (skeletonStart + index) * rowHeight,
          height: rowHeight,
          left: 0,
          right: 0,
          lineHeight: `${rowHeight}px`
        }} key={index + skeletonStart}>
          {skeletonRow}
        </div>
      )
    });

    const visibleComponents = children.slice(startIndex, endIndex + 1).map((child, index) => {
      return (
        <div style={{
          position: "absolute",
          top: (startIndex + index) * rowHeight,
          height: rowHeight,
          left: 0,
          right: 0,
          lineHeight: `${rowHeight}px`
        }} key={index + startIndex}>
          {child}
        </div>
      )
    });

    const skeletonBelow = children.slice(endIndex + 1, skeletonEnd).map((_, index) => {
      return (
        <div style={{
          position: "absolute",
          top: (endIndex + 1 + index) * rowHeight,
          height: rowHeight,
          left: 0,
          right: 0,
          lineHeight: `${rowHeight}px`
        }} key={index + endIndex + 1}>
          {skeletonRow}
        </div>
      )
    });

    return (skeletonAbove.concat(visibleComponents)).concat(skeletonBelow);
  }, [
    children,
    skeletonRow,
    playlistTableHeight,
    rowHeight,
    scrollPosition,
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

export default useVirtualRowDisplay;