import { useSelector } from 'react-redux'
import ImgVent from './../../assets/img_vent_background.png';

const VentsComponent = () => {
  const vents = useSelector( state => state.vents)
  const windowsGrid = useSelector( state => state.windowsGrid)
  
  return (
    <div className={`vents-wrapper ${ vents ? '' : 'hidden' }`}  style={{ gridTemplateColumns: `repeat(${ windowsGrid.cols }, 1fr)` }}>
      {Array(windowsGrid.cols).fill(0).map((_column, i) => (
        <div key={i} className="vent-item">
          <img src={ImgVent} />
        </div>
      ))}
    </div>
  )
}

export default VentsComponent;