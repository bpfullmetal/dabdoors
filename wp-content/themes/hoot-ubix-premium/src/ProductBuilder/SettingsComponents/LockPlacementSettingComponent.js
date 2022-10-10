const { render, useState } = wp.element;
import { useSelector, useDispatch } from 'react-redux'
import { setLockPlacement } from '../actions/lock'

const LockPlacementSettingComponent = () => {
  const dispatch = useDispatch()
  const lock = useSelector( state => state.lock)
  const adminProps = useSelector( state => state.adminProps )
  const additional_price = adminProps.lock_placement_group[lock].additional_price_$
  // const defaultLock = adminProps.lock_placement_group.inside.default
  return (
    <div className="product-setting-item-component lock-placement-settings">
      <label>
        Lock Placement
        { additional_price > 0 && <span className="additional_price_alert">{`+$${additional_price}`}</span> }
      </label>
      <div className="d-flex button-wrapper align-items-center">
        <button
          type="button"
          className={`button ${lock == 'inside' ? 'active' : ''}`}
          onClick={ e => {dispatch(setLockPlacement('inside'))}}
        >
          Inside
        </button>
        <button
          type="button"
          className={`button ${lock == 'outside' ? 'active' : ''}`}
          onClick={ e => {dispatch(setLockPlacement('outside'))}}
        >
          Outside
        </button>
      </div>
    </div>
  );
}

export default LockPlacementSettingComponent;