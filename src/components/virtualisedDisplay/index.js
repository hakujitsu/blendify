import useComponentSize from "@rehooks/component-size";
import { throttle } from "lodash";
import React, { useMemo, useRef, useState } from "react";

const bufferedItems = 2;

const VirtualWindow = (props) => {
  const {
    rowHeight,
    children,
    gap = 0,
    isVirtualizationEnabled = true
  } = props
  const ref = useRef(null);
  let dimensions = useComponentSize(ref);
  const [scrollPosition, setScrollPosition] = useState(0);

  // get the children to be rendered
  const visibleChildren = useMemo(() => {
    if (!isVirtualizationEnabled) {
      return children.map((child, index) =>
        React.cloneElement(child, {
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
      Math.floor(scrollPosition / rowHeight) - bufferedItems,
      0
    );
    const endIndex = Math.min(
      Math.ceil((scrollPosition + dimensions.height) / rowHeight - 1) +
      bufferedItems,
      children.length - 1
    );

    return children.slice(startIndex, endIndex + 1).map((child, index) =>
      React.cloneElement(child, {
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
    dimensions.height,
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

  return (
    <tbody
      onScroll={onScroll}
      style={{
        overflowY: "scroll",
        position: "relative",
      }}
      ref={ref}
    >
      {visibleChildren}
    </tbody>
  );
};

export default VirtualWindow;
