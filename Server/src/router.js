const express = require('express');
const router = express.Router();
const pC = require('../src/productComponent');
const bC = require('../src/baksetComponent');
const uC = require('../src/userAccountComponent');
const productComponent = new pC;
const basketComponent = new bC;
const userAccountComponent = new uC;

router.get('/', function(req, res, next){
   res.send('myShop API Work!');
});

router.get(['/product'], function(req, res, next){
   let myreq = null;
   console.log(req.query);
   if (req.query.productId){
      console.log("id");
      myreq = productComponent.getProductId(req.query.productId)
      res.send(myreq);
      next();
   }
   else if (req.query.category){
      console.log("category");
      myreq=productComponent.getProductCatigory(req.query.category);
      res.send(myreq);
      next();
   } else {
      myreq=productComponent.getProductAll();
      console.log("all");
      res.send(myreq);
      next();
   }
});

router.post('/product', function(req, res, next){
   console.log("update product");
   productComponent.updateProduct(req.body)
   res.sendStatus(200);
});

router.get('/basket', function(req, res, next){
   console.log("basket get");
   res.send(basketComponent.getBasket());
});

router.post('/basket', function(req, res, next){
   console.log("basket " + req.body.event);
   if (req.body.event){
      switch (req.body.event){
         case "add":
            basketComponent.addBasketItem(req.body.productId);
            break;
         case "dell":
            basketComponent.removeBasketIten(req.body.productId);
            break;
         case "productUp":
            basketComponent.basketitemUp(req.body.productId);
            break;
         case "productDown":
            basketComponent.basketitemDown(req.body.productId);
            break;
      }
   }   
   res.sendStatus(200);
});

router.post('/userAccount', function(req, res, next){
   console.log("userAccount " + req.body.event);
   if (req.body.event) {
      switch (req.body.event){
         case "login":
            user = userAccountComponent.userLogin(req.body.data);
            if (user) {
               // res.sendStatus(500);
               res.send(JSON.stringify(user));
            }else {
               res.sendStatus(500);
            }
            break;
         case "registration":
            responce = userAccountComponent.createUserAccount(req.body.data);
            console.log(JSON.stringify(responce))
            if (responce) {
               // res.sendStatus(500);
               res.send(JSON.stringify(responce));
            }else {
               res.sendStatus(500);
            }
            break;
      }
   } else {
      res.sendStatus(500);
   }
});



module.exports = router;







// router.post('/', function(req, res, next){
//    console.log(req);
//    res.send('post');
// })