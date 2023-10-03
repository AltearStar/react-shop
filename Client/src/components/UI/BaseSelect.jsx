import React, { useState } from 'react';

const BaseSelect = ({list, name, callback}) => {

   const onSelectValue = (event)=>{
      const value = event.target.value;
      callback(value);
   }
   return (
      <select onChange={onSelectValue} defaultValue="" className='Select-Base'>
         <option value="" disabled hidden>{name}</option>
         {
            list.map((item, index) => {
               return <option key={index} value={item.value}>{item.name}</option>
            })
         }
      </select>
   );
};

export default BaseSelect;