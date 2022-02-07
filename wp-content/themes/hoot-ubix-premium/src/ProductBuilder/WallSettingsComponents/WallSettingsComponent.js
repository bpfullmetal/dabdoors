const WallSettingsComponent = ({tileIndex, onChange}) => {
  let indexes = ['grid', 'single-line', 'single'];
  return (
    <div className="wallSettings">
      <div className="d-flex align-items-center">
        {
          indexes.map((e, index) => {
            return (
              <div className="wall-item" style={{border: tileIndex == index ? '2px solid #CCAC7B' : 'none'}}>
                <button type="button" className={`btn-color button ${e}`} onClick={(e) => onChange(index)}></button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default WallSettingsComponent;