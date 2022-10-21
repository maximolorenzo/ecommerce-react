import { useState } from "react";

const ItemCount = ({initial , stock, onAdd}) => {
    const [ count , setCount] = useState(initial)
    
    const increase = () => count < stock && setCount(count + 1)
    const decrease = () => count > initial && setCount(count - 1)
    return (
        
        <div className="flex items-center">
        <div className="m-5">
        <button className='   text-blue-500 text-2xl uppercase font-bold ' onClick={decrease}> - </button>
        </div>
        <div className="m-5 text-black">
        <h2 className="text-2xl text-black">{count}</h2>
        </div>
        <div className="m-5">
        <button className=' pl-2 pr-2 text-blue-500 text-2xl uppercase font-bold ' onClick={increase}>+</button>
        </div>
        <div className="m-5">
        <button className=" w-80 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 " onClick={()=> onAdd(count)}> Agregar al carrito  </button>
        </div>
        </div>
        
    )
}
export default ItemCount