import { throttle } from "lodash";
import React, { useMemo, useRef, useState } from "react";
import usePlaylistTableHeight from "../../hooks/usePlaylistTableHeight";


const VirtualWindow = (props) => {
  const {
    visibleChildren
  } = props

  return (
    <div
      style={{
        // overflowY: "scroll",
        position: "relative",
        height: "600px"
      }}
      // ref={ref}
    >
      {visibleChildren}
    </div>
  );
};

export default VirtualWindow;
