import { useSelector, useDispatch } from 'react-redux'
import { setTrackRadius } from '../actions/track-radius'
import ReactSlider from 'react-slider';

const TrackRadiusSettingComponent = () => {
  const dispatch = useDispatch()
  const trackRadius = useSelector( state => state.trackRadius )
  const settingsData = useSelector( state => state.settingsData )

  const trackSettings = adminProps.track_radius_group

  return (
    <div id="track-radius-settings" className="product-setting-item-component slider-bar">
      <label>
        Track Radius ( { `${trackRadius} ${trackSettings.unit}` } )
        { settingsData.trackRadius.cost > 0 && <span className='additional_price_alert'>{`+$${settingsData.trackRadius.cost}`}</span> }
      </label>
      <div className="d-flex">
        <ReactSlider
          ariaLabelledby="slider-label"
          className="horizontal-slider"
          thumbClassName="example-thumb"
          trackClassName="example-track"
          renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
          step={Number(trackSettings.step_count)}
          min={Number(trackSettings.minimum)}
          max={Number(trackSettings.maximum)}
          value={trackRadius}
          onChange={ e => dispatch(setTrackRadius(e)) }
        />
      </div>
    </div>
  );
}

export default TrackRadiusSettingComponent;