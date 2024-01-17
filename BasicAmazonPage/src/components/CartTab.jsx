import React from 'react';
import Cart from './Cart'


const CartTab = () => {
  return (
    <div className='flex items-center gap-10'>
      <Cart title={"Logitech MX Master"} idx={0} />
      <Cart title={"Apple Pencil (2nd Gen)"} idx={1} />
      <Cart title={"Zebronics"} idx={2} />
      <Cart title={"Petronics Toad"} idx={3} />
    </div> 
  )
}

export default CartTab