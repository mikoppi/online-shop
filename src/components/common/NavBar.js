import React from 'react'
import { Link, NavLink } from "react-router-dom"
import './styles/NavBar.css'
import { FaShoppingCart, FaSteam  } from 'react-icons/fa'



const NavBar = ({itemCount, handleCartOpen}) => {

  let activeStyle = {
    backgroundColor: "#1b2838",
    
  };

  return (
    <nav className='nav'>
      <Link to='/' className='site-name'>{<FaSteam size={50}/>}SteamDeals</Link>
      <ul>
        <li>
          <NavLink
              to="/"
              className='router-link'
              style={({ isActive }) =>
              isActive ? activeStyle : undefined
              }
              >
              HOME
          </NavLink>
        </li>
        <li>
          <NavLink
              to="/shop"
              className='router-link'
              style={({ isActive }) =>
              isActive ? activeStyle : undefined
              }
              >
              SHOP
          </NavLink>
        </li>
        <li>
          <button className='cart-button'><FaShoppingCart className='cart-icon' size={42} style={{color: '#7bc45e'}} onClick={handleCartOpen}/>{itemCount}</button>
          
        </li>
      </ul>
    </nav>
    
  )
}

export default NavBar
