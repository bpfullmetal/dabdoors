import ImgVent from './../../assets/img_vent_background.png';
const VentsComponent = ({ columns }) => {
  // console.log('HERE');
  // console.log(columns);
  return (
    <div className="vents-wrapper"  style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      {Array(columns).fill(0).map((_column, i) => (
        <div key={i} className="vent-item">
          <img src={ImgVent} />
        </div>
      ))}
    </div>
  )
}

export default VentsComponent;