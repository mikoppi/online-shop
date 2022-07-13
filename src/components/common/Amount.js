import React, { useEffect } from 'react'
import './styles/Amount.css'
import { FaMinus, FaPlus } from 'react-icons/fa'

const Amount = ({ price,handleDecrease, handleIncrease, cartItems, name, quantity}) => {
    console.log(cartItems)
    console.log(quantity)
    

  return (
    <div className='amounts'>
        <div className='amount'>
            <FaMinus size={20} style={{color: 'red'}} onClick={handleDecrease} id={name}></FaMinus>
            <h4>{quantity}</h4>
            <FaPlus size={20} style={{color: '#7bc45e'}} onClick={handleIncrease} id={name}/>
        </div>
        <div className='cart-prices'>
            <h4 className='cart-price'>${Number(price*quantity).toFixed(2)}  </h4>
        </div>
    </div>
  )
}

export default Amount