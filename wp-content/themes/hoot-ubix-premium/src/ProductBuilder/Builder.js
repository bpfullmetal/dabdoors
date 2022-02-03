import Logo from "./../assets/img_logo.png";
const Builder = () => {
  return (
    <div className="product-builder">
      <div className="title-section">
        <img src={Logo} className="logo"/>
        <h2>Hurricane Garage Doors Product BuiLder</h2>
      </div>
      <div className="product-builder-content">
        <div className="product-container"></div>
        <div className="product-custom-bar"></div>
      </div>
    </div>
  );
}

export default Builder;