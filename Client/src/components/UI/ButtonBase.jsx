import React from 'react';

const ButtonBase = ({children, classEffectStyle, ...props}) => {
   const className = 'Button-Base ' + (classEffectStyle ? classEffectStyle : '');

   return (
      <button {...props} className={className}>
         {children}
      </button>
   );
};

export default ButtonBase;