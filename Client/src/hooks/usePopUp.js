import { useState } from "react";
import { createPortal } from 'react-dom';
import BasePopUp from "../components/UI/BasePopUp";
import ButtonBase from "../components/UI/ButtonBase";

function usePopUp(template, callback) {
   let [status, setStatus] = useState(false);

   const showPopUp = () => {
      setStatus(true);
      document.body.style.overflow="hidden";
   };

   const renderPopUp = () => {
      return createPortal(
         <BasePopUp status={status} setStatus={setStatus}>
            <h1>{template.h1}</h1>
            <h2>{template.h2}</h2>
            <ButtonBase
               classEffectStyle={"secondary"}
               onClick={() => {
                  callback();
                  setStatus(false);
                  document.body.style.overflow="auto";
               }}
            >
               {template.buttonCalback}
            </ButtonBase>
            <ButtonBase
               onClick={() => {
                  setStatus(false);
                  document.body.style.overflow="auto";
               }}
            >
               {template.buttonCancel}
            </ButtonBase>
         </BasePopUp>,
         document.getElementById('popupBlock')
      );
   };

   return [renderPopUp, showPopUp];
}

export default usePopUp;
