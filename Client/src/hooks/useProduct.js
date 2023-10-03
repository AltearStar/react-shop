import { useEffect, useState } from "react";
import postProduct from "../api/PostProduct";

function useProduct(product) {
   let [productDisplay, setProductDisplat] = useState({});

   useEffect(() => {
      if (product) {
         product.updateFavoriteParamether = updateFavoriteParamether;
         setProductDisplat({ ...product });
      }
   }, [product]);

   const updateFavoriteParamether = (value) => {
      product.isFavorite = value;

      postProduct(product);
      setProductDisplat({ ...product });
   };

   return productDisplay;
}

export default useProduct;
