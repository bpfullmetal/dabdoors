const { useState, useEffect } = wp.element;
import { useSelector, useDispatch } from 'react-redux'
import { setPressure } from '../actions/pressure'

const PressureSettingsComponent = ({properties}) => {
  const dispatch = useDispatch()

  const doorSize = useSelector( state => state.doorSize )
  const pressure = useSelector( state => state.pressure )
  const uBarData = useSelector( state => state.settingsData.uBar )

  const [availablePressures, setAvailablePressures] = useState([]);

  useEffect(() => {
    
    let pressureOptions =  adminProps.pressure_group.pressure_options;
    const width = doorSize.width
    let index = 0;
    let indexList = [];
    pressureOptions.forEach(it => {
      if (Number(it.min_width) <= width && Number(it.max_width) >= width) {
        indexList.push(it.pressure_range);
      }
      index++;
    });
    setAvailablePressures(indexList.length ? indexList : [])
  }, [doorSize])

  useEffect(() => {
    dispatch(setPressure(availablePressures.length ? availablePressures[0] : 'no-pressure'))
  }, [availablePressures])
  
  console.log(availablePressures)

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
            availablePressures.map((it, index) => {
              return (<option key={`pressure-${index}`} value={it}>{it}</option>);
            })
          }
        </select>
      </div>
      {uBarData.count > 0 && <div className="additional_price_alert">
          Ubar Counts: {uBarData.count}, &nbsp; &nbsp;Additioanl Price: +${ uBarData.cost }
      </div>}
    </div>
  );
}

export default PressureSettingsComponent;