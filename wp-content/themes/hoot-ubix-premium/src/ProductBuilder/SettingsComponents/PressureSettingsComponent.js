const { render, useState, useEffect } = wp.element;
import { useSelector, useDispatch } from 'react-redux'
import { setPressure } from '../actions/pressure'

const PressureSettingsComponent = ({properties, selectedUbarSetting}) => {
  const dispatch = useDispatch()

  const doorSize = useSelector( state => state.doorSize)
  const adminProps = useSelector( state => state.adminProps)
  const pressure = useSelector( state => state.pressure)

  const [availablePressures, setAvailablePressures] = useState([]);

  useEffect(() => {
    let pressureOptions =  adminProps.pressure_group.pressure_options;
    const width = doorSize.width
    let index = 0;
    let indexList = [];
    pressureOptions.forEach(it => {
      if (Number(it.min_width) <= width && Number(it.max_width) >= width) {
        indexList.push(index);
      }
      index++;
    });
    setAvailablePressures(indexList.length ? indexList : [])
  }, [doorSize])

  useEffect(() => {
    dispatch(setPressure(availablePressures.length ? availablePressures[0] : 'no-pressure'))
  }, [availablePressures])

  return (
    <div className="product-setting-item-component pressure-settings">
      <div className="d-flex justify-content-start align-items-center">
        <label>
          { properties.label }
        </label>
      </div>
      <div className="d-flex">
        <select value={pressure} className="mt-1" onChange={ e => dispatch(setPressure(e.target.value)) }>
          { pressure === 'no-pressure' &&
            <option key="no-pressure" value="no-pressure">Not Available</option>
          }
          {
            properties.pressure_options.map((it, index) => {
              console.log('pressure', it)
              return (<option key={`pressure-${index}`} value={it.pressure_range} disabled={availablePressures.indexOf(index)>-1?false:true}>{it.pressure_range}</option>);
            })
          }
        </select>
      </div>
      {selectedUbarSetting.ubar_counts > 0 && <div className="additional_price_alert">
          Ubar Counts: {selectedUbarSetting.ubar_counts}, &nbsp; &nbsp;Additioanl Price: +${selectedUbarSetting.ubar_counts * selectedUbarSetting.ubar_costs }
      </div>}
    </div>
  );
}

export default PressureSettingsComponent;