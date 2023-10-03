import { useContext, useEffect, useState } from "react";
import BasketAPI from "../api/BasketAPI";
import GetProduct from "../api/GetProduct";
import { BasketContext } from "../context/BasketContext";
import { compile } from "sass";

function useBasket() {
   let { updateBasketGlobal } = useContext(BasketContext);
   let [basketList, setBasketList] = useState([]);
   let [basketLoading, setBasketLoading] = useState(true);

   useEffect(() => {
      setBasketLoading(true);
      (async () => {
         let basketAPI = BasketAPI();
         await setBasketWithProductsData(await basketAPI.BasketGetData());
         // updateBasketGlobal();
         setBasketLoading(false);
      })();
   }, []);

   const setBasketWithProductsData = async (basket) => {
      const productLsit = await Promise.all(
         basket.map((item) => {
            return GetProduct({id: item.productId});
         })
      );
      setBasketList(
         basket.map((item) => {
            return {
               ...item,
               product: productLsit.filter((product) => {
                  return product.id === item.productId;
               })[0],
            };
         })
      );
   };

   const updateBasket = async (args) => {
      let basketAPI = await BasketAPI();
      switch (args.event) {
         case "add":
            console.log("add");
            setBasketWithProductsData([...(await basketAPI.BasketGetData())]);
            await basketAPI.BasketAdd(args.productId);
            break;
         case "remove":
            console.log("remove");
            setBasketList(
               basketList.filter((item) => {
                  return item.productId !== args.productId ? true : false;
               })
            );
            await basketAPI.BasketDell(args.productId);
            break;
         case "quantityUp":
            basketAPI.BasketProductUp(args.productId);
            setBasketList(
               basketList.map((item) => {
                  if (item.productId === args.productId) {
                     item.count = item.count + 1;
                  }
                  return item;
               })
            );
            break;
         case "quantityDown":
            basketAPI.BasketProductDown(args.productId);
            setBasketList(
               basketList.map((item) => {
                  if (item.productId === args.productId) {
                     item.count = item.count - 1;
                  }
                  return item;
               })
            );
            break;
         default: break;
      }
      updateBasketGlobal();
   };
   
   return [basketList, updateBasket, basketLoading];
}

export default useBasket;
