import { useDispatch } from 'react-redux';
import { fetchStockData } from '../../reducers/stockSlice';

export default function SearchForm({ 
  ticker, 
  setTicker
}) {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    event.preventDefault();
    setTicker(event.target.value.toUpperCase());
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchStockData(ticker));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-container">
        <div>
          <label htmlFor="ticker">Enter a Stock Ticker</label>
          <input type="ticker" placeholder="Enter ticker" value={ticker} onChange={handleChange} />
        </div>
        <button type="submit" variant="primary" className="submit-btn">
          Submit
        </button>
      </div>
    </form >
  )
}
