const VirtualWindow = (props) => {
  const { visibleChildren, numberOfItems } = props
  console.log(numberOfItems)

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
