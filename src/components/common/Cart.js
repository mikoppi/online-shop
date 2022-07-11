import React from 'react'
import './styles/Cart.css'
import CartItem from './CartItem'

const Cart = ({cartItems, handleCartOpen, amount,handleDecrease, handleIncrease}) => {
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
            amount={amount}
            handleDecrease={handleDecrease}
            handleIncrease={handleIncrease}
            cartItems={cartItems}
            
            /></li>)}
        </ul>
        <button className='checkout-button'>Checkout</button>
        <button onClick={handleCartOpen} className='close-button'>Close</button>
    </div>
  )
}

export default Cart