import logo from '../../assets/logo.jpg'

import { CartWidget } from '../CartWidget/CartWidget'
import { NavLink} from 'react-router-dom'

const NavBar =() =>{
    
    
    return (
    
    <header className='flex justify-between items-center bg-black '>
        <NavLink  to= "/">
            <img className ="w-20 pl-5" src = {logo} alt = "" />
        </NavLink>
    <nav className='w-1/4 flex flex-row justify-around text-white'>
    <NavLink to= "category/men">
        Men
    </NavLink>
    <NavLink to="category/women">
        Women
   </NavLink>
    <NavLink to="cart">
         <CartWidget/> 
    </NavLink>
    </nav>
    
    
    </header>
    
    )
}

export default NavBar