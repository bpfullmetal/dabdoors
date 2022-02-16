import { useState, useEffect } from 'react';

const SizeChangeComponent = ({onChangeWindowSize}) => {
  const [width1, setWidth1] = useState(24);
  const [width2, setWidth2] = useState(0);
  const [height1, setHeight1] = useState(16);
  const [height2, setHeight2] = useState(2);
  useEffect(() => {
    onChangeWindowSize({width1, width2, height1, height2});
  }, [width1, width2, height1, height2])
  return (
    <div className="product-setting-item-component">
      <label>Size</label>
      <div className="size-settings-wrapper">
        <div className="width-wrapper d-flex">
          <span className="label">W</span>
          <div className="d-flex align-items-center input-wrapper">
            <input type="number" name="width_1" value={width1} onChange={(e) => {
              setWidth1(Number(e.target.value))
            }}></input>
            <span>’</span>
            <input type="number" name="width_2" value={width2} onChange={(e) => {
              setWidth2(Number(e.target.value))
            }}></input>
            <span>”</span>
          </div>
        </div>
        <div className="height-wrapper d-flex">
          <span className="label">H</span>
          <div className="d-flex align-items-center input-wrapper">
            <input type="number" name="height_1" value={height1} onChange={(e) => {
              setHeight1(Number(e.target.value))
            }}></input>
            <span>’</span>
            <input type="number" name="height_2" value={height2} onChange={(e) => {
              setHeight2(Number(e.target.value))
            }}></input>
            <span>”</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SizeChangeComponent;