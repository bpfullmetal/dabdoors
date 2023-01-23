import { useSelector, useDispatch } from 'react-redux'
import { setHeadRoom } from '../actions/head-room'

const HeadroomSettingComponent = () => {
  const dispatch = useDispatch()
  const headRoom = useSelector( state => state.headRoom)
  const settingsData = useSelector( state => state.settingsData )
  
  return (
    <div id="head-room-settings" className="product-setting-item-component">
      <label>
        Head Room
        { settingsData.headroom.cost > 0 && <span className="additional_price_alert">{`+$${settingsData.headroom.cost}`}</span> }
      </label>
      <select className="button-wrapper mt-1" value={headRoom} onChange={ e => dispatch(setHeadRoom(e.target.value))}>
        {
          adminProps.headroom.options.map((it, index) => {
            return (
              <option key={index} value={it.option_label} >{it.option_label} (+${it.additional_price})</option>
            );
          })
        }
      </select>
    </div>

  );
}

export default HeadroomSettingComponent;