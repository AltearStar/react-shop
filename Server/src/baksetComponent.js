class basketComponent {
   constructor() {
      this.baskeList = [
         { productId: 2, count: 1 },
         { productId: 3, count: 4 },
      ];
   }

   getBasket() {
      return JSON.stringify(this.baskeList);
   }

   addBasketItem(newProductId) {
      const itemIndex = this.baskeList.findIndex((item) => {
         return item.productId == newProductId;
      });
      if (itemIndex > -1) {
         this.baskeList[itemIndex].count = this.baskeList[itemIndex].count + 1;
      } else {
         this.baskeList.push({ productId: newProductId, count: 1 });
      }
   }

   removeBasketIten(productId) {
      this.baskeList = this.baskeList.filter((item) => {
         return item.productId !== productId;
      });
   }

   basketitemUp(productId) {
      const itemIndex = this.baskeList.findIndex((item) => {
         return item.productId === productId;
      });
      this.baskeList[itemIndex].count = this.baskeList[itemIndex].count + 1;
   }

   basketitemDown(productId) {
      const itemIndex = this.baskeList.findIndex((item) => {
         return item.productId === productId;
      });
      this.baskeList[itemIndex].count = this.baskeList[itemIndex].count - 1;
   }
}

module.exports = basketComponent;
