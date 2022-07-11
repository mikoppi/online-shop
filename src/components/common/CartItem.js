import React from 'react'
import './styles/CartItem.css'
import Amount from './Amount'

const CartItem = ({name, url, price, amount, handleDecrease, handleIncrease, cartItems}) => {
  return (
    <div className='cart-card' id={name} >
        <img src={url} alt='game'></img>
        <h3 className='cart-name'>{name} </h3>
        <Amount price={price} name={name} amount={amount} handleDecrease={handleDecrease} handleIncrease={handleIncrease} cartItems={cartItems}/>
    
        
        
    </div>
  )
}

export default CartItem