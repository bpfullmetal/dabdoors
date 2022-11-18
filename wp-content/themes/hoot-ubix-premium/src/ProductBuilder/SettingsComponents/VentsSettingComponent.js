import { useSelector, useDispatch } from 'react-redux'
import { toggleVents } from '../actions/vents'
import Switch from "react-switch";

const VentsSettingComponent = () => {
  const dispatch = useDispatch()
  const vents = useSelector( state => state.vents )
  const settingsData = useSelector( state => state.settingsData )
  
  return (
    <div className="product-setting-item-component vents-settings">
      <div class="d-flex align-items-center justify-content-between">
        <label>
          Vents
          { settingsData.vents.cost !== 0 && <span className="additional_price_alert">{`+$${settingsData.vents.cost}`}</span> }
        </label>
        <Switch 
        onChange={() => dispatch(toggleVents())} 
        checked={vents} 
        width={40} 
        height={20} 
        onColor={'#1396E7'} 
        checkedIcon={''} 
        uncheckedIcon={''} />
      </div>
    </div>
  );
}

export default VentsSettingComponent;