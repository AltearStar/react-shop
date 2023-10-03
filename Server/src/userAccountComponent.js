class userAccountComponent {
   constructor() {
      this.userList = [
         {
            id: 1,
            fullname: "User FIO 1",
            login: "User 1",
            password: "Password 1",
         },
         {
            id: 2,
            fullname: "User FIO 2",
            login: "User 2",
            password: "Password 2",
         },
         {
            id: 3,
            fullname: "User FIO 3",
            login: "User 3",
            password: "Password 3",
         },
         {
            id: 4,
            fullname: "User FIO 4",
            login: "User 4",
            password: "Password 4",
         },
         { id: 5, fullname: "User FIO 5", login: "1", password: "1" },
      ];
   }

   userLogin(userData) {
      console.log(userData);
      let elementIndex = this.userList.findIndex((item) => {
         return (
            item.login == userData.login && item.password == userData.password
         );
      });
      if (elementIndex >= 0) {
         return { userId: this.userList[elementIndex].id };
      }
      return;
   }

   createUserAccount(userData) {
      const newId = Date.now();
      if (
         this.userList.filter((item) => {
            return (
               item.login == userData.login &&
               item.password == userData.password
            );
         }).length > 0
      ){
         
         return { error: "UserExist" };
      } else {
         this.userList.push({
            id: newId,
            fullname: userData.fullname,
            login: userData.login,
            password: userData.password,
         });
      }      
      return {userId: newId};
   }

   // getProductAll(){
   //    return JSON.stringify(this.productList);
   // }
}

module.exports = userAccountComponent;
