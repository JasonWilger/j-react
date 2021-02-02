import { createStore } from 'redux';
import Reducer from './components/reducers/Reducers';

let preloadedState
const persistedProductsString = localStorage.getItem('products')

if (persistedProductsString) {
  preloadedState = {
    products: JSON.parse(persistedProductsString)
  }
}

const store = createStore(Reducer, preloadedState)

export default store;

