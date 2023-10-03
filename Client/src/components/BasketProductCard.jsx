import React, { useEffect, useState } from "react";
import usePopUp from "../hooks/usePopUp";
import useProduct from "../hooks/useProduct";
import ButtonFavorite from "./UI/ButtonFavorite";
import CounterBlock from "./UI/CounterBlock";

const BasketProductCard = ({ basketProduct, updateBasket }) => {
   let productDisplay = useProduct(basketProduct.product);
   let [countDisplay, setCountDisplay] = useState();
   let [DeletePopUp, showDeletePopUp] = usePopUp(
      {
         h1: "Подтвердите удаление",
         h2: "Вы действительно хотите удалить данный товар из корзины?",
         buttonCalback: "Удалить",
         buttonCancel: "Отмена",
      },
      () => {
         updateBasket({
            event: "remove",
            productId: productDisplay.id,
         });
      }
   );

   useEffect(() => {
      setCountDisplay(basketProduct.count);
   }, [basketProduct.count]);

   if (!productDisplay) return <div></div>;

   let productUpdate = (event) => {
      switch (event.target.value) {
         case "down":
            if (countDisplay <= 1) {
               showDeletePopUp();
            } else {
               setCountDisplay(countDisplay - 1);
               updateBasket({
                  event: "quantityDown",
                  productId: productDisplay.id,
               });
            }
            break;
         case "up":
            setCountDisplay(countDisplay + 1);
            updateBasket({
               event: "quantityUp",
               productId: productDisplay.id,
            });
            break;
      }
   };

   return (
      <div className="Product-Basket-Card">
         {DeletePopUp()}
         <div className="Product-Basket-Card__Image">
            <img alt={"product-img"} src={productDisplay.image} />
         </div>
         <div className="Product-Basket-Card__Information">
            <div className="Product-Basket-Card__Name">
               {productDisplay.name}
            </div>
            <div className="Product-Basket-Card__Cost">
               Цена: {productDisplay.cost}Р
            </div>
            <div className="Product-Basket-Card__Buttons">
               <ButtonFavorite
                  value={productDisplay.isFavorite}
                  myClickEvent={productDisplay.updateFavoriteParamether}
               />
               <div>
                  <CounterBlock count={countDisplay} calback={productUpdate} />
               </div>
            </div>
         </div>
      </div>
   );
};

export default BasketProductCard;
