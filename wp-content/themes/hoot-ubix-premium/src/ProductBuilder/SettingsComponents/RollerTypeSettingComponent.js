const { render, useState } = wp.element;
import Switch from "react-switch";

const RollerTypeSettingComponent = ({ properties, setAdditionalPriceForRollerType }) => {
  const [selectedIndex, setSelectedIndex] = useState(properties.select_button_options.findIndex((option) => {
    return option.default === true;
  }));
  return (
    <div className="product-setting-item-component lock-placement-settings">
      <label>{ properties.label }</label>
      <div className="d-flex button-wrapper align-items-center justify-content-between">
        {
          properties.select_button_options.map((option, index) => {
            return (
              <label class="radio-container" for={`roller-type-${index}`}>{ option.button_name }
                <input
                  id={`roller-type-${index}`}
                  type="radio"
                  name="radio"
                  value={index}
                  checked={selectedIndex == index ? 'checked' : ''}
                  onChange={(e) => {
                    setSelectedIndex(index);
                    setAdditionalPriceForRollerType(option.button_name, Number(option.additional_price))
                  }}
                />
                <span class="checkmark"></span>
              </label>    
            )
          })
        }
      </div>
    </div>
  );
}

export default RollerTypeSettingComponent;