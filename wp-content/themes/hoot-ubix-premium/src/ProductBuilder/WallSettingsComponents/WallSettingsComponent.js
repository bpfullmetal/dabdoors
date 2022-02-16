const { render, useState, useEffect } = wp.element;
import { SketchPicker, ChromePicker } from 'react-color';

const WallSettingsComponent = ({tileIndex, onChange, onWallBgColorChange}) => {
  let indexes = ['grid', 'single-line', 'single'];
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [color, setColor] = useState('#CCAC7B');
  const handleClick = () => {
    setShowColorPicker(!showColorPicker)
  };

  useEffect(() => {
    onWallBgColorChange(color);
  }, [color])

  const handleClose = () => {
    setShowColorPicker(false);
  };
  const popover = {
    position: 'absolute',
    zIndex: '2',
  }
  const cover = {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
  }

  return (
    <div className="wallSettings">
      <div className="d-flex align-items-center">
        {
          indexes.map((e, index) => {
            return (
              <div className="wall-item" style={{border: tileIndex == index ? `2px solid ${color}` : 'none'}}>
                <button type="button" className={`btn-color button ${e}`} onClick={(e) => onChange(index)} style={{backgroundColor: color} }></button>
              </div>
            )
          })
        }
        <div className="d-flex align-items-center">
          <span className="d-flex align-items-center btn-color-picker" onClick={ (e) => {handleClick()} }>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.15203 5.10983C4.05281 5.90357 4.63434 6.15713 4.93751 6.18469C5.56589 6.18469 5.75054 5.74372 5.76432 5.52324C5.69817 4.5972 6.12261 3.75935 6.34309 3.45619C8.59205 0.744213 10.5323 2.90497 11.2213 4.32435C12.1804 5.97799 12.3375 8.2104 12.2962 9.11991C12.8915 9.48371 12.9577 10.2086 12.9163 10.5255C12.7179 11.5838 11.869 11.7933 11.4694 11.7657C10.4772 11.6665 10.1189 10.8149 10.0638 10.4015C9.93149 9.67388 10.4496 9.21637 10.7252 9.07857C11.1883 7.52414 10.9182 6.2536 10.7252 5.81262L9.19562 4.57239C8.33573 4.37396 7.62466 4.95824 7.37662 5.27519L0.389986 12.3445C0.125404 12.6422 0.279743 13.3229 0.389986 13.6261C1.84519 17.3633 5.87456 20.282 7.70735 21.2742C8.36881 21.638 9.14051 21.5636 9.44367 21.4809L17.1744 13.6261C17.6044 12.9316 17.2158 12.2343 16.9677 11.9724L13.9498 8.95454C13.8837 7.26783 13.564 5.6886 13.4124 5.10983C11.8911 0.446557 8.80978 0.245364 7.4593 0.727676C5.14421 1.32299 4.28983 3.89716 4.15203 5.10983Z" fill={color}/>
              <path d="M20.4817 11.2282C18.7619 8.81386 16.0444 8.01736 14.9006 7.9209L18.8694 11.9723C19.3655 12.3692 19.2414 12.9645 19.1174 13.2126L17.9599 15.1142C17.1 16.4372 17.2433 17.953 17.4224 18.5455C18.2162 20.4638 19.5722 20.8882 20.1509 20.8606C21.0439 20.6622 21.2672 19.6204 21.2672 19.1243V13.7086C21.3333 12.6503 20.7711 11.614 20.4817 11.2282Z" fill={color}/>
            </svg>
          </span>
          { showColorPicker ? <div style={ popover }>
            <div style={ cover } onClick={(e) =>{ handleClose(); } }/>
            <ChromePicker color={ color } onChangeComplete={ (e) => {setColor(e.hex); } }/>
          </div> : null }
        </div>
      </div>
    </div>
  )
}

export default WallSettingsComponent;