const { render, useState, useEffect } = wp.element;

const PackComponent = ({ cols, layoutOption, windowIndex, pack, packItems }) => {
  return (
    <>
        <img src={packItems[windowIndex % pack]} />
    </>
  )
}
export default PackComponent;