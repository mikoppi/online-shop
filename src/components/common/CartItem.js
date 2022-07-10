import React from 'react'
import './styles/CartItem.css'

const CartItem = ({name, url, price}) => {
  return (
    <div className='cart-card' id={name} >
        <div className='cart-image'>
            <img src={url} alt='game' width="175" height="auto"></img>
        </div>
        <h3 className='cart-name'>{name} </h3>
        <div className='cart-prices'>
            <h4 className='cart-price'>${price}  </h4>
        </div>
        
    </div>
  )
}

export default CartItem