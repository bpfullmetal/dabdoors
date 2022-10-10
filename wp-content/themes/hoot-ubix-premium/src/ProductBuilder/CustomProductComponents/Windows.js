import { useSelector, useDispatch } from 'react-redux'
import windowAdd from '../../assets/window-add.svg'
import windowRemove from '../../assets/window-remove.svg'
import { toggleWindow } from '../actions/windows'

const Windows = () => {
    const dispatch = useDispatch()
    const windows = useSelector( state => state.windows)
    const windowsGrid = useSelector( state => state.windowsGrid)
    const windowLayout = useSelector( state => state.windowLayout)
    const windowsEnabled = useSelector( state => state.windowsEnabled)
    
    return (
        <div 
            className="windows-wrapper" 
            style={{ gridTemplateColumns: `repeat(${windowsGrid.cols}, 1fr)` }}>
            {
                windows.map((window, index) => {
                    const windowImage = windowLayout === 'custom'
                        ? window.selected 
                            ? windowRemove
                            : windowAdd
                        : window.image
                    return (
                        <div 
                            key={`window-${index}`} 
                            className={`window window-${windowLayout}${windowsEnabled ? ' enabled' : ''}${window.selected ? ' selected' : ''}`}
                            onClick={ () => (windowLayout === 'custom' && windowsEnabled) ? dispatch(toggleWindow(index)) : false }>
                            <div className="window-wrapper">
                                <div className="window-content">
                                    <div className="window-image-wrapper">
                                        <div className="window-image">
                                            <img src={ windowImage }/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Windows;