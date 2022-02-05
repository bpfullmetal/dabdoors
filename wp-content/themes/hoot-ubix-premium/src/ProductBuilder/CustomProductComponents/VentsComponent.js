import ImgVent from './../../assets/img_vent_background.png';
const VentsComponent = () => {
  return (
    <div className="vents-wrapper">
      <div className="vent-item">
        <img src={ImgVent} />
      </div>
      <div className="vent-item">
        <img src={ImgVent} />
      </div>
      <div className="vent-item">
        <img src={ImgVent} />
      </div>
      <div className="vent-item">
        <img src={ImgVent} />
      </div>
    </div>
  )
}

export default VentsComponent;