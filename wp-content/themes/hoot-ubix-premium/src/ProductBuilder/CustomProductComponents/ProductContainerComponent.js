import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import Windows from "./Windows";
import VentsComponent from "./VentsComponent";
import WallSettingsComponent from "../WallSettingsComponents/WallSettingsComponent";
import ZoomControlComponent from './ZoomControlComponent';
import { setWindowsGrid } from '../actions/windows-grid';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import { getWindowRowsCols } from '../../helper';

const ProductContainerComponent = ({ colors, premiumColors, hasWindow, hasVents, colorIndex, premiumColorIndex, changeWindowsCount, lockPlacement, customWindowProperties, layoutOption, pack }) => {
  
  const dispatch = useDispatch()

  const [tileIndex, setTileIndex] = useState(0);
  const [scale, setScale] = useState(100);
  const [doorSizeInPixels, setDoorSizeInPixels] = useState({ width: 0, height: 0 });
  const [bgColor, setBgColor] = useState('#CCAC7B');
  const [texturePercent, setTexturePercent] = useState(100);

  const windowsGrid = useSelector((state) => state.windowsGrid)
  const doorSize = useSelector((state) => state.doorSize)

  useEffect(() => {
    let maxWidth = document.getElementById('product-container') ? document.getElementById('product-container').clientWidth  - 60 : 500;
    let pixelWidth = maxWidth;
    const { width, height } = doorSize
    let initWidthInches = doorSettings.initWidth / 2.54;
    let initHeightInches = doorSettings.initHeight / 2.54;
    let percent = 100 / ((width / initWidthInches) * (height / initHeightInches));
    setTexturePercent(percent);
    let pixelHeight = (pixelWidth / width) * height;
    if (pixelHeight > 410) {
      pixelWidth  = maxWidth * (410 / pixelHeight);
      pixelHeight = 410;
    }
    if (pixelWidth > maxWidth) {
      pixelHeight = ( maxWidth / pixelWidth ) * pixelHeight;
      pixelWidth = maxWidth;
    }
    setDoorSizeInPixels({ width: pixelWidth, height: pixelHeight })
    let rectRange = getWindowRowsCols(doorSize);
    console.log('rect range', rectRange)
    dispatch(setWindowsGrid(rectRange))
  }, [doorSize]);

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
            />
            <h3 className='text-center' style={{ textAlign: 'center', marginTop: 0, marginBottom: 10, userSelect: 'none' }}>View From Outside</h3>
            <TransformComponent>
              <div
                id="product-door-wrapper"
                className={`wall-wrapper ${tileIndex == 0 ? 'grid-wall' : (tileIndex == 1 ? 'single-grid-wall' : 'single')}`}
                style={{backgroundColor: bgColor, backgroundSize: `auto ${texturePercent}%` }}
              >
                <div id="outline-door" style={doorSizeInPixels}>
                  <div className="inline-door">
                    <div className="inline-wrapper" style={{ backgroundColor: colorIndex > -1 ? colors[colorIndex] : premiumColors[premiumColorIndex]}}>
                      <Windows/>
                      {(lockPlacement.hasLock === true && lockPlacement.placement == 'outside') && <span className='lock' style={{top: `calc(${(100 / windowsGrid.rows) * Math.floor(windowsGrid.rows / 2)}% - 5px)`}}>
                          <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="8" r="7.5" fill="#C4C4C4" stroke="black"/>
                            <rect x="0.5" y="6.5" width="20" height="4" rx="2" fill="#C4C4C4" stroke="black"/>
                          </svg>
                          </span>}
                      <VentsComponent columns={windowsGrid.cols} hasVents={hasVents} />
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