import React from 'react'
import './styles/CartItem.css'
import Amount from './Amount'

const CartItem = ({name, url, price, amount, handleDecrease, handleIncrease, cartItems}) => {
  return (
    <div className='cart-card' id={name} >
        <img src={url} alt='game'></img>
        <Amount name={name} amount={amount} handleDecrease={handleDecrease} handleIncrease={handleIncrease} cartItems={cartItems}/>
    
        <h3 className='cart-name'>{name} </h3>
        <div className='cart-prices'>
            <h4 className='cart-price'>${price}  </h4>
        </div>
        
    </div>
  )
}

export default CartItem