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
import { getPack } from "../../helper";
import PackComponent from "./PackComponents";

const WindowComponent = ({ enableWindow, addedWindow, windowIndex, layoutOption, cols, customWindowProperties, isAvailableForCustomWindow }) => {
  const [hasWindow, setHasWindow] = useState(false);
  const [customClassName, setCustomClassName] = useState('');
  const [pack, setPack] = useState(null);
  const [packItems, setPackItems] = useState([]);
  const williamBurgs405_8Pack = [ WilliamBurg8_1, WilliamBurg8_2, WilliamBurg8_3, WilliamBurg8_4, WilliamBurg8_5, WilliamBurg8_6, WilliamBurg8_7, WilliamBurg8_8 ];
  const williamBurgs405_7Pack = [ WilliamBurg7_1, WilliamBurg7_2, WilliamBurg7_3, WilliamBurg7_4, WilliamBurg7_5, WilliamBurg7_6, WilliamBurg7_7 ];
  const williamBurgs405_5Pack = [ WilliamBurg5_1, WilliamBurg5_2, WilliamBurg5_3, WilliamBurg5_4, WilliamBurg5_5 ];
  const williamBurgs305_8Pack = [ WilliamBurg_305_1, WilliamBurg_305_2, WilliamBurg_305_3, WilliamBurg_305_4, WilliamBurg_305_1, WilliamBurg_305_2, WilliamBurg_305_3, WilliamBurg_305_4 ];
  const williamBurgs305_4Pack = [ WilliamBurg_305_1, WilliamBurg_305_2, WilliamBurg_305_3, WilliamBurg_305_4 ];
  const winston_8Pack = [ Winstone_1, Winstone_2, Winstone_1, Winstone_2, Winstone_1, Winstone_2, Winstone_1, Winstone_2 ];
  const winston_4Pack = [ Winstone_1, Winstone_2, Winstone_1, Winstone_2 ];
  // const Stockton_8Pack = [ Stockton, Stockton, Stockton, Stockton, Stockton, Stockton, Stockton, Stockton ];
  const Stockton_1Pack = [ Stockton  ];
  const Sherwood_8Pack = [ SherWood_1, SherWood_2, SherWood_1, SherWood_2, SherWood_1, SherWood_2, SherWood_1, SherWood_2 ];
  const Sherwood_4Pack = [ SherWood_1, SherWood_2, SherWood_1, SherWood_2 ];

  useEffect(() => {
    let pack = getPack(layoutOption, cols, customWindowProperties);
    setPack(pack);
    if (layoutOption == 0) {
      if (pack == 5) {
        setPackItems(williamBurgs405_5Pack);
      } else if (pack == 7) {
        setPackItems(williamBurgs405_7Pack);
      } else if (pack == 8) {
        setPackItems(williamBurgs405_8Pack);
      }
    } else if (layoutOption == 1) {
      if (pack == 4) {
        setPackItems(williamBurgs305_4Pack);
      } else if (pack == 8) {
        setPackItems(williamBurgs305_8Pack);
      }
    } else if (layoutOption == 2) {
      if (pack == 4) {
        setPackItems(winston_4Pack);
      } else if (pack == 8) {
        setPackItems(winston_8Pack);
      }
    } else if (layoutOption == 3) {
      if (pack == 1) {
        setPackItems(Stockton_1Pack);
      }
    } else if (layoutOption == 4) {
      if (pack == 4) {
        setPackItems(Sherwood_4Pack);
      } else if (pack == 8) {
        setPackItems(Sherwood_8Pack);
      }      
    }
  }, [customWindowProperties, layoutOption, cols])

  // useEffect(() => {
  //   if (windowIndex == 0) {
  //     setCustomClassName('first-item');
  //   } else if (windowIndex == cols - 1) {
  //     setCustomClassName('last-item');
  //   } else {
  //     setCustomClassName('middle-item');
  //   }
  // }, [layoutOption, windowIndex, cols])

  return (
    <div className={`window-item item-${windowIndex} ${layoutOption == -1 && hasWindow ? 'active-window' : 'no-window'} ${enableWindow ? '' : 'disableWindow'} ${isAvailableForCustomWindow ? 'custom-window' : ''}`}>
      {
        hasWindow == false && layoutOption == -1 && <span className="btn btn-add" onClick={(e) => { 
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
        ((hasWindow == true && layoutOption == -1)) && <span className="btn btn-remove" onClick={(e) => {
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

      {
        enableWindow===true && layoutOption >= 0 && windowIndex < cols && 
        <PackComponent customClassName={customClassName} cols={cols} layoutOption={layoutOption} windowIndex={windowIndex} pack={pack} packItems={packItems} />
      }
    </div>
  )
}
export default WindowComponent;