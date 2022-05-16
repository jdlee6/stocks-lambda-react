import { useState } from 'react';
import { useSelector } from 'react-redux';
import StockTable from '../../components/stocktable';
import SearchForm from '../../components/searchform';

function Home() {
  const [ticker, setTicker] = useState('');
  const { stock, error } = useSelector(state => state.stock);

  return (
    <>
      <SearchForm ticker={ticker} setTicker={setTicker} />
      {stock && !error
        ? <StockTable {...stock} />
        : <div className="form-container">Please type in a valid stock ticker!</div>
      }
    </>
  );
}

export default Home;
