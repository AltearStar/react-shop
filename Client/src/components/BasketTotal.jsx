import React, { useEffect, useState } from "react";
import ButtonBase from "./UI/ButtonBase";

const BasketTotal = ({ basketList, basketLoading }) => {
   let [totalCost, setTotalCost] = useState(0);

   useEffect(() => {
      if (!basketLoading) {
         setTotalCost(
            basketList.length > 0
               ? basketList
                    .map((item) => item.product.cost * item.count)
                    .reduce((count, item) => item + count)
               : 0
         );
      }
   }, [basketList, basketLoading]);

   if (basketList.length < 1) return <div></div>;

   return (
      <div className="Basket-Total">
         <h2>Продуктов к заказу: {basketList.length}</h2>
         <h1>Общая сумма заказа: {totalCost}</h1>
         <ButtonBase>Оформить заказ</ButtonBase>
      </div>
   );
};

export default BasketTotal;
