const { render, useState } = wp.element;

const ZoomControlComponent = ({onZoomIn, onZoomOut, scale}) => {
  const [hasWindow, setHasWindow] = useState(false);
  return (
    <div className="zoom-control-panel">
      <div className="zoom-control">
        <span className="btn-zoom zoom-minus" onClick={() => {onZoomOut()}}>
          <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.9999 13.4999L11.0093 10.5039L13.9999 13.4999ZM12.6666 6.49992C12.6666 8.00281 12.0696 9.44415 11.0069 10.5069C9.94415 11.5696 8.50281 12.1666 6.99992 12.1666C5.49703 12.1666 4.05569 11.5696 2.99298 10.5069C1.93027 9.44415 1.33325 8.00281 1.33325 6.49992C1.33325 4.99703 1.93027 3.55569 2.99298 2.49298C4.05569 1.43027 5.49703 0.833252 6.99992 0.833252C8.50281 0.833252 9.94415 1.43027 11.0069 2.49298C12.0696 3.55569 12.6666 4.99703 12.6666 6.49992V6.49992Z" stroke="#878787" stroke-linecap="round"/>
            <path d="M8.66659 6.5H5.33325" stroke="#878787" stroke-linecap="round"/>
          </svg>
        </span>
        <span className="zoom-value">{scale} %</span>
        <span className="btn-zoom zoom-plus" onClick={() => {onZoomIn()}}>
          <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.9999 13.4999L11.0093 10.5039L13.9999 13.4999ZM12.6666 6.49992C12.6666 8.00281 12.0696 9.44415 11.0069 10.5069C9.94415 11.5696 8.50281 12.1666 6.99992 12.1666C5.49703 12.1666 4.05569 11.5696 2.99298 10.5069C1.93027 9.44415 1.33325 8.00281 1.33325 6.49992C1.33325 4.99703 1.93027 3.55569 2.99298 2.49298C4.05569 1.43027 5.49703 0.833252 6.99992 0.833252C8.50281 0.833252 9.94415 1.43027 11.0069 2.49298C12.0696 3.55569 12.6666 4.99703 12.6666 6.49992V6.49992Z" stroke="#878787" stroke-linecap="round"/>
            <path d="M6.99984 4.1665V6.49984M6.99984 6.49984V8.83317M6.99984 6.49984H9.33317M6.99984 6.49984H4.6665" stroke="#878787" stroke-linecap="round"/>
          </svg>
        </span>
      </div>
      <div className="size-section">
        <span>Size: 8” X 18”</span>
      </div>
    </div>
  )
}
export default ZoomControlComponent;