import { useSelector, useDispatch } from 'react-redux'
import { setColor } from '../actions/color'

const ColorsSettingComponent = () => {

  const dispatch = useDispatch()
  const color = useSelector( state => state.color)
  const adminProps = useSelector( state => state.adminProps)
  const additionalCost = useSelector( state => state.additionalCost )

  const colorGroups = [ adminProps.standard_colors_group, adminProps.premium_colors_group ]
  
  return (
    <>
      {
        colorGroups.map ( (group, groupIndex) => {
          return <div key={`color-group-${groupIndex}`} className="product-setting-item-component colors-settings">
            <label>
              { group.label }
              {
                ( 'additional_price' in group && additionalCost.color > 0 ) && <span className="additional_price_alert">{`+$${additionalCost.color}`}</span>
              }
            </label>
            <div className="d-flex align-items-center colors-wrapper">
              {
                group.select_button_options.map( (colorOption, colorIndex) => {
                  return (
                    <div 
                      key={`color-${colorIndex}`}
                      className="color-item" 
                      style={{ border: `2px solid ${color.sku === colorOption.sku_code ? 'black' : '#FFF'}` }}>
                      <button 
                        type="button" 
                        className="btn-color button" 
                        style={{ backgroundColor: colorOption.select_color }} 
                        onClick={ () => dispatch(setColor({ color: colorOption.select_color, sku: colorOption.sku_code }) )}></button>
                    </div>
                  )
                })
              }
            </div>
          </div>
        })
      }
    </>
  );
}

export default ColorsSettingComponent;