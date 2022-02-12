import { useState } from 'react';

import WindowComponent from "./WindowComponent";
import VentsComponent from "./VentsComponent";
import WallSettingsComponent from "../WallSettingsComponents/WallSettingsComponent";
import ZoomControlComponent from './ZoomControlComponent';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const ProductContainerComponent = ({ hasWindow, hasVents, colorIndex }) => {
  let windows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  let colors = ['#ADA487', '#D1C394', '#9A8333'];
  const [tileIndex, setTileIndex] = useState(0);
  return (
    <div id="product-container">

      <TransformWrapper
        initialScale={1}
        initialPositionX={0}
        initialPositionY={0}
      >
        {({ scale, zoomIn, zoomOut, resetTransform, pan, ...rest }) => (
          <React.Fragment>
            <ZoomControlComponent
              onZoomIn={() => { 
                zoomIn();
                console.log(document.querySelector('.wall-wrapper').getContext('2d'))
              }}
              onZoomOut={() => { zoomOut(); console.log(pan)}}
              scale={scale}
            />
            <TransformComponent>
              <div className={`wall-wrapper ${tileIndex == 0 ? 'grid-wall' : (tileIndex == 1 ? 'single-grid-wall' : 'single')}`}>
                <div className="outline-door">
                  <div className="inline-door">
                    <div className="inline-wrapper" style={{ backgroundColor: colors[colorIndex] }}>
                      <div className="window-wrapper">
                        {
                          windows.map((e, index) => {
                            return <WindowComponent enableWindow={hasWindow} />
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