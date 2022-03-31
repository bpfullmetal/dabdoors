const { render, useState, useEffect } = wp.element;

const PackComponent = ({ cols, layoutOption, windowIndex, pack, packItems, customClassName }) => {
  return (
    <>
        <img src={packItems[windowIndex % pack]} className={`window-layout-img ${customClassName}`} />
    </>
  )
}
export default PackComponent;