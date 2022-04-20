import { useState, useEffect } from 'react';

import WindowComponent from "./WindowComponent";
import VentsComponent from "./VentsComponent";
import WallSettingsComponent from "../WallSettingsComponents/WallSettingsComponent";
import ZoomControlComponent from './ZoomControlComponent';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import WindowShape1 from "../../assets/img_window_shape_1.png";
import { getWindowRowsCols } from '../../helper';
const ProductContainerComponent = ({ windowSize, colors, premiumColors, hasWindow, hasVents, colorIndex, premiumColorIndex, changeWindowsCount, lockPlacement, customWindowProperties, changeWindowRowsCols, layoutOption, pack }) => {
  const [windows, setWindows] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
  const [tileIndex, setTileIndex] = useState(0);
  const [scale, setScale] = useState(100);
  const [realWidth, setRealWidth] = useState(0);
  const [realHeight, setRealHeight] = useState(0);
  const [bgColor, setBgColor] = useState('#CCAC7B');
  const [perWidth, setPerWidth] = useState(0);
  const [perSize, setPerSize] = useState({
    width: 0,
    height: 0
  })
  const [windowsRectRange, setWindowsRectRange] = useState({
    rows: 4,
    cols: 4
  });

  const [windowsWrapperClass, setWindowsWrapperClass] = useState(''); 

  const [texturePercent, setTexturePercent] = useState(100);

  useEffect(() => {
    let maxWidth = document.getElementById('product-container') ? document.getElementById('product-container').clientWidth  - 60 : 500;
    let width = maxWidth;
    let settingWidth = windowSize.width1 * 12 + windowSize.width2;
    let settingHeight = windowSize.height1 * 12 + windowSize.height2;
    let initWidthInches = initWidth / 2.54;
    let initHeightInches = initHeight / 2.54;
    let percent = 100 / ((settingWidth / initWidthInches) * (settingHeight / initHeightInches));
    setTexturePercent(percent);
    let height = (width / settingWidth) * settingHeight;
    if (height > 410) {
      width  = maxWidth * (410 / height);
      height = 410;
    }
    if (width > maxWidth) {
      height = ( maxWidth / width ) * height;
      width= maxWidth;
    }
    setRealWidth(width);
    setRealHeight(height);
    let rectRange = getWindowRowsCols(windowSize);
    setWindowsRectRange(rectRange);
    changeWindowRowsCols(rectRange);
  }, [windowSize]);

  useEffect(() => {
    let array = [];
    for(let i = 0; i < windowsRectRange.rows * windowsRectRange.cols; i++) {
      array.push(i);
    }
    setWindows(array);
  }, [windowsRectRange]);

  useEffect(() => {
    if (hasWindow === true) {
      if (layoutOption > -1) {
        if (layoutOption < 3) {
          setWindowsWrapperClass(`custom-windows-wrapper williams-${layoutOption}`);
        } else {
          setWindowsWrapperClass('custom-windows-wrapper');
        }
      } else {
        setWindowsWrapperClass('');
      }
    } else {
      setWindowsWrapperClass('');
    }
  }, [layoutOption, windowsRectRange, hasWindow])

  useEffect(() => {
    console.log(realWidth);
    console.log(realWidth - 92);

    let perWidth = ((realWidth - 92) - (10 * (windowsRectRange.cols - 1))) / windowsRectRange.cols;
    let perHeight =  perWidth * 0.6;
    console.log(perHeight * windowsRectRange.rows + (10 * (windowsRectRange.rows - 1)), realHeight - 96);
    if (perHeight * windowsRectRange.rows + (10 * (windowsRectRange.rows - 1)) > realHeight - 96) {
      perHeight = (realHeight - 96 - (10 * (windowsRectRange.rows - 1))) / windowsRectRange.rows;
      perWidth = perHeight / 0.6;
    }
    setPerSize({
      width: perWidth,
      height: perHeight
    })

    // }
  }, [realHeight, realWidth, windowsRectRange]);

  return (
    <div id="product-container">
      <TransformWrapper
        initialScale={1}
        initialPositionX={0}
        initialPositionY={0}
        doubleClick={{
          disabled: true
        }}
        wheel={{
          disabled: true
        }}
        onZoomStop={(ref, event) => {
          setScale(ref.state.scale * 100);
        }}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest}) => (
          <React.Fragment>
            <ZoomControlComponent
              onZoomIn={() => { zoomIn(0.5, 200); setScale(scale * 1.5)}}
              onZoomOut={() => { zoomOut(0.5, 200); scale != 100 && setScale((scale / 1.5 < 100) ? 100 : scale / 1.5) }}
              scale={scale}
              windowSize={windowSize}
            />
            <h3 className='text-center' style={{ textAlign: 'center', marginTop: 0 }}>View From Outside</h3>
            <TransformComponent>
              <div
                className={`wall-wrapper ${tileIndex == 0 ? 'grid-wall' : (tileIndex == 1 ? 'single-grid-wall' : 'single')}`}
                style={{backgroundColor: bgColor, backgroundSize: `auto ${texturePercent}%` }}
              >
                <div className="outline-door" style={{width: realWidth, height: realHeight}}>
                  <div className="inline-door">
                    <div className="inline-wrapper" style={{ backgroundColor: colorIndex > -1 ? colors[colorIndex] : premiumColors[premiumColorIndex]}}>
                      <div className={`window-wrapper ${windowsWrapperClass} wrapper-${pack}`} style={{ gridTemplateColumns: `repeat(${windowsRectRange.cols}, 1fr)` }}>
                        {
                          windows.map((e, index) => {
                            return <WindowComponent
                              perSize={perSize}
                              windowIndex={index}
                              enableWindow={hasWindow}
                              layoutOption={layoutOption}
                              cols={windowsRectRange.cols}
                              customWindowProperties={customWindowProperties}
                              addedWindow={(e) => {
                                changeWindowsCount(e, index);
                              }}
                              isAvailableForCustomWindow={index < windowsRectRange.cols}
                            />
                          })
                        }
                        {(lockPlacement.hasLock === true && lockPlacement.placement == 'outside') && <span className='lock' style={{top: `calc(${(100 / windowsRectRange.rows) * Math.floor(windowsRectRange.rows / 2)}% - 5px)`}}>
                          <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="8" r="7.5" fill="#C4C4C4" stroke="black"/>
                            <rect x="0.5" y="6.5" width="20" height="4" rx="2" fill="#C4C4C4" stroke="black"/>
                          </svg>
                          </span>}
                      </div>
                      <VentsComponent columns={windowsRectRange.cols} hasVents={hasVents} />
                    </div>
                  </div>
                </div>
              </div>
            </TransformComponent>
          </React.Fragment>
        )}

      </TransformWrapper>

      <WallSettingsComponent tileIndex={tileIndex} onChange={(e) => setTileIndex(e)} onWallBgColorChange={(c) => setBgColor(c)}/>
    </div>
  )
}

export default ProductContainerComponent;