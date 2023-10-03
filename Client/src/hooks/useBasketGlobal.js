import { useState } from "react";
import BasketAPI from "../api/BasketAPI";

function useBasketGlobal(){
   let [basket, setBasket] = useState([]);
   
   let updateBasketData = async () => {
      let basketAPI = BasketAPI();
      setBasket(await basketAPI.BasketGetData());
   }

   useState(()=>{
      updateBasketData();
   },[]);

   return ([basket, updateBasketData]);
}

export default useBasketGlobal;