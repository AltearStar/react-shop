import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import RegistrationForm from "../components/RegistrationForm";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
   const [createAccFlg, setCreateAccFlg] = useState(false);
   const navigate = useNavigate();

   onpopstate = (event) => {
      if (createAccFlg){
         setCreateAccFlg(false);
      } else{
         navigate("/");
      }
   };

   const LoginCallback = (event) => {
      if (event.target.name === "Registration") {
         event.stopPropagation();
         navigate("/login");
         setCreateAccFlg(true);
      }
      if (event.target.name === "Login") {
         event.stopPropagation();
         setCreateAccFlg(false);
      }
   };

   return (
      <div className="Login-Page">
         {!createAccFlg ? (
            <LoginForm callback={LoginCallback} />
         ) : (
            <RegistrationForm callback={LoginCallback} />
         )}
      </div>
   );
};

export default LoginPage;
