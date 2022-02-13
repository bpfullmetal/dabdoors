import { useState } from 'react';

import WindowComponent from "./WindowComponent";
import VentsComponent from "./VentsComponent";
import WallSettingsComponent from "../WallSettingsComponents/WallSettingsComponent";
import ZoomControlComponent from './ZoomControlComponent';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const ProductContainerComponent = ({ windowSize, colors, hasWindow, hasVents, colorIndex, changeWindowsCount }) => {
  let windows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const [tileIndex, setTileIndex] = useState(0);
  const [scale, setScale] = useState(100);
  return (
    <div id="product-container">
      <TransformWrapper
        initialScale={1}
        initialPositionX={0}
        initialPositionY={0}
        doubleClick={{
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
            <TransformComponent>
              <div className={`wall-wrapper ${tileIndex == 0 ? 'grid-wall' : (tileIndex == 1 ? 'single-grid-wall' : 'single')}`}>
                <div className="outline-door">
                  <div className="inline-door">
                    <div className="inline-wrapper" style={{ backgroundColor: colors[colorIndex] }}>
                      <div className="window-wrapper">
                        {
                          windows.map((e, index) => {
                            return <WindowComponent enableWindow={hasWindow} addedWindow={(e) => {
                              changeWindowsCount(e);
                            }}/>
                          })
                        }
                      </div>
                      {hasVents && <VentsComponent />}
                    </div>
                  </div>
                </div>
              </div>
            </TransformComponent>
          </React.Fragment>
        )}

      </TransformWrapper>

      <WallSettingsComponent tileIndex={tileIndex} onChange={(e) => setTileIndex(e)}/>
    </div>
  )
}

export default ProductContainerComponent;