import React, { useContext, useEffect, useState } from "react";
import ButtonBase from "./UI/ButtonBase";
import ButtonFavorite from "./UI/ButtonFavorite";
import RatingBlock from "./UI/RatingBlock";
import postProduct from "../api/PostProduct";
import useProduct from "../hooks/useProduct";
import { BasketContext } from "../context/BasketContext";
import ButtonAddToCard from "./UI/ButtonAddToCard";

const ProductCard = ({product}) => {
   // let [basketList, updateBasket] = useContext(BasketContext);
   let productDisplay = useProduct(product);

   if (!productDisplay) return <div></div>

   return (
      <div className="Product-Card">
         <div className="Product-Card__Image">
            <img  alt={'product-img'} src={productDisplay.image} />
         </div>
         <div className="Product-Card__Information">
            <div className="Product-Card__Rating">
               <RatingBlock value={productDisplay.rating} />
            </div>
            <div className="Product-Card__Name">{productDisplay.name}</div>
            <div className="Product-Card__Description">
               {productDisplay.description}
            </div>
            <div className="Product-Card__Cost">Цена: {productDisplay.cost}Р</div>
            <div className="Product-Card__Buttons">
               <ButtonFavorite value={productDisplay.isFavorite} myClickEvent={productDisplay.updateFavoriteParamether} />
               <ButtonAddToCard product={productDisplay}/>
            </div>
         </div>
      </div>
   );
};

export default ProductCard;
