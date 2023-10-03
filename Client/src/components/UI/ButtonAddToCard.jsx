import React, { useContext } from 'react';
import { BasketContext } from '../../context/BasketContext';
import BasketAPI from '../../api/BasketAPI';
import ButtonBase from './ButtonBase';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const ButtonAddToCard = ({product}) => {
   let {updateBasketGlobal} = useContext(BasketContext);
   let [buttonClick, setButtonClick] = useState(false);
   let { userData } = useContext(UserContext);
   let navigator = useNavigate();
   
   let addToCard = (event) => {
      event.stopPropagation();
      if (!userData.userId){
         navigator('/login');
      }
      else if (buttonClick){
         navigator('/basket');
      }else{
         setButtonClick(true);
         (async ()=>{
            await BasketAPI().BasketAdd(product.id);
            updateBasketGlobal();
         })();
      }
   }

   return (
      <div>
          <ButtonBase classEffectStyle={buttonClick ? 'secondary':''} onClick={addToCard}>{!buttonClick ? 'В корзину' : 'Перейти в корзину'}</ButtonBase>
      </div>
   );
};

export default ButtonAddToCard;