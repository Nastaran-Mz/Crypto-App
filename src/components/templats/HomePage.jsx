import { useState } from "react";
import { useEffect } from "react";

import { getCoinList } from "../../services/cryptoApi";
import TableCoin from "../modules/Tablecoin";
import { Paginaton } from "../modules/Paginaton";



 function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading,setIsLoading] = useState (true);
  useEffect(() => {
   const getData = async () => {
    const res = await fetch(getCoinList());
    const json = await res.json();
    setCoins(json);
    setIsLoading(false);
   };
   getData();
  }, []);

  return (
    <>
      <div>
      <Paginaton />
         <TableCoin coins={coins} isLoading={isLoading}/>
         
      </div>
    </>
  );
}
export default HomePage;