const { render, useState, useEffect } = wp.element;
import Builder from './ProductBuilder/Builder';
import { store } from './store'
import { Provider, useSelector, useDispatch } from 'react-redux'
import { setAdminProps } from './ProductBuilder/actions/admin-props'
import styles from  "./style.scss";


const App = () => {
  document.getElementById('main').classList.add('single-product-main-wrapper');
  const dispatch = useDispatch()
  const adminProps = useSelector((state) => state.adminProps)
  console.log(adminProps)
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
        dispatch(setAdminProps(response));
      }
    });
  };

  useEffect(() => {
    console.log('HELLO')
    getAdminProperties();
  }, []);

  return (
    Object.keys(adminProps).length && <Builder />
  );
};

render(<React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>, document.getElementById('single-product-builder'));