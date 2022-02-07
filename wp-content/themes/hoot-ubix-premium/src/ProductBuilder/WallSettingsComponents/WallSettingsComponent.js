const WallSettingsComponent = () => {
  let indexes = ['grid', 'single-line', 'single'];
  return (
    <div className="wallSettings">
      <div className="d-flex align-items-center">
        {
          indexes.map((e, index) => {
            return (
              <div className="wall-item" style={{border: `2px solid ${0 == index ? e : '#FFF'}`}}>
                <button type="button" className={`btn-color button ${e}`}></button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default WallSettingsComponent;