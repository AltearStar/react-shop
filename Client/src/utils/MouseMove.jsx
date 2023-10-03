import React, { useState } from 'react';

const MouseMove = ({render}) => {
   let [mouseX, setMouseX] = useState(0);
   let [mouseY, setMouseY] = useState(0);

   let mouseMoveHandler = (event) => {
      setMouseX(event.clientX);
      setMouseY(event.clientY);
   }

   return (
      <div onMouseMove={mouseMoveHandler}>
          {render({mouseX, mouseY})}
      </div>
   );
};

export default MouseMove;

// Вызов:
// <MouseMove render={(props)=>{
//    return <div >kek, my {props.mouseX}:{props.mouseY}</div>
// }}/>