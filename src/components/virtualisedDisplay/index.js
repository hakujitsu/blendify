import usePlaylistTableHeight from "../../hooks/usePlaylistTableHeight";


const VirtualWindow = (props) => {
  const { visibleChildren, numberOfItems } = props
  // const { playlistTableHeight } = usePlaylistTableHeight()

  return (
    <div
      style={{
        position: "relative",
        height: (numberOfItems * 64) + 'px'
      }}
    >
      {visibleChildren}
    </div>
  );
};

export default VirtualWindow;
