import React from "react";
import { Form, Field } from "react-final-form";
import BaseInput from "./UI/BaseInput";
import ButtonBase from "./UI/ButtonBase";
import DataValidateService from "../utils/DataValidateService";
import LoginAccountAPI from "../api/LoginAccountAPI";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const RegistrationForm = ({callback}) => {
   const {Registration} = LoginAccountAPI();
   let { setUserData } = useContext(UserContext);
   const navigator = useNavigate();
   const CreateAccountApi = async (value)=>{
      const userId= await Registration(value);
      if (userId.userId>-1){
         setUserData({userId: userId.userId});
         localStorage.setItem("userId", userId);
         navigator('../')
      } else {
         alert("Ошибка регистрации: " + userId.error);
      }
   };

   const fieldNameList = {
      fullname: "ФИО",
      birthday: "Дата рождения",
      login: "Логин",
      password: "Пароль",
   }

   const onSubmit = (values) => {
      myDataValidator(values) && CreateAccountApi(values);
   };

   const myDataValidator = (value) => {
      const ruleSet = [
         {fullname: "IS NOT NULL"},
         {birthday: "IS NOT NULL"},
         {login: "IS NOT NULL"},
         {password: "IS NOT NULL"},
      ];
      const {errorText} = DataValidateService(value, ruleSet, fieldNameList);
      if (errorText) alert(errorText);
      return errorText ? false : true;
   }

   return (
      <div>
         <ButtonBase onClick={callback} name="Login" classEffectStyle="textbutton">{`<`} вернукться на экран входа</ButtonBase>
         <Form
            onSubmit={onSubmit}
            // validate={validate}
            render={(props) => {
               return (
                  <form className="Base-Form" onSubmit={props.handleSubmit}>
                     <h1>Регистрация</h1>
                     <h2>
                        Пожалуйста, введите свои данные для создания учетной
                        записи
                     </h2>
                     <div>
                        <label>Ваше ФИО:</label>
                        <Field
                           name="fullname"
                           render={(props) => (
                              <BaseInput
                                 name={props.input.name}
                                 value={props.input.value}
                                 onChange={props.input.onChange}
                                 placeholder={fieldNameList.fullname}
                              />
                           )}
                        />
                     </div>
                     <div>
                        <label>Дата рождения:</label>
                        <Field
                           name="birthday"
                           render={(props) => (
                              <BaseInput
                                 name={props.input.name}
                                 value={props.input.value}
                                 onChange={props.input.onChange}
                                 type="date"
                                 placeholder={fieldNameList.birthday}
                              />
                           )}
                        />
                     </div>
                     <div>
                        <label>Логин:</label>
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
                     </div>
                     <div>
                        <label>Пароль:</label>
                        <Field
                           name="password"
                           render={(props) => (
                              <BaseInput
                                 name={props.input.name}
                                 value={props.input.value}
                                 onChange={props.input.onChange}
                                 type="password"
                                 placeholder={fieldNameList.password}
                              />
                           )}
                        />
                     </div>
                     <ButtonBase type="submit">Создать аккаунт</ButtonBase>
                  </form>
               );
            }}
         />
      </div>
   );
};

export default RegistrationForm;
