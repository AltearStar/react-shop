import axios from "axios";
import ServerConfig from "./ServerConfig";
import { compile } from "sass";

function BasketAPI() {
   let basketId = 0;
   let baskeList = [];

   let BasketGetData = async () => {
      console.log("get");
      try{
         let responce = await axios({
            method: "get",
            url: ServerConfig + "basket",
            responseType: "stream",
         });
         baskeList = JSON.parse(responce.data);
         return baskeList;
      } catch (e){
         console.error(e);
      }     
   };

   let BasketAdd = (newProductId) => {
      try{
         let responce = axios({
            method: "post",
            url: ServerConfig + "basket",
            data: {
               event: 'add',
               productId: newProductId
            }
         });
      } catch (e){
         console.error(e);
      }
   };

   let BasketDell = (delProductId) => {
      try{
         let responce = axios({
            method: "post",
            url: ServerConfig + "basket",
            data: {
               event: 'dell',
               productId: delProductId
            }
         });
      } catch (e){
         console.error(e);
      }
   };

   let BasketProductUp = (newProductId) => {
      console.log("up");
      try{
         let responce = axios({
            method: "post",
            url: ServerConfig + "basket",
            data: {
               event: 'productUp',
               productId: newProductId
            }
         });
      } catch (e){
         console.error(e);
      }
   };

   let BasketProductDown = (newProductId) => {
      try{
         let responce = axios({
            method: "post",
            url: ServerConfig + "basket",
            data: {
               event: 'productDown',
               productId: newProductId
            }
         });
      } catch (e){
         console.error(e);
      }
   };
   return {
      BasketGetData,
      BasketAdd,
      BasketDell,
      BasketProductUp,
      BasketProductDown,
   };
}

function timeout(time) {
   return new Promise((resolve) => {
      setTimeout(resolve, time);
   });
}

export default BasketAPI;
