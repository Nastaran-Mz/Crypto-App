import { useState } from "react";
import { useEffect } from "react";

import { getCoinList } from "../../services/cryptoApi";
import TableCoin from "../modules/Tablecoin";
import { Paginaton } from "../modules/Paginaton";
import { Search } from "../modules/Search";


 function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading,setIsLoading] = useState (true);
  const [page,setPage] = useState(1);
  const [currency,setCurrency] = useState("usd");
  useEffect(() => {
    setIsLoading(true);
   const getData = async () => {
    try{
      const res = await fetch(getCoinList(page , currency));
      const json = await res.json();
      setCoins(json);
      setIsLoading(false);
    }catch(error){
      console.log(error);
    }
   };
   getData();
  }, [page , currency]);

  return (
    <>
      <div>
         <Search currency={currency} setCurrency={setCurrency}/>
         <TableCoin coins={coins} isLoading={isLoading}/>
         <Paginaton page={page} setPage={setPage}/>
         
      </div>
    </>
  );
}
export default HomePage;