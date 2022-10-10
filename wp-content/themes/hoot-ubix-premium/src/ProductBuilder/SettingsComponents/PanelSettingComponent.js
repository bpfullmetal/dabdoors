import { useSelector, useDispatch } from 'react-redux'
import { setPanel } from '../actions/panel'

const PanelSettingComponent = () => {
  const dispatch = useDispatch()
  const panel = useSelector( state => state.panel )
  const adminProps = useSelector( state => state.adminProps )
  const additionalCost = useSelector( state => state.additionalCost )

  return (
    <div id="panel-type-settings" className="product-setting-item-component">
      <label>
        Panel Type
        { additionalCost.panel > 0 && <span className="additional_price_alert">{`+$${additionalCost.panel}`}</span> }
      </label>
      <select className="button-wrapper" value={panel} onChange={ e => dispatch(setPanel(e.target.value) )}>
        {
          adminProps.panels.map((it, index) => {
            return (
              <option key={index} value={it.panel_type}>{it.panel_type} (+${it.additional_price})</option>
            );
          })
        }
      </select>
    </div>

  );
}

export default PanelSettingComponent;