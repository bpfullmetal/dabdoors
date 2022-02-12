const { render, useState } = wp.element;
import Builder from './ProductBuilder/Builder';
import "./style.scss";
const Votes = () => {
  const [adminProperties, setAdminProperties] = useState(null);
  const getAdminProperties = () => {
    let formData = {
      action: 'getAdminProperties'
    };
    jQuery.ajax({
      type: "post",
      dataType: "json",
      url: 'http://localhost/garage/wp-admin/admin-ajax.php',
      data: formData,
      success: function(response){
        setAdminProperties(response);
      }
    });
  };
  getAdminProperties();

  return (
    adminProperties && <Builder adminProperties={adminProperties} />
  );
};
render(<Votes />, document.getElementById('single-product-builder'));