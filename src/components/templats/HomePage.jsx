import { useState } from "react";
import { useEffect } from "react";

import { getCoinList } from "../../services/cryptoApi";
import TableCoin from "../modules/Tablecoin";
import { Paginaton } from "../modules/Paginaton";



 function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading,setIsLoading] = useState (true);
  const [page,setPage] = useState(1);
  useEffect(() => {
    setIsLoading(true);
   const getData = async () => {
    const res = await fetch(getCoinList(page));
    const json = await res.json();
    setCoins(json);
    setIsLoading(false);
   };
   getData();
  }, [page]);

  return (
    <>
      <div>
      <Paginaton page={page} setPage={setPage}/>
         <TableCoin coins={coins} isLoading={isLoading}/>
         
      </div>
    </>
  );
}
export default HomePage;