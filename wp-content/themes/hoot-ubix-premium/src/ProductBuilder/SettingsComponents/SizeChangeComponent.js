import { useState, useEffect, useCallback } from 'react';
import _ from 'lodash';

const SizeChangeComponent = ({onChangeWindowSize, hasSizeError}) => {
  const [width1, setWidth1] = useState(Math.floor(initWidth / 30.48));
  const [width2, setWidth2] = useState(0);
  const [height1, setHeight1] = useState(Math.floor(initHeight / 30.48));
  const [height2, setHeight2] = useState(0);
  const [hasWidthRangeError, setHasWidthRangeError] = useState(false);
  const [hasHeightRangeError, setHasHeightRangeError] = useState(false);
  const [hasMinWidthRangeError, setHasMinWidthRangeError] = useState(false);
  const [hasMinHeightRangeError, setHasMinHeightRangeError] = useState(false);

  const setWindowWidth2ValueDebounced = useCallback(_.debounce(
    setWidth2, 300
  ), []);

  const setWindowHeight2ValueDebounced = useCallback(_.debounce(
    setHeight2, 300
  ), []);


  useEffect(() => {
    let totalWidth = width1 * 12 + width2;
    let totalHeight = height1 * 12 + height2;
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
  }, [width1, width2, height1, height2]);


  const checkValidation = (e, type) => {
    if (e.which >= 48 && e.which <= 57) {
      let newValue = Number(`${e.target.value}${e.which - 48}`);
      let width = 0;
      let height = 0;
      if (type == 1) {
        width = newValue * 12 + width2;
        if (width > productMaxWidth) {
          e.preventDefault();
        }
      } else if (type == 2) {
        if (newValue % 2 == 1) {
          newValue ++;
        }
        width = width1 * 12 + newValue;
        if (width > productMaxWidth) {
          e.preventDefault();
        }
      } else if (type == 3) {
        height = newValue * 12 + height2;
        if (height > productMaxHeight) {
          e.preventDefault();
        }
      } else if (type == 4) {
        height = height1 * 12 + newValue;
        if (height > productMaxHeight) {
          e.preventDefault();
        }
      }

    } else {
      e.preventDefault();
    }
  }

  const changeWidth2Value = (e) => {
    setWidth2(Number(e.target.value));
    let value = e.target.value % 2 == 1 ? (Number(e.target.value) + 1) : Number(e.target.value);
    setWindowWidth2ValueDebounced(value);
  }

  const changeHeight2Value = (e) => {
    setHeight2(Number(e.target.value));
    let value = e.target.value % 2 == 1 ? (Number(e.target.value) + 1) : Number(e.target.value);
    setWindowHeight2ValueDebounced(value);
  }


  return (
    <div className="product-setting-item-component">
      <label>
        Size 
      </label>
      <div className='size-range'>
        { typeof productMaxWidth !== 'undefined'
          ? ` (maxWidth: ${Math.floor(productMaxWidth / 12)}’ ${Math.floor(productMaxWidth % 12)}”, maxHeight: ${Math.floor(productMaxHeight / 12)}’ ${Math.floor(productMaxHeight % 12)}”)`
          : ''} <br/>
        { typeof productMinWidth !== 'undefined'
          ? ` (minWidth: ${Math.floor(productMinWidth / 12)}’ ${Math.floor(productMinWidth % 12)}”, minHeight: ${Math.floor(productMinHeight / 12)}’ ${Math.floor(productMinHeight % 12)}”)`
          : ''}
      </div>
      <div className="size-settings-wrapper">
        <div className="width-wrapper d-flex">
          <span className="label">W</span>
          <div className="d-flex align-items-center input-wrapper">
            <input
              type="number"
              name="width_1"
              value={width1}
              max={Math.floor(productMaxWidth / 12)}
              min={Math.floor(productMinWidth / 12)}
              onKeyPress={(e) => {
                checkValidation(e, 1);
              }}
              onChange={(e) => {
                setWidth1((e.target.value))
              }}></input>
            <span>’</span>
            <input
              type="number"
              step={2}
              name="width_2"
              value={width2}
              onKeyPress={(e) => {
                checkValidation(e, 2);
              }}
              onChange={(e) => changeWidth2Value(e)}
            ></input>
            <span>”</span>
          </div>
        </div>
        <div className="height-wrapper d-flex">
          <span className="label">H</span>
          <div className="d-flex align-items-center input-wrapper">
            <input
              type="number"
              name="height_1"
              value={height1}
              max={Math.floor(productMaxHeight / 12)}
              min={Math.floor(productMinHeight / 12)}
              onKeyPress={(e) => {
                checkValidation(e, 3);
              }}
              onChange={(e) => {
                setHeight1((e.target.value))
              }}></input>
            <span>’</span>
            <input
              type="number"
              name="height_2"
              value={height2}
              onKeyPress={(e) => {
                checkValidation(e, 4);
              }}
              onChange={(e) => changeHeight2Value(e)}
              // onChange={(e) => {
                // setHeight2((e.target.value))
              // }}
            ></input>
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