const { render, useState, useEffect } = wp.element;
import WilliamBurg8_1 from "../../assets/WilliamBurg/Column8/row-1-column-1.png";
import WilliamBurg8_2 from "../../assets/WilliamBurg/Column8/row-1-column-2.png";
import WilliamBurg8_3 from "../../assets/WilliamBurg/Column8/row-1-column-3.png";
import WilliamBurg8_4 from "../../assets/WilliamBurg/Column8/row-1-column-4.png";
import WilliamBurg8_5 from "../../assets/WilliamBurg/Column8/row-1-column-5.png";
import WilliamBurg8_6 from "../../assets/WilliamBurg/Column8/row-1-column-6.png";
import WilliamBurg8_7 from "../../assets/WilliamBurg/Column8/row-1-column-7.png";
import WilliamBurg8_8 from "../../assets/WilliamBurg/Column8/row-1-column-8.png";

import WilliamBurg7_1 from "../../assets/WilliamBurg/Column7/row-1-column-1.png";
import WilliamBurg7_2 from "../../assets/WilliamBurg/Column7/row-1-column-2.png";
import WilliamBurg7_3 from "../../assets/WilliamBurg/Column7/row-1-column-3.png";
import WilliamBurg7_4 from "../../assets/WilliamBurg/Column7/row-1-column-4.png";
import WilliamBurg7_5 from "../../assets/WilliamBurg/Column7/row-1-column-5.png";
import WilliamBurg7_6 from "../../assets/WilliamBurg/Column7/row-1-column-6.png";
import WilliamBurg7_7 from "../../assets/WilliamBurg/Column7/row-1-column-7.png";

import WilliamBurg5_1 from "../../assets/WilliamBurg/Column5/row-1-column-1.png";
import WilliamBurg5_2 from "../../assets/WilliamBurg/Column5/row-1-column-2.png";
import WilliamBurg5_3 from "../../assets/WilliamBurg/Column5/row-1-column-3.png";
import WilliamBurg5_4 from "../../assets/WilliamBurg/Column5/row-1-column-4.png";
import WilliamBurg5_5 from "../../assets/WilliamBurg/Column5/row-1-column-5.png";

import WilliamBurg_305_1 from "../../assets/WilliamBurg-305/row-1-column-1.png";
import WilliamBurg_305_2 from "../../assets/WilliamBurg-305/row-1-column-2.png";
import WilliamBurg_305_3 from "../../assets/WilliamBurg-305/row-1-column-3.png";
import WilliamBurg_305_4 from "../../assets/WilliamBurg-305/row-1-column-4.png";

import Winstone_1 from "../../assets/Winston/row-1-column-1.png";
import Winstone_2 from "../../assets/Winston/row-1-column-2.png";

import SherWood_1 from "../../assets/Sherwood/row-1-column-1.png";
import SherWood_2 from "../../assets/Sherwood/row-1-column-2.png";

import Stockton from "../../assets/Stockton/stockton-tile.png";


const WindowComponent = ({ enableWindow, addedWindow, windowIndex, layoutOption, cols }) => {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (layoutOption == 0) {
      if (cols == 8 || cols == 7 || cols == 5) {
        if (windowIndex < cols) {
          setHasWindow(true);
        }
      }
    } else if (layoutOption == 1 || layoutOption == 2 || layoutOption == 3 || layoutOption == 4) {
      if (cols == 8 || cols == 4) {
        if (windowIndex < cols) {
          setHasWindow(true);
        }
      }
    } else {
      setHasWindow(false);
    }
  
  }, [windowIndex, layoutOption])

  return (
    <div className={`window-item item-${windowIndex} ${hasWindow ? 'active-window' : 'no-window'} ${enableWindow ? '' : 'disableWindow'}`}>
      {
        hasWindow == false && <span className="btn btn-add" onClick={(e) => { 
          console.log(enableWindow);
          if (enableWindow === true) {
            setHasWindow(true);
            addedWindow(true);
          }
        }}>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.15625 6.34375V0H6.34375V6.34375H0V8.15625H6.34375V14.5H8.15625V8.15625H14.5V6.34375H8.15625Z" fill="#1D1E1D"/>
          </svg>
        </span>
      }
      {
        ((hasWindow == true && windowIndex > cols && layoutOption != -1) || (hasWindow == true && layoutOption == -1)) && <span className="btn btn-remove" onClick={(e) => {
          if (enableWindow === true) {
            setHasWindow(false); addedWindow(false);
          }
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.1973 10.3435L14.1973 17.0883" stroke="#C83939" stroke-width="1.92708" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.3438 10.3435L10.3438 17.0883" stroke="#C83939" stroke-width="1.92708" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18.0518 6.48926H6.48926V19.9788C6.48926 20.511 6.92065 20.9424 7.4528 20.9424H17.0882C17.6204 20.9424 18.0518 20.511 18.0518 19.9788V6.48926Z" stroke="#C83939" stroke-width="1.92708" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.5625 6.48926H19.9792" stroke="#C83939" stroke-width="1.92708" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.1608 3.59863H9.37956C8.84741 3.59863 8.41602 4.03003 8.41602 4.56217V6.48926H16.1243V4.56217C16.1243 4.03003 15.693 3.59863 15.1608 3.59863Z" stroke="#C83939" stroke-width="1.92708" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      }
      { hasWindow == true && cols == 8 && layoutOption == 0 && windowIndex == 0 && <img src={WilliamBurg8_1} className="window-layout-img" />}
      { hasWindow == true && cols == 8 && layoutOption == 0 && windowIndex == 1 && <img src={WilliamBurg8_2} className="window-layout-img" />}
      { hasWindow == true && cols == 8 && layoutOption == 0 && windowIndex == 2 && <img src={WilliamBurg8_3} className="window-layout-img" />}
      { hasWindow == true && cols == 8 && layoutOption == 0 && windowIndex == 3 && <img src={WilliamBurg8_4} className="window-layout-img" />}
      { hasWindow == true && cols == 8 && layoutOption == 0 && windowIndex == 4 && <img src={WilliamBurg8_5} className="window-layout-img" />}
      { hasWindow == true && cols == 8 && layoutOption == 0 && windowIndex == 5 && <img src={WilliamBurg8_6} className="window-layout-img" />}
      { hasWindow == true && cols == 8 && layoutOption == 0 && windowIndex == 6 && <img src={WilliamBurg8_7} className="window-layout-img" />}
      { hasWindow == true && cols == 8 && layoutOption == 0 && windowIndex == 7 && <img src={WilliamBurg8_8} className="window-layout-img" />}

      { hasWindow == true && cols == 7 && layoutOption == 0 && windowIndex == 0 && <img src={WilliamBurg7_1} className="window-layout-img" />}
      { hasWindow == true && cols == 7 && layoutOption == 0 && windowIndex == 1 && <img src={WilliamBurg7_2} className="window-layout-img" />}
      { hasWindow == true && cols == 7 && layoutOption == 0 && windowIndex == 2 && <img src={WilliamBurg7_3} className="window-layout-img" />}
      { hasWindow == true && cols == 7 && layoutOption == 0 && windowIndex == 3 && <img src={WilliamBurg7_4} className="window-layout-img" />}
      { hasWindow == true && cols == 7 && layoutOption == 0 && windowIndex == 4 && <img src={WilliamBurg7_5} className="window-layout-img" />}
      { hasWindow == true && cols == 7 && layoutOption == 0 && windowIndex == 5 && <img src={WilliamBurg7_6} className="window-layout-img" />}
      { hasWindow == true && cols == 7 && layoutOption == 0 && windowIndex == 6 && <img src={WilliamBurg7_7} className="window-layout-img" />}

      { hasWindow == true && cols == 5 && layoutOption == 0 && windowIndex == 0 && <img src={WilliamBurg5_1} className="window-layout-img" />}
      { hasWindow == true && cols == 5 && layoutOption == 0 && windowIndex == 1 && <img src={WilliamBurg5_2} className="window-layout-img" />}
      { hasWindow == true && cols == 5 && layoutOption == 0 && windowIndex == 2 && <img src={WilliamBurg5_3} className="window-layout-img" />}
      { hasWindow == true && cols == 5 && layoutOption == 0 && windowIndex == 3 && <img src={WilliamBurg5_4} className="window-layout-img" />}
      { hasWindow == true && cols == 5 && layoutOption == 0 && windowIndex == 4 && <img src={WilliamBurg5_5} className="window-layout-img" />}

      { hasWindow == true && cols == 8 && layoutOption == 1 && windowIndex == 0 && <img src={WilliamBurg_305_1} className="window-layout-img" />}
      { hasWindow == true && cols == 8 && layoutOption == 1 && windowIndex == 1 && <img src={WilliamBurg_305_2} className="window-layout-img" />}
      { hasWindow == true && cols == 8 && layoutOption == 1 && windowIndex == 2 && <img src={WilliamBurg_305_3} className="window-layout-img" />}
      { hasWindow == true && cols == 8 && layoutOption == 1 && windowIndex == 3 && <img src={WilliamBurg_305_4} className="window-layout-img" />}
      { hasWindow == true && cols == 8 && layoutOption == 1 && windowIndex == 4 && <img src={WilliamBurg_305_1} className="window-layout-img" />}
      { hasWindow == true && cols == 8 && layoutOption == 1 && windowIndex == 5 && <img src={WilliamBurg_305_2} className="window-layout-img" />}
      { hasWindow == true && cols == 8 && layoutOption == 1 && windowIndex == 6 && <img src={WilliamBurg_305_3} className="window-layout-img" />}
      { hasWindow == true && cols == 8 && layoutOption == 1 && windowIndex == 7 && <img src={WilliamBurg_305_4} className="window-layout-img" />}

      { hasWindow == true && cols == 4 && layoutOption == 1 && windowIndex == 0 && <img src={WilliamBurg_305_1} className="window-layout-img" />}
      { hasWindow == true && cols == 4 && layoutOption == 1 && windowIndex == 1 && <img src={WilliamBurg_305_2} className="window-layout-img" />}
      { hasWindow == true && cols == 4 && layoutOption == 1 && windowIndex == 2 && <img src={WilliamBurg_305_3} className="window-layout-img" />}
      { hasWindow == true && cols == 4 && layoutOption == 1 && windowIndex == 3 && <img src={WilliamBurg_305_4} className="window-layout-img" />}

      { hasWindow == true && cols == 8 && layoutOption == 2 && windowIndex == 0 && <img src={Winstone_1} className="window-layout-img" />}
      { hasWindow == true && cols == 8 && layoutOption == 2 && windowIndex == 1 && <img src={Winstone_2} className="window-layout-img" />}
      { hasWindow == true && cols == 8 && layoutOption == 2 && windowIndex == 2 && <img src={Winstone_1} className="window-layout-img" />}
      { hasWindow == true && cols == 8 && layoutOption == 2 && windowIndex == 3 && <img src={Winstone_2} className="window-layout-img" />}
      { hasWindow == true && cols == 8 && layoutOption == 2 && windowIndex == 4 && <img src={Winstone_1} className="window-layout-img" />}
      { hasWindow == true && cols == 8 && layoutOption == 2 && windowIndex == 5 && <img src={Winstone_2} className="window-layout-img" />}
      { hasWindow == true && cols == 8 && layoutOption == 2 && windowIndex == 6 && <img src={Winstone_1} className="window-layout-img" />}
      { hasWindow == true && cols == 8 && layoutOption == 2 && windowIndex == 7 && <img src={Winstone_2} className="window-layout-img" />}

      { hasWindow == true && cols == 4 && layoutOption == 2 && windowIndex == 0 && <img src={Winstone_1} className="window-layout-img" />}
      { hasWindow == true && cols == 4 && layoutOption == 2 && windowIndex == 1 && <img src={Winstone_2} className="window-layout-img" />}
      { hasWindow == true && cols == 4 && layoutOption == 2 && windowIndex == 2 && <img src={Winstone_1} className="window-layout-img" />}
      { hasWindow == true && cols == 4 && layoutOption == 2 && windowIndex == 3 && <img src={Winstone_2} className="window-layout-img" />}

      { hasWindow == true && cols == 8 && layoutOption == 3 && windowIndex == 0 && <img src={Stockton} className="window-layout-img" />}
      { hasWindow == true && cols == 8 && layoutOption == 3 && windowIndex == 1 && <img src={Stockton} className="window-layout-img" />}
      { hasWindow == true && cols == 8 && layoutOption == 3 && windowIndex == 2 && <img src={Stockton} className="window-layout-img" />}
      { hasWindow == true && cols == 8 && layoutOption == 3 && windowIndex == 3 && <img src={Stockton} className="window-layout-img" />}
      { hasWindow == true && cols == 8 && layoutOption == 3 && windowIndex == 4 && <img src={Stockton} className="window-layout-img" />}
      { hasWindow == true && cols == 8 && layoutOption == 3 && windowIndex == 5 && <img src={Stockton} className="window-layout-img" />}
      { hasWindow == true && cols == 8 && layoutOption == 3 && windowIndex == 6 && <img src={Stockton} className="window-layout-img" />}
      { hasWindow == true && cols == 8 && layoutOption == 3 && windowIndex == 7 && <img src={Stockton} className="window-layout-img" />}

      { hasWindow == true && cols == 4 && layoutOption == 3 && windowIndex == 0 && <img src={Stockton} className="window-layout-img" />}
      { hasWindow == true && cols == 4 && layoutOption == 3 && windowIndex == 1 && <img src={Stockton} className="window-layout-img" />}
      { hasWindow == true && cols == 4 && layoutOption == 3 && windowIndex == 2 && <img src={Stockton} className="window-layout-img" />}
      { hasWindow == true && cols == 4 && layoutOption == 3 && windowIndex == 3 && <img src={Stockton} className="window-layout-img" />}

      { hasWindow == true && cols == 8 && layoutOption == 4 && windowIndex == 0 && <img src={SherWood_1} className="window-layout-img" />}
      { hasWindow == true && cols == 8 && layoutOption == 4 && windowIndex == 1 && <img src={SherWood_2} className="window-layout-img" />}
      { hasWindow == true && cols == 8 && layoutOption == 4 && windowIndex == 2 && <img src={SherWood_1} className="window-layout-img" />}
      { hasWindow == true && cols == 8 && layoutOption == 4 && windowIndex == 3 && <img src={SherWood_2} className="window-layout-img" />}
      { hasWindow == true && cols == 8 && layoutOption == 4 && windowIndex == 4 && <img src={SherWood_1} className="window-layout-img" />}
      { hasWindow == true && cols == 8 && layoutOption == 4 && windowIndex == 5 && <img src={SherWood_2} className="window-layout-img" />}
      { hasWindow == true && cols == 8 && layoutOption == 4 && windowIndex == 6 && <img src={SherWood_1} className="window-layout-img" />}
      { hasWindow == true && cols == 8 && layoutOption == 4 && windowIndex == 7 && <img src={SherWood_2} className="window-layout-img" />}

      { hasWindow == true && cols == 4 && layoutOption == 4 && windowIndex == 0 && <img src={SherWood_1} className="window-layout-img" />}
      { hasWindow == true && cols == 4 && layoutOption == 4 && windowIndex == 1 && <img src={SherWood_2} className="window-layout-img" />}
      { hasWindow == true && cols == 4 && layoutOption == 4 && windowIndex == 2 && <img src={SherWood_1} className="window-layout-img" />}
      { hasWindow == true && cols == 4 && layoutOption == 4 && windowIndex == 3 && <img src={SherWood_2} className="window-layout-img" />}

    </div>
  )
}
export default WindowComponent;