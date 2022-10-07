import { useState, useEffect } from 'react';

import ImgVent from './../../assets/img_vent_background.png';
const VentsComponent = ({ columns, hasVents }) => {
  useEffect(() => {
    // console.log(hasVents)
  }, [hasVents])
  return (
    <div className={`vents-wrapper ${hasVents?'':'hidden'}`}  style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      {Array(columns).fill(0).map((_column, i) => (
        <div key={i} className="vent-item">
          <img src={ImgVent} />
        </div>
      ))}
    </div>
  )
}

export default VentsComponent;