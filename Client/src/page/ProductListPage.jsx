import React, { useEffect, useState } from "react";
import GetProduct from "../api/GetProduct";
import FilterPanel from "../components/FilterPanel";
import ProductTile from "../components/ProductTile";
import BaseLoader from "../components/UI/BaseLoader";
import useLoadingdata from "../hooks/useLoadingData";
import useProductList from "../hooks/useProductList";
import ErrorBoundary from "../utils/ErrorBoundary";

const ProductListPage = () => {
   let [productList, setProductList] = useState([]);
   let [isProductLoading, loadProductList] = useLoadingdata();
   let [productListDisplay, updateSortParamether] = useProductList(productList);

   useEffect(() => {
      loadProductList(async () => {
         setProductList(await GetProduct());
      });
   }, []);

   return (
      <div className="Product-List-Page">
         <FilterPanel updateSortParamether={updateSortParamether} />
         {isProductLoading ? (
            <BaseLoader />
         ) : (
            <ErrorBoundary>
               <ProductTile productList={productListDisplay} />
            </ErrorBoundary>
         )}
      </div>
   );
};

export default ProductListPage;
