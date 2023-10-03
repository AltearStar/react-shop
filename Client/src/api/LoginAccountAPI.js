import ServerConfig from "./ServerConfig";

function LoginAccountAPI(){
   const Login = async (accountData) =>{
      try{
         let request = {event: "login", data: accountData}
         let response = await fetch(ServerConfig + "userAccount",{
            method: "POST",
            headers: {
               "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(request),
         });
         if (response.status === 200){
            response = await response.json();
            return response.userId
         } else return -1;
      }catch(e){
         console.log(e);
         return -1;
      }      
   }

   const Registration = async (newAccData) =>{
      try{
         let request = {event: "registration", data: newAccData};
         let response = await fetch(ServerConfig + "userAccount",{
            method: "POST",
            headers: {
               "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(request),
         });
         if (response.status === 200){
            response = await response.json();
            return response;
         }else new Error('Ошибка при регистрации');
      }
      catch (e){
         console.error(e);
      }
      


   }
   return {Login, Registration};
   
}

export default LoginAccountAPI;