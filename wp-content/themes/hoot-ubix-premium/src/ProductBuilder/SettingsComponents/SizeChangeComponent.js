const SizeChangeComponent = () => {
  return (
    <div className="product-setting-item-component">
      <label>Size</label>
      <div className="size-settings-wrapper">
        <div className="width-wrapper d-flex">
          <span className="label">W</span>
          <div className="d-flex align-items-center input-wrapper">
            <input type="number" name="width_1"></input>
            <span>’</span>
            <input type="number" name="width_2"></input>
            <span>”</span>
          </div>
        </div>
        <div className="height-wrapper d-flex">
          <span className="label">H</span>
          <div className="d-flex align-items-center input-wrapper">
            <input type="number" name="height_1"></input>
            <span>’</span>
            <input type="number" name="height_2"></input>
            <span>”</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SizeChangeComponent;