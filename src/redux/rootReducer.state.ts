import {combineReducers} from '@reduxjs/toolkit';
import sliceName from './sliceName.state';
import productsSliceM from './features/products/products.slice.m';
import cartSliceM from './features/cart/cart.slice.m';

const rootReducer = combineReducers({
  [sliceName.products]: productsSliceM,
  [sliceName.cart]: cartSliceM,
});
export default rootReducer;
