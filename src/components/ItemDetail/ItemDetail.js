import React from 'react'
import { useState, } from 'react';
import { NavLink } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { useCartContex } from '../../context/CartContext';

const ItemDetail =({listProduct}) => {
  
  
  const [isAdded,setIsAdded] = useState(false)

      const {addCart,cartList} = useCartContex()

  const onAdd = (quantity) => {
    addCart(listProduct, quantity)
    setIsAdded(true)
    
  }
console.log(listProduct);
  return (
    <>
    <div className='grid grid-cols-2'>
        <div>
            <img className='w-auto' src={listProduct.image} alt="" />
        </div>
        <div className='pt-10 pl-10'>
            <div className='text-3xl font-bold mb-5' >{listProduct.product}</div>
            <p className='text-3xl font-bold mb-5'>Precio</p>
            <div className='text-3xl font-bold mb-5' >{listProduct.price} USD</div>
            <p className='text-3xl font-bold mb-5'>Talles</p>
            <div className='flex justify-start gap-2 justify-items-center '>{listProduct.talles.map((talles, index) => (<button className='bg-transparent w-8  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-blue-700 font-semibold hover:text-white py-2  border border-blue-500 hover:border-transparent rounded' key={index}>{talles}</button>))}</div>
            
              {
              isAdded ?
              <NavLink to = "/cart">
                <button className=" w-80 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Ir al carrito </button>
              </NavLink>
              :
              <ItemCount initial={listProduct.initial} stock={listProduct.stock} onAdd={onAdd}/>
              }    
            

        </div>
        
    </div>
    
    </>
    
  )
}

export default ItemDetail