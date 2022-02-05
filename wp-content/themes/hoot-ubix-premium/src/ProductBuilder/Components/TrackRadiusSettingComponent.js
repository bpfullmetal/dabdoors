const { render, useState } = wp.element;
import Switch from "react-switch";
import ReactSlider from 'react-slider';

const TrackRadiusSettingComponent = () => {
  const [value, setValue] = useState(1);
  return (
    <div className="product-setting-item-component track-radius-settings slider-bar">
      <label>Track Radius</label>
      <div className="d-flex">
        <ReactSlider
          ariaLabelledby="slider-label"
          className="horizontal-slider"
          thumbClassName="example-thumb"
          trackClassName="example-track"
          renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
          step={0.1}
          min={1}
          max={10}
          value={value}
          onChange={(e) => {
            setValue(e)
          }}
        />
      </div>
    </div>
  );
}

export default TrackRadiusSettingComponent;