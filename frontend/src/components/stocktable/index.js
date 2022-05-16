export default function StockTable({
  max_price,
  min_price,
  max_vol,
  min_vol,
  avg_weighted_price,
  avg_vol
}) {
  return (
    <div className="container">
      <div className="item">Item</div>
      <div className="item">Minimum</div>
      <div className="item">Maximum</div>
      <div className="item">Average</div>

      <div className="item">Price</div>
      <div className="item">${Math.round(min_price)}</div>
      <div className="item">${Math.round(max_price)}</div>
      <div className="item">${Math.round(avg_weighted_price)}</div>

      <div className="item">Volume</div>
      <div className="item">${Math.round(min_vol)}</div>
      <div className="item">${Math.round(max_vol)}</div>
      <div className="item">{Math.round(avg_vol)}</div>

      <div className="item">&nbsp;</div>
      <div className="item" />
      <div className="item" />
      <div className="item" />
    </div>
  )
}
