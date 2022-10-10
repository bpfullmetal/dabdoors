import { useSelector, useDispatch } from 'react-redux'
import { toggleVents } from '../actions/vents'
import Switch from "react-switch";

const VentsSettingComponent = () => {
  const dispatch = useDispatch()
  const vents = useSelector( state => state.vents)
  const adminProps = useSelector( state => state.adminProps)

  const cost = Number(adminProps.vents_group.additional_price_$_if_added)
  
  return (
    <div className="product-setting-item-component vents-settings">
      <div class="d-flex align-items-center justify-content-between">
        <label>
          Vents
          { vents && <span className="additional_price_alert">{`+$${cost}`}</span> }
        </label>
        <Switch onChange={() => dispatch(toggleVents())} checked={vents} width={40} height={20} onColor={'#1396E7'} checkedIcon={''} uncheckedIcon={''} />
      </div>
    </div>
  );
}

export default VentsSettingComponent;