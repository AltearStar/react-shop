import React, { useState } from "react";

const BasePopUp = ({ status, children, setStatus, ...args }) => {
   // Рекомендуемый шаблон children:
   // <h1>Заголовок</h1>
   // <h2>Текст пояснение</h2>
   // <button>кнопка</button>
   // <button>кнопка</button>

   return (
      <div
         onClick={(event) => {
            event.stopPropagation();
            setStatus(false);
            document.body.style.overflow = "auto";
         }}
         className={"Base-Popup__substrate " + (status ? "active" : "disable")}
      >
         <div
            onClick={(event) => {
               event.stopPropagation();
            }}
            className="Base-Popup"
         >
            {children}
         </div>
      </div>
   );
};

export default BasePopUp;
