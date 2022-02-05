const SizeChangeComponent = () => {
  return (
    <div className="product-setting-item-component">
      <label>Size</label>
      <div className="size-settings-wrapper">
        <div className="width-wrapper">
          <span>W</span>
          <input type="number" name="width"></input>
        </div>
        <div className="height-wrapper">
          <span>H</span>
          <input type="number" name="height"></input>
        </div>
      </div>
    </div>
  );
}

export default SizeChangeComponent;