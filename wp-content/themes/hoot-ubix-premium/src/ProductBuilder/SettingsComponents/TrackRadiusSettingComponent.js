const { render, useState } = wp.element;
import ReactSlider from 'react-slider';

const TrackRadiusSettingComponent = ({ properties, enablePrice }) => {
  const [value, setValue] = useState(Number(properties.minimum));
  return (
    <div className="product-setting-item-component track-radius-settings slider-bar">
      <label>{ properties.label } ( { `${value}${properties.unit}` } )</label>
      <div className="d-flex">
        <ReactSlider
          ariaLabelledby="slider-label"
          className="horizontal-slider"
          thumbClassName="example-thumb"
          trackClassName="example-track"
          renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
          step={Number(properties.step_count)}
          min={Number(properties.minimum)}
          max={Number(properties.maximum)}
          value={value}
          onChange={(e) => {
            setValue(e);
            if (e > Number(properties.if_over_)) {
              enablePrice(e, true);
            } else {
              enablePrice(e, false);
            }
          }}
        />
      </div>
    </div>
  );
}

export default TrackRadiusSettingComponent;