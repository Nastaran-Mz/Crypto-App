/* eslint-disable react/prop-types */
import { RotatingLines } from "react-loader-spinner";
import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";
import styles from "../modules/TableCoin.module.css"
function TableCoin({ coins,isLoading,setChart }) {
  return (
    <div className={styles.container}>
      {isLoading ? (
        <RotatingLines strokeColor="#3874ff" strokeWidth="2"/>
        ) : ( <table className={styles.table}>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Name</th>
            <th>Price</th>
            <th>24h</th>
            <th>Total Volume</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <TableRow coin={coin} key={coin.id} setChart={setChart} />
          ))}
        </tbody>
      </table>)}
    </div>
  );
}
export default TableCoin;
const TableRow = ({
  coin: {
    name,
    image,
    symbol,
    total_volume,
    current_price,
    price_change_percentage_24h : price_change,
  },
  setChart,
}) => {

  const showHandler = () => {
    setChart(true);
  }
  return (
    <tr>
      <td>
        <div className={styles.symbol} onClick={showHandler}>
          <img src={image} alt="" />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>
        $
        {typeof current_price === "number"
          ? current_price.toLocaleString()
          : "N/A"}
      </td>

      <td className={price_change > 0 ? styles.success : styles.error}>
        {typeof price_change === "number"
          ? price_change.toFixed(2) + "%"
          : "N/A"}
      </td>
      <td>{total_volume.toLocaleString()}</td>
      <td>
        <img
          src={price_change > 0 ? chartUp : chartDown}
          alt={name}
        />
      </td>
    </tr>
  );
};
