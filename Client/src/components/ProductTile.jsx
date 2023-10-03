import React, { useEffect, useState } from "react";
import ProductBlock from "./ProductBlock";
import { Link } from "react-router-dom";

const ProductTile = ({ productList }) => {
   let [productListDisplay, setProductListDisplay] = useState({});
   useEffect(() => {
         setProductListDisplay(productList);
   }, [productList]);

   if (!productList.length)
      return <div className="product-tile">Продукты отсутствуют</div>;

   return (
      <div className="product-tile">
         {productListDisplay.length
            ? productListDisplay.map((product, index) => {
                 return <ProductBlock key={product.id} product={product} />;
              })
            : ""}
      </div>
   );
};

export default ProductTile;
