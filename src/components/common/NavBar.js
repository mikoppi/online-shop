import React from 'react'
import { Link, NavLink } from "react-router-dom"
import './styles/NavBar.css'

const NavBar = () => {

  let activeStyle = {
    color: "black",
  };

  return (
    <nav className='nav'>
      <Link to='/' className='site-name'>Online shop</Link>
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
          <button className='cart-button'>Cart</button>
        
        </li>
      </ul>
    </nav>
    
  )
}

export default NavBar
