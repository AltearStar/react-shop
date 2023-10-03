import React, { useContext } from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import useProduct from '../hooks/useProduct';
import ButtonBase from './UI/ButtonBase';
import ButtonFavorite from './UI/ButtonFavorite';
import RatingBlock from './UI/RatingBlock';
import { BasketContext } from '../context/BasketContext';
import BasketAPI from '../api/BasketAPI';
import ButtonAddToCard from './UI/ButtonAddToCard';

const ProductBlock = ({product}) => {
   let productDisplay = useProduct(product);
   let navigate = useNavigate();

   const productBlockClickEvent = (event) =>{
      event.stopPropagation();
      navigate('../product/' + product.id);
   }

   // const addProductToBasket = async (event) => {
   //    event.stopPropagation();
   //    await BasketAPI().BasketAdd(productDisplay.id);
   //    updateBasketGlobal();
   // }

   return (
      <div className='product-block' onClick={productBlockClickEvent}>
         
         <div className='product-block__image'><img alt={'product-img'} src={productDisplay.image} /></div>
         <div className='product-block__favorite'><ButtonFavorite value={productDisplay.isFavorite} myClickEvent={productDisplay.updateFavoriteParamether}/></div>
         <div className='product-block__cost'>{productDisplay.cost}Р</div>
         <div className='product-block__name'>{productDisplay.name}</div>
         <div className='product-block__rating'><RatingBlock value={productDisplay.rating} /></div>
        
         <div className='product-block__button'> <ButtonAddToCard product={productDisplay}/> </div>
      </div>
   );
};

export default ProductBlock;