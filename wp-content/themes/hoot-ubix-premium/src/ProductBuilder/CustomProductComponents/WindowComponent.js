const { render, useState } = wp.element;

const WindowComponent = ({ enableWindow, addedWindow }) => {
  const [hasWindow, setHasWindow] = useState(false);
  return (
    <div className={`window-item ${hasWindow ? 'active-window' : 'no-window'} ${enableWindow ? '' : 'disableWindow'}`}>
      {
        hasWindow == false && <span className="btn btn-add" onClick={(e) => {setHasWindow(true); addedWindow(true)}}>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.15625 6.34375V0H6.34375V6.34375H0V8.15625H6.34375V14.5H8.15625V8.15625H14.5V6.34375H8.15625Z" fill="#1D1E1D"/>
          </svg>
        </span>
      }
      {
        hasWindow == true && <span className="btn btn-remove" onClick={(e) => {setHasWindow(false); addedWindow(false)}}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.1973 10.3435L14.1973 17.0883" stroke="#C83939" stroke-width="1.92708" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.3438 10.3435L10.3438 17.0883" stroke="#C83939" stroke-width="1.92708" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18.0518 6.48926H6.48926V19.9788C6.48926 20.511 6.92065 20.9424 7.4528 20.9424H17.0882C17.6204 20.9424 18.0518 20.511 18.0518 19.9788V6.48926Z" stroke="#C83939" stroke-width="1.92708" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.5625 6.48926H19.9792" stroke="#C83939" stroke-width="1.92708" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.1608 3.59863H9.37956C8.84741 3.59863 8.41602 4.03003 8.41602 4.56217V6.48926H16.1243V4.56217C16.1243 4.03003 15.693 3.59863 15.1608 3.59863Z" stroke="#C83939" stroke-width="1.92708" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      }
    </div>
  )
}
export default WindowComponent;