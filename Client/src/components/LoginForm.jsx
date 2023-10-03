import React, { useContext } from "react";
import { Field, Form } from "react-final-form";
import DataValidateService from "../utils/DataValidateService";
import BaseInput from "./UI/BaseInput";
import ButtonBase from "./UI/ButtonBase";
import LoginAccountAPI from "../api/LoginAccountAPI";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const LoginForm = ({callback}) => {
   const {Login} = LoginAccountAPI();
   let { setUserData } = useContext(UserContext);
   const navigator = useNavigate();
   const LoginAccount = async (value)=>{
      const userId= await Login(value);
      if (userId>-1){
         setUserData({userId: userId});
         localStorage.setItem("userId", userId);
         navigator('../')
      } else {
         alert("Ошибка входа");
      }
   };
   
   const fieldNameList = {
      login: "Логин",
      password: "Пароль",
   }

   const onSubmit = (values) => {
      myDataValidator(values) && LoginAccount(values)
   };

   const myDataValidator = (value) => {
      const ruleSet = [
         {login: "IS NOT NULL"},
         {password: "IS NOT NULL"},
      ];
      const {errorText} = DataValidateService(value, ruleSet, fieldNameList);
      if (errorText) alert(errorText);
      return errorText ? false : true;
   }

   return (
      <div>
         <Form
            onSubmit={onSubmit}
            render={(props) => {
               return (
               <form className="Base-Form" onSubmit={props.handleSubmit}>
                  <h1>Вход</h1>
                  <h2>Введите данные для входа:</h2>
                  <Field
                     name="login"
                     render={(props) => (
                        <BaseInput
                           name={props.input.name}
                           value={props.input.value}
                           onChange={props.input.onChange}
                           placeholder={fieldNameList.login}
                        />
                     )}
                  />
                  <Field
                     name="password"
                     render={(props) => (
                        <BaseInput
                           name={props.input.name}
                           value={props.input.value}
                           onChange={props.input.onChange}
                           placeholder={fieldNameList.password}
                        />
                     )}
                  />
                  <ButtonBase name='Login' type="submit" style={{ width: "100px" }}>Войти</ButtonBase>
                  <ButtonBase name='Registration' type="button" onClick={callback} classEffectStyle="secondary">Регистрация</ButtonBase>
               </form>);
            }}
         />
      </div>
   );
};

export default LoginForm;
