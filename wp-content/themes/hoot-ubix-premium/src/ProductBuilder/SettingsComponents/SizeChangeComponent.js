import { useState, useEffect } from 'react';

const SizeChangeComponent = ({onChangeWindowSize, hasSizeError}) => {
  const [width1, setWidth1] = useState(24);
  const [width2, setWidth2] = useState(0);
  const [height1, setHeight1] = useState(16);
  const [height2, setHeight2] = useState(2);
  const [hasWidthRangeError, setHasWidthRangeError] = useState(false);
  const [hasHeightRangeError, setHasHeightRangeError] = useState(false);
  const [hasMinWidthRangeError, setHasMinWidthRangeError] = useState(false);
  const [hasMinHeightRangeError, setHasMinHeightRangeError] = useState(false);

  useEffect(() => {
    let totalWidth = width1 + width2 / 10;
    let totalHeight = height1 + height2 / 10;
    setHasWidthRangeError(false);
    setHasHeightRangeError(false);
    setHasMinWidthRangeError(false);
    setHasMinHeightRangeError(false);
    hasSizeError(false);
    if (typeof productMaxWidth !== 'undefined' && typeof productMaxHeight !== 'undefined') {
      if (totalWidth > productMaxWidth) {
        setHasWidthRangeError(true);
        hasSizeError(true);
        return;
      }
      if (totalHeight > productMaxHeight) {
        setHasHeightRangeError(true);
        hasSizeError(true);
        return;
      }
    }
    if (typeof productMinWidth !== 'undefined' && typeof productMinHeight !== 'undefined') {
      if (totalWidth < productMinWidth) {
        setHasMinWidthRangeError(true);
        hasSizeError(true);
        return;
      }
      if (totalHeight < productMinHeight) {
        setHasMinHeightRangeError(true);
        hasSizeError(true);
        return;
      }
    }
    hasSizeError(false);
    onChangeWindowSize({width1, width2, height1, height2});
  }, [width1, width2, height1, height2])
  return (
    <div className="product-setting-item-component">
      <label>
        Size 
      </label>
      <div className='size-range'>
        { typeof productMaxWidth !== 'undefined' ? ` (maxWidth: ${productMaxWidth}, maxHeight: ${productMaxHeight})` : ''} <br/>
        { typeof productMinWidth !== 'undefined' ? ` (minWidth: ${productMinWidth}, minHeight: ${productMinHeight})` : ''}
      </div>
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
        { hasHeightRangeError ? <span className='range-error'>Height is bigger than maxHeight.</span> : '' }

        { hasMinWidthRangeError ? <span className='range-error'>Width is less than minWidth.</span> : '' }
        { hasMinHeightRangeError ? <span className='range-error'>Height is less than minHeight.</span> : '' }
      </div>
    </div>
  );
}

export default SizeChangeComponent;