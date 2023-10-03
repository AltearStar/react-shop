import React, { Suspense, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import BaseLoader from "./components/UI/BaseLoader";
import { BasketContext } from "./context/BasketContext";
import useBasketGlobal from "./hooks/useBasketGlobal";
import "./styles/App.scss";
import { UserContext } from "./context/UserContext";
import { useEffect } from "react";
import RoutesList from "./router/RoutesList";
function App() {
   let [basketGlobal, updateBasketGlobal] = useBasketGlobal();
   let [userData, setUserData] = useState({ userId: null });
   useEffect(()=>{
      const userId = localStorage.getItem("userId");
      if(userId){
         setUserData({ userId: userId })
      }
   },[]);

   return (
      <div className="App">
         <UserContext.Provider value={{ userData, setUserData }}>
            <BasketContext.Provider
               value={{ basketGlobal, updateBasketGlobal }}
            >
               <BrowserRouter>
                  <Header />
                     <RoutesList userId={userData.userId}/>
               </BrowserRouter>
            </BasketContext.Provider>
         </UserContext.Provider>
      </div>
   );
}

export default App;
