import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BasketContext } from "../context/BasketContext";
import ButtonBase from "./UI/ButtonBase";
import { UserContext } from "../context/UserContext";

const Header = () => {
   let [basketCount, setBasketCount] = useState();
   let { basketGlobal } = useContext(BasketContext);
   let { userData, setUserData } = useContext(UserContext);
   let [mobileMenuOpen, setSobileMenuOpen] = useState(false);
   const [windowSize, setWindowSize] = useState([
      window.innerWidth,
      window.innerHeight,
   ]);
   useEffect(() => {
      const handleWindowResize = () => {
         setWindowSize([window.innerWidth, window.innerHeight]);
         setSobileMenuOpen(false);
      };

      window.addEventListener("resize", handleWindowResize);

      return () => {
         window.removeEventListener("resize", handleWindowResize);
      };
   }, []);
   useEffect(() => {
      if (basketGlobal) {
         setBasketCount(basketGlobal.length);
      }
   }, [basketGlobal]);

   return (
      <div className="header">
         <div className="header-content">
            <div className="header-content__left">
               <Link to="/">
                  <ButtonBase>Главная</ButtonBase>
               </Link>
            </div>
            <h2>MyMugazine</h2>
            {basketCount >= 0 && userData.userId && windowSize[0] < 800 ? (
               <div className="basket-counter">{basketCount}</div>
            ) : (
               ""
            )}
            {windowSize[0] < 800 ? (
               <ButtonBase
                  onClick={() => {
                     setSobileMenuOpen(true);
                  }}>
                  Меню
               </ButtonBase>
            ) : (
               ""
            )}
            <div
               onClick={(e) => {
                  e.stopPropagation();
                  setSobileMenuOpen(false);
               }}
               className="Base-Popup__substrate"
               style={
                  mobileMenuOpen ? { display: "block" } : { display: "none" }
               }
            />
            <div
               className="header-content__right"
               style={mobileMenuOpen ? { right: "0" } : { right: "-62vw" }}
            >
               {userData.userId ? (
                  <Link to="/">
                     <ButtonBase
                        onClick={() => {
                           setUserData({ userId: null });
                           localStorage.removeItem("userId");
                           setSobileMenuOpen(false);
                        }}>
                        Выход
                     </ButtonBase>
                  </Link>
               ) : (
                  <Link to="/login">
                     <ButtonBase
                        onClick={() => {
                           setSobileMenuOpen(false);
                        }}>
                        Вход
                     </ButtonBase>
                  </Link>
               )}
               {userData.userId ? (
                  <Link to="/basket">
                     <ButtonBase
                        onClick={() => {
                           setSobileMenuOpen(false);
                        }}>
                        Корзина
                     </ButtonBase>
                  </Link>
               ) : (
                  ""
               )}

               {basketCount >= 0 && userData.userId && windowSize[0] >= 800 ? (
                  <div className="basket-counter">{basketCount}</div>
               ) : (
                  ""
               )}
            </div>
         </div>
      </div>
   );
};

export default Header;
