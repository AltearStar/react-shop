import React from 'react';
import ButtonBase from './ButtonBase';

const CounterBlock = ({count, calback}) => {
   return (
      <div className='Counter-Block'>
         <ButtonBase value="down" onClick={calback}>-</ButtonBase><span>{count} шт</span><ButtonBase value="up" onClick={calback}>+</ButtonBase>
      </div>
   );
};

export default CounterBlock;