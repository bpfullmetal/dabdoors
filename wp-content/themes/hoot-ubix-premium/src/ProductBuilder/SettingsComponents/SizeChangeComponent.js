import { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setDoorSize } from '../actions/door-size';
import _ from 'lodash';

const SizeChangeComponent = ({onChangeWindowSize, hasSizeError}) => {
  const dispatch = useDispatch()

  const { productMinWidth, productMaxWidth, productMinHeight, productMaxHeight, initWidth, initHeight } = doorSettings
  const doorSize = useSelector( state => state.doorSize)
  const additionalCost = useSelector( state => state.additionalCost )

  const [feetWidth, setFeetWidth] = useState(Math.floor(doorSize.width / 12));
  const [inchesWidth, setInchesWidth] = useState(doorSize.width % 12);
  const [feetHeight, setFeetHeight] = useState(Math.floor(doorSize.height / 12));
  const [inchesHeight, setInchesHeight] = useState(doorSize.height % 12);
  const [hasWidthRangeError, setHasWidthRangeError] = useState(false);
  const [hasHeightRangeError, setHasHeightRangeError] = useState(false);
  const [hasMinWidthRangeError, setHasMinWidthRangeError] = useState(false);
  const [hasMinHeightRangeError, setHasMinHeightRangeError] = useState(false);


  useEffect(() => {
    let totalWidth = feetWidth * 12 + inchesWidth;
    let totalHeight = feetHeight * 12 + inchesHeight;
    console.log(totalHeight)
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
    const width = (feetWidth * 12) + inchesWidth
    const height = (feetHeight * 12) + inchesHeight
    console.log('use effect', width, height)
    dispatch(setDoorSize({ width, height }));
  }, [feetWidth, inchesWidth, feetHeight, inchesHeight]);


  const checkValidation = (e, type) => {
    if (e.which >= 48 && e.which <= 57) {
      let newValue = Number(`${e.target.value}${e.which - 48}`);
      let width = 0;
      let height = 0;
      console.log(newValue)
      if (type == 1) {
        width = newValue * 12 + inchesWidth;
        if (width > productMaxWidth) {
          e.preventDefault();
        }
      } else if (type == 2) {
        if (newValue > 12) {
          e.preventDefault();
        }
        if (newValue % 2 == 1) {
          newValue ++;
        }
        width = feetWidth * 12 + newValue;
        if (width > productMaxWidth) {
          e.preventDefault();
        }
      } else if (type == 3) {
        height = newValue * 12 + inchesHeight;
        if (height > productMaxHeight) {
          e.preventDefault();
        }
      } else if (type == 4) {
        if (newValue > 12) {
          e.preventDefault();
        }
        height = feetHeight * 12 + newValue;
        if (height > productMaxHeight) {
          e.preventDefault();
        }
      }

    } else {
      e.preventDefault();
    }
  }

  const changeInchesWidth = (e) => {
    setInchesWidth(Number(e.target.value));
  }

  const changeInchesHeight = (e) => {
    setInchesHeight(Number(e.target.value));
  }

  
  return (
    <div className="product-setting-item-component">
      <label>
          Size
        { additionalCost.doorSize > 0 && <span className="additional_price_alert">{`+$${additionalCost.doorSize}`}</span> }
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
              value={Math.floor(doorSize.width / 12)}
              max={Math.floor(productMaxWidth / 12)}
              min={Math.floor(productMinWidth / 12)}
              onKeyPress={(e) => {
                checkValidation(e, 1);
              }}
              onChange={(e) => {
                setFeetWidth((e.target.value))
              }}></input>
            <span>’</span>
            <input
              type="number"
              step={2}
              name="width_2"
              value={doorSize.width % 12}
              max={12}
              min={0}
              onKeyPress={(e) => {
                checkValidation(e, 2);
              }}
              onChange={(e) => changeInchesWidth(e)}
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
              value={Math.floor(doorSize.height / 12)}
              max={Math.floor(productMaxHeight / 12)}
              min={Math.floor(productMinHeight / 12)}
              onKeyPress={(e) => {
                checkValidation(e, 3);
              }}
              onChange={(e) => {
                setFeetHeight((e.target.value))
              }}></input>
            <span>’</span>
            <input
              type="number"
              name="height_2"
              value={doorSize.height % 12}
              onKeyPress={(e) => {
                checkValidation(e, 4);
              }}
              max={12}
              min={0}
              onChange={(e) => changeInchesHeight(e)}
              // onChange={(e) => {
                // setInchesHeight((e.target.value))
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