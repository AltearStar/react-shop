import ServerConfig from "./ServerConfig";

async function postProduct(product) {
   console.log(product);

   try {
      let response = await fetch(ServerConfig + "product", {
         method: "POST",
         headers: {
            "Content-Type": "application/json;charset=utf-8",
         },
         body: JSON.stringify(product),
      });
   } catch (e) {
      console.log(e);
   }
}
export default postProduct;
