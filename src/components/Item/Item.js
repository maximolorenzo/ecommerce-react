import { NavLink } from "react-router-dom"

const Item = ({products}) => {
    
    return (
        
    <div className=" m-5 justify-center max-w-xl bg-blue rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    
    <img  className="object-cover h-72 w-full" src={products.image} alt="" />
    
    <div className="px-5 pb-5"> 
        
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{products.product}</h5>
        
        
        <div className="flex justify-between items-center">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">{products.price} USD</span>
            <NavLink to={`/product/${products.id}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Ver Detalle </NavLink>
        </div>
    </div>
</div>

    )
}

export default Item