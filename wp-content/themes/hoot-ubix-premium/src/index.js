const { render, useState, useEffect } = wp.element;
import Builder from './ProductBuilder/Builder';
import "./style.scss";
const Votes = () => {
  document.getElementById('main').classList.add('single-product-main-wrapper');
  const [adminProperties, setAdminProperties] = useState(null);
  const getAdminProperties = () => {
    let formData = {
      action: 'getAdminProperties'
    };
    jQuery.ajax({
      type: "post",
      dataType: "json",
      url: `${baseUrl}/wp-admin/admin-ajax.php`,
      data: formData,
      success: function(response){
        console.log(response);
        setAdminProperties(response);
      }
    });
  };
  useEffect(() => {
    getAdminProperties();
  }, [])
  return (
    adminProperties && <Builder adminProperties={adminProperties} />
  );
};
render(<Votes />, document.getElementById('single-product-builder'));