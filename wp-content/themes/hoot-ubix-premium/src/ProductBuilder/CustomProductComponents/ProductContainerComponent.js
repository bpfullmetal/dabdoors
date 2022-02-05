import WindowComponent from "./WindowComponent";
import VentsComponent from "./VentsComponent";

const ProductContainerComponent = ({ hasWindow, hasVents, colorIndex }) => {
  let windows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  let colors = ['#ADA487', '#D1C394', '#9A8333'];
  return (
    <div id="product-container">
      {/* Product Container */}
      <div className="wall-wrapper">
        <div className="outline-door">
          <div className="inline-door">
            <div className="inline-wrapper" style={{ backgroundColor: colors[colorIndex] }}>
              <div className="window-wrapper">
                {
                  windows.map((e, index) => {
                    return <WindowComponent enableWindow={hasWindow} />
                  })
                }
              </div>
              {hasVents && <VentsComponent />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductContainerComponent;