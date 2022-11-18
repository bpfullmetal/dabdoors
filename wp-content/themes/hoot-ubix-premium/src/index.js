const { render } = wp.element;
import Builder from './ProductBuilder/Builder';
import { store } from './store'
import { Provider } from 'react-redux'
import styles from  "./style.scss";

const App = () => {
  document.getElementById('main').classList.add('single-product-main-wrapper');

  return (
    Object.keys(adminProps).length && <Builder />
  );
};

render(<React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>, document.getElementById('single-product-builder'));