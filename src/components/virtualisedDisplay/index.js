const VirtualWindow = (props) => {
  const { visibleChildren, numberOfItems } = props

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
