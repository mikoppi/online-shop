import React from 'react'
import './styles/CartItem.css'
import Amount from './Amount'

const CartItem = ({name, url, price, handleDecrease, handleIncrease, cartItems, amount}) => {
  return (
    <div className='cart-card' id={name} >
        <img src={url} alt='game'></img>
        <h3 className='cart-name'>{name} </h3>
        <Amount amount={amount} price={price} name={name}  handleDecrease={handleDecrease} handleIncrease={handleIncrease} cartItems={cartItems}/>
    
        
        
    </div>
  )
}

export default CartItem