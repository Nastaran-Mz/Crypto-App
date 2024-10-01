import { useEffect, useState } from "react";
import { searchCoin } from "../../services/cryptoApi";

export function Search({ currency, setCurrency }) {
  const [text, setText] = useState("");
  const [coins,setCoins] = useState([]);

  useEffect (() => {
    const controller = new AbortController();
    if (!text) return;

    const search = async () => {
        try{
            const res = await fetch(searchCoin(text),{signal:controller.signal});
            const json = await res.json();
            if (json.coins) {setCoins(json.coins)} else{
                alert(json.status.error_message)
            };
        }catch (error){
            if (error.name ==! "AbortError"){
                alert(error.message);
            }
        }
      
    };
    search();
    return () => controller.abort();
  },[text])

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search"
          value={text}
          onChange={(e) => setText(e.target.value)}
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
