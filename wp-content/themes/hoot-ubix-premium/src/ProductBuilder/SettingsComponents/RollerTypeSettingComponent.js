import { useSelector, useDispatch } from 'react-redux'
import { setRollerType } from '../actions/roller'
import Switch from "react-switch";

const RollerTypeSettingComponent = () => {
  const dispatch = useDispatch()
  const roller = useSelector( state => state.roller )
  const settingsData = useSelector( state => state.settingsData )

  return (
    <div className="product-setting-item-component lock-placement-settings">
      <label>
        { adminProps.roller_type_group.label }
        { settingsData.roller.cost > 0 && <span className="additional_price_alert">{`+$${settingsData.roller.cost}`}</span> }
      </label>
      <div className="d-flex button-wrapper align-items-center justify-content-between">
        {
          adminProps.roller_type_group.select_button_options.map((option, index) => {
            return (
              <label class="radio-container" for={`roller-type-${index}`}>{ option.button_name }
                <input
                  id={`roller-type-${index}`}
                  type="radio"
                  name="radio"
                  value={option.button_name}
                  checked={roller === option.button_name}
                  onChange={ e => dispatch(setRollerType(option.button_name)) }
                />
                <span class="checkmark"></span>
              </label>    
            )
          })
        }
      </div>
    </div>
  );
}

export default RollerTypeSettingComponent;