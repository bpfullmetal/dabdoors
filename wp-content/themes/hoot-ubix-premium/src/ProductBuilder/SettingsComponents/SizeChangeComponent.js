import { useState, useEffect } from 'react';

const SizeChangeComponent = ({onChangeWindowSize}) => {
  const [width1, setWidth1] = useState(24);
  const [width2, setWidth2] = useState(0);
  const [height1, setHeight1] = useState(16);
  const [height2, setHeight2] = useState(2);
  const [hasWidthRangeError, setHasWidthRangeError] = useState(false);
  const [hasHeightRangeError, setHasHeightRangeError] = useState(false);

  useEffect(() => {
    let totalWidth = width1 + width2 / 10;
    let totalHeight = height1 + height2 / 10;
    setHasWidthRangeError(false);
    setHasHeightRangeError(false);

    if (maxWidth && maxHeight) {
      if (totalWidth > maxWidth) {
        setHasWidthRangeError(true);
      }
      if (totalHeight > maxHeight) {
        setHasHeightRangeError(true);
      }
      if (maxWidth > totalWidth && maxHeight > totalHeight) {
        onChangeWindowSize({width1, width2, height1, height2});
      }
    } else {
      onChangeWindowSize({width1, width2, height1, height2});
    }
  }, [width1, width2, height1, height2])
  return (
    <div className="product-setting-item-component">
      <label>
        Size { maxWidth ? ` (maxWidth: ${maxWidth}, maxHeight: ${maxHeight})` : ''}
      </label>
      <div className="size-settings-wrapper">
        <div className="width-wrapper d-flex">
          <span className="label">W</span>
          <div className="d-flex align-items-center input-wrapper">
            <input type="number" name="width_1" value={width1} onChange={(e) => {
              setWidth1(Number(e.target.value))
            }}></input>
            <span>’</span>
            <input type="number" name="width_2" value={width2} onChange={(e) => {
              setWidth2(Number(e.target.value))
            }}></input>
            <span>”</span>
          </div>
        </div>
        <div className="height-wrapper d-flex">
          <span className="label">H</span>
          <div className="d-flex align-items-center input-wrapper">
            <input type="number" name="height_1" value={height1} onChange={(e) => {
              setHeight1(Number(e.target.value))
            }}></input>
            <span>’</span>
            <input type="number" name="height_2" value={height2} onChange={(e) => {
              setHeight2(Number(e.target.value))
            }}></input>
            <span>”</span>
          </div>
        </div>
        { hasWidthRangeError ? <span className='range-error'>Width is bigger than maxWidth.</span> : '' }
        { hasHeightRangeError ? <span className='range-error'>Height is bigger than maxWidth.</span> : '' }
      </div>
    </div>
  );
}

export default SizeChangeComponent;