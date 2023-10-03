import ServerConfig from "./ServerConfig";
// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

// const api = new WooCommerceRestApi({
//   url: "http://example.com",
//   consumerKey: "ck_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
//   consumerSecret: "cs_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
//   version: "wc/v3"
// });


async function GetProduct(searchSpeck) {
   let productList = [];
   try{
      if (!searchSpeck) {
         let response = await fetch(ServerConfig + "product");
         productList = await response.json();
         return productList;
      }
      if (searchSpeck.id) {
         let response = await fetch(ServerConfig + "product?" + new URLSearchParams({
            productId: searchSpeck.id,
        }));
         productList = await response.json();
         return productList;
      }
      if (searchSpeck.category) {
         let response = await fetch(ServerConfig + "product?" + new URLSearchParams({
            category: searchSpeck.category,
        }));
         productList = await response.json();
         return productList;
      }
   } catch (e) {
      console.log(e);
   }

   return productList;
}

// export async function GetProductId(prodId) {
//    let productList = JSON.parse(localStorage.getItem("productList"));
//    await timeout(1000);
//    return productList.filter((item) => {
//       return item.id === prodId;
//    })[0];
// }

// function timeout(ms) {
//    return new Promise((resolve) => setTimeout(resolve, ms));
// }

export default GetProduct;
