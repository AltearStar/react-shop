class productComponent{
   constructor(){
      const fs = require('fs');
      const chipasu = "data:image/gif;base64,"+fs.readFileSync("src/img/chipasu.png", 'base64');
      this.productList = [
         {id: 1, name: "Chipasu ochen vkusnoe. Red Cost", cost: 150, description:'Описание Чипасу', isFavorite: true, image: chipasu, rating: 3, category: 'chipasu'},
         {id: 2, name: "Chipasu 2", cost: 200, description:'Описание Чипасу', isFavorite: false, image: chipasu, rating: 4, category: 'chipasu'},
         {id: 3, name: "Chipasu 3", cost: 250, description:'Описание Чипасу', isFavorite: true, image: chipasu, rating: 1.2, category: 'chipasu'},
         {id: 4, name: "Chipasu 4", cost: 650, description:'Описание Чипасу', isFavorite: false, image: chipasu, rating: 3, category: 'chipasu'},
         {id: 5, name: "Chipasu 10", cost: 550, description:'Описание Чипасу', isFavorite: false, image: chipasu, rating: 2, category: 'chipasu2'},
         {id: 6, name: "Chipasu 5", cost: 200, description:'Описание Чипасу', isFavorite: false, image: chipasu, rating: 3, category: 'chipasu2'},
         {id: 7, name: "Chipasu 9", cost: 50, description:'Описание Чипасу', isFavorite: true, image: chipasu, rating: 4, category: 'chipasu2'},
         {id: 8, name: "Chipasu 7", cost: 60, description:'Описание Чипасу', isFavorite: false, image: chipasu, rating: 3, category: 'chipasu2'},
         {id: 9, name: "Chipasu 6", cost: 90, description:'Описание Чипасу', isFavorite: false, image: chipasu, rating: 1, category: 'chipasu2'},
         {id: 10, name: "Chipasu 8", cost: 110, description:'Описание Чипасу', isFavorite: false, image: chipasu, rating: 5, category: 'chipasu2'},
         {id: 11, name: "Chitos", cost: 112, description:'Описание Чипасу', isFavorite: true, image: chipasu, rating: 5, category: 'chipasu2'},
      ];
   }

   getProductAll(){
      return JSON.stringify(this.productList);
   }

   getProductId(id){
      console.log(id);
      return JSON.stringify([...this.productList].filter((item)=>{return item.id == id})[0])
   }

   getProductCatigory(category){
      return JSON.stringify([...this.productList].filter((item)=>{return item.category == category}))
   }
   
   updateProduct(product){
      this.productList = this.productList.map((item)=>{
         if (item.id==product.id){
            return product;
         }
         return item;
      })
   }

}

module.exports = productComponent;

