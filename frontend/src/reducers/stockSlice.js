import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchStockApi } from '../api/stock';

export const fetchStockData = createAsyncThunk(
  'stock/fetchStockData',
  async (ticker, { rejectWithValue }) => {
    try {
      const response = await fetchStockApi(ticker);
      return response.data
    } catch (err) {
      if (!err.response) {
        throw err
      }
      return rejectWithValue(err.response.data);
    }
  }
)

export const stockSlice = createSlice({
  name: 'stock',
  initialState: {
    isLoading: false,
    stock: null,
    error: null
  },
  reducers: {},
  extraReducers: {
    [fetchStockData.pending]: () => {
      return {
        isLoading: true,
        stock: null,
        error: null
      }
    },
    [fetchStockData.fulfilled]: (_, action) => {
      return {
        isLoading: false,
        stock: action.payload,
        error: false,
      }
    },
    [fetchStockData.rejected]: () => {
      return {
        isLoading: false,
        error: true,
        stock: null
      }
    }
  }
})

export default stockSlice.reducer;