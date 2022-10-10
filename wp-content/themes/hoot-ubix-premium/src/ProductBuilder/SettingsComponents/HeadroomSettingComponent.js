import { useSelector, useDispatch } from 'react-redux'
import { setHeadRoom } from '../actions/head-room'

const HeadroomSettingComponent = () => {
  const dispatch = useDispatch()
  const headRoom = useSelector( state => state.headRoom)
  const adminProps = useSelector( state => state.adminProps)
  const additionalCost = useSelector( state => state.additionalCost )
  
  return (
    <div id="head-room-settings" className="product-setting-item-component">
      <label>
        Head Room
        { additionalCost.headroom > 0 && <span className="additional_price_alert">{`+$${additionalCost.headroom}`}</span> }
      </label>
      <select className="button-wrapper" value={headRoom} onChange={ e => dispatch(setHeadRoom(e.target.value))}>
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