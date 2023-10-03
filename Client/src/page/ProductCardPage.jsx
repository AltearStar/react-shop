import React, { useEffect, useState } from "react";
import GetProduct from "../api/GetProduct";
import ProductCard from "../components/ProductCard";
import ProductTile from "../components/ProductTile";
import BaseLoader from "../components/UI/BaseLoader";
import useLoadingdata from "../hooks/useLoadingData";
import useProductList from "../hooks/useProductList";
import { useParams } from "react-router-dom";

const ProductCardPage = () => {
   let params = useParams();
   let [emptyProduct, setEmptyProduct] = useState(false);
   let [product, setProduct] = useState({});
   let [productList, setProductList] = useState({});
   let [productListDisplay, updateSortParamether] = useProductList(productList);
   let [isProductCardLoading, priductCardLoadFunction] = useLoadingdata();
   let [isProductListLoading, priductListLoadFunction] = useLoadingdata();

   useEffect(() => {
      priductCardLoadFunction(async () => {
         let productData = (await GetProduct({id: params.productId}));
         if (!productData){
            setEmptyProduct(true);
         }else {
            setEmptyProduct(false);
            await setProduct(productData);
            priductListLoadFunction(async () => {
               setProductList(await GetProduct({ category: product.category }));
            });
         }
      });
   }, [params.productId]);

   useEffect(() => {
      if (product){
         priductListLoadFunction(async () => {
            setProductList(await GetProduct({ category: product.category }));
         })
      };
   }, [product]);

   if (emptyProduct) return (<div className="Prodict-Card-Page"><h1>Упс, продукт не найден</h1></div>)

   return (
      <div className="Prodict-Card-Page">
         {isProductCardLoading ? (
            <BaseLoader />
         ) : (
            <ProductCard product={product} />
         )}
         <h1>Товары из данной категории:</h1>
         {isProductListLoading || isProductCardLoading ? (
            <BaseLoader />
         ) : (
            <ProductTile productList={productListDisplay} />
         )}
      </div>
   );
};

export default ProductCardPage;
