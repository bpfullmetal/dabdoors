const { render, useState } = wp.element;


const PressureSettingsComponent = ({properties}) => {
//   const [value, setValue] = useState(Number(properties.minimum));
  return (
    <div className="product-setting-item-component pressure-settings">
      <label>
        { properties.label }
        {/* { additional_price > 0 && <span className='additional_price_alert'>{`+$${additional_price}`}</span> } */}
      </label>
      <div className="d-flex">
        <select className="mt-1">
            <option name="">27-30</option>
            <option name="">36-44</option>
            <option name="">42 -52</option>
            <option name="">50-60</option>
            <option name="">48-52</option>
            <option name="">56-64</option>
            <option name="">55-64</option>
            <option name="">62-70</option>
        </select>
      </div>
    </div>
  );
}

export default PressureSettingsComponent;