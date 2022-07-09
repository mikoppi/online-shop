import React from 'react'
import { Link, NavLink } from "react-router-dom"
import './styles/NavBar.css'
import { FaShoppingCart } from 'react-icons/fa'

const NavBar = () => {

  let activeStyle = {
    backgroundColor: "black",
  };

  return (
    <nav className='nav'>
      <Link to='/' className='site-name'>SteamGamesUnder10€</Link>
      <ul>
        <li>
          <NavLink
              to="/"
              style={({ isActive }) =>
              isActive ? activeStyle : undefined
              }
              >
              Home
          </NavLink>
        </li>
        <li>
          <NavLink
              to="/shop"
              style={({ isActive }) =>
              isActive ? activeStyle : undefined
              }
              >
              Shop
          </NavLink>
        </li>
        <li>
          <button className='cart-button'><FaShoppingCart size={42} style={{color: 'white'}}/></button>
        
        </li>
      </ul>
    </nav>
    
  )
}

export default NavBar
