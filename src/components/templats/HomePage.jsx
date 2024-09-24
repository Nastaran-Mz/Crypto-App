import { useState } from "react";
import { useEffect } from "react";
import { TableCoin } from "../modules/Tablecoin";


export function Homepage() {
  const [coins, Setcoins] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per-page=20&page=1&sparkline=false&local=en&x_cg_demo_api_key=CG-53sb6M8EEhHpTNaCnM3ncsKY"
    )
      .then((res) => res.json())
      .then((json) => Setcoins(json));
  }, []);

  return (
    <>
      <div>
         <TableCoin coins={coins}/>
      </div>
    </>
  );
}
