import { configureStore } from '@reduxjs/toolkit';
import stockReducer from '../reducers/stockSlice';

export default configureStore({
  reducer: {
    stock: stockReducer
  }
})