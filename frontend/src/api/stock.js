import axios from 'axios';
import { FETCH_STOCK_API_URL } from './constants';

export const fetchStockApi = (ticker) => {
  return axios.get(FETCH_STOCK_API_URL(ticker));
}