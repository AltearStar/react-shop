import React from "react";

const BaseInput = ({...arg}) => {
   return (
      <input className="Base-Input" {...arg}></input>
   );
};

export default BaseInput;
