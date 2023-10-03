import React, { useContext, useEffect, useState } from "react";
import BasketProductCard from "../components/BasketProductCard";
import BasketTotal from "../components/BasketTotal";
import BaseLoader from "../components/UI/BaseLoader";
import useBasket from "../hooks/useBasket";
import { BasketContext } from "../context/BasketContext";
import MouseMove from "../utils/MouseMove";

const ProductBasketPage = () => {
   let [basketList, updateBasket, basketLoading] = useBasket();
   console.log(basketList)

   if (!basketLoading && basketList.length === 0)
      return (
         <div className="Product-Basket-Page">
            <h1>Корзина</h1>
            <h2 className="empty">Корзина пуста</h2>
         </div>
      );
   return (
      <div className="Product-Basket-Page">
         <h1>Корзина</h1>
         <div className="Product-Basket-Page__productBlock">
            {basketLoading ? (
               <BaseLoader />
            ) : (
               basketList.map((item, index) => {
                  return (
                     <BasketProductCard
                        key={item.productId}
                        basketProduct={item}
                        updateBasket={updateBasket}
                     />
                  );
               })
            )}
         </div>
         <BasketTotal basketList={basketList} basketLoading={basketLoading} />
      </div>
   );
};

export default ProductBasketPage;
