import React from "react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import BaseLoader from "../components/UI/BaseLoader";

const RoutesList = ({ userId }) => {
   const ProductListPage = React.lazy(() => import("../page/ProductListPage"));
   const ProductCardPage = React.lazy(() => import("../page/ProductCardPage"));
   const ProductBasketPage = React.lazy(() =>import("../page/ProductBasketPage"));
   const LoginPage = React.lazy(() => import("../page/LoginPage"));

   if (userId) {
      return (
         <Suspense fallback={<BaseLoader />}>
            <Routes>
               <Route path="*" Component={ProductListPage} />
               <Route path="product/:productId" Component={ProductCardPage} />
               <Route path="basket" Component={ProductBasketPage} />
            </Routes>
         </Suspense>
      );
   } else
      return (
         <Suspense fallback={<BaseLoader />}>
            <Routes>
               <Route path="*" Component={ProductListPage} />
               <Route path="product/:productId" Component={ProductCardPage} />
               <Route path="login" Component={LoginPage} />
            </Routes>
         </Suspense>
      );
};

export default RoutesList;
