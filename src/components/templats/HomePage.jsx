import { useState } from "react";
import { useEffect } from "react";

import { getCoinList } from "../../services/cryptoApi";
import { Tablecoin } from "../modules/Tablecoin";



export function Homepage() {
  const [coins, Setcoins] = useState([]);
  useEffect(() => {
   const getData = async () => {
    const res = await fetch(getCoinList());
    const json = await res.json();
    Setcoins(json);
   }
   getData();
  }, []);

  return (
    <>
      <div>
         <Tablecoin coins={coins}/>
      </div>
    </>
  );
}
