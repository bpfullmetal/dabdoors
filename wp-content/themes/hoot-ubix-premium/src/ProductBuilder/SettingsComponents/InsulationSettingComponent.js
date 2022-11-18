import { useSelector, useDispatch } from 'react-redux'
import { toggleInsulation } from '../actions/insulation'
import Switch from "react-switch";

const InsulationSettingComponent = () => {
  const dispatch = useDispatch()
  const insulation = useSelector( state => state.insulation )
  const settingsData = useSelector( state => state.settingsData )

  return (
    <div className="product-setting-item-component insulation-settings">
      <div class="d-flex align-items-center justify-content-between">
        <label>
          { adminProps.insulation_group.label }
          { insulation && settingsData.insulation.cost > 0 && <span className="additional_price_alert">{`+$${settingsData.insulation.cost}`}</span> }
        </label>
        <Switch
          onChange={() => dispatch(toggleInsulation())}
          checked={insulation}
          width={40}
          height={20}
          onColor={'#1396E7'}
          checkedIcon={''}
          uncheckedIcon={''}
        />
      </div>
    </div>
  );
}

export default InsulationSettingComponent;