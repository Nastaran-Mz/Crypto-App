import { useEffect, useState } from "react";
import { searchCoin } from "../../services/cryptoApi";

export function Search({ currency, setCurrency }) {
  const [text, setText] = useState("");
  const [coins,setCoins] = useState([]);

  useEffect (() => {
    if (!text) return;

    const search = async () => {
         const res = await fetch (searchCoin(text));
         const json = await res.json();
         if (json.coins) setCoins(json.coins);
    }
    search();
  },[text])

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search"
          value={text}
          onChange={(e) => setCurrency(e.target.value)}
        />
        <select value={currency} onChange={(e) => setText(e.target.value)}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="jpy">JPY</option>
        </select>
      </div>
    </>
  );
}
