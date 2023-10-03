import React from "react";
import shapeDisable from "../../img/shabe_disable.svg";
import shapeEnable from "../../img/shabe_enable.svg";
import ButtonBase from "./ButtonBase";

const ButtonFavorite = ({ value, myClickEvent, ...props }) => {
   // return (
   //    <button
   //       className="Button-Favorite"
   //       value={value}
   //       onClick={(event) => {
   //          event.stopPropagation();
   //          myClickEvent(value ? false : true);
   //       }}
   //       {...props}
   //    >
   //       <img
   //          alt={"fafotite"}
   //          src={value === true ? shapeEnable : shapeDisable}
   //       />
   //    </button>
   // );

   return (
      <div>
         <ButtonBase
            value={value}
            onClick={(event) => {
               event.stopPropagation();
               myClickEvent(value ? false : true);
            }}
            classEffectStyle={"Favorite"}
         >
            <img
               alt={"fafotite"}
               src={value === true ? shapeEnable : shapeDisable}
            />
         </ButtonBase>
      </div>
   );
};

export default ButtonFavorite;
