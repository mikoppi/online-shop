import React from 'react'
import './styles/CartBackground.css'

const CartBackground = ({handleCartOpen}) => {
  return (
    <div onClick={handleCartOpen} className='background'></div>
  )
}

export default CartBackground