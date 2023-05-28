import React, { useContext } from 'react';

import { CartContext } from '../context/CartContext';

const Qty = ({ item }) => {
  const { handlInput, handleSelect } = useContext(CartContext);

  return (
    <div className='flex gap-x-6 items-center text-primary'>
      {
        item.amount < 10 ? 
        <select 
        onChange={(e) => handleSelect(e, item.id)}
        value={item.amount}
        className='p-2 rounded-lg w-[100px] h-12 outline-none text-primary'
        > {
          Array.from({ length: 11 }, (_, i) => (
          <option value={i}>{i}{i === 10 ? "+" : null}</option>
          ))
          }
         </select> : 
        <input 
        onBlur={(e) => handlInput(e, item.id)}
        className='text-primary placeholder:text-primary h-12 rounded-md p-4 w-[120px] outline-accent' 
        type='text' 
        placeholder={`${item.amount}`}/>
      }
    </div>
  )
};

export default Qty;

