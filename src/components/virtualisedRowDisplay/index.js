const VirtualWindow = (props) => {
  const { visibleChildren, numberOfItems } = props

  return (
    <div
      style={{
        position: "relative",
        height: (Math.max(numberOfItems, visibleChildren.length) * 64) + 'px'
      }}
    >
      {visibleChildren}
    </div>
  );
};

export default VirtualWindow;
