import React from 'react'
import './styles/Cart.css'
import CartItem from './CartItem'

const Cart = ({cartItems}) => {
  return (
    <div className='cart'>
        <h2>Your shopping cart:</h2>
        <ul className='items'>
          {cartItems.map(item => 
            <li><CartItem
            key = {item.id}
            name={item.name}
            url={item.picture}
            price={item.price}
            /></li>)}
        </ul>
        <button className='checkout-button'>Checkout</button>
        <button className='close-button'>Close</button>
    </div>
  )
}

export default Cart