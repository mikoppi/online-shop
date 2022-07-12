import React, { useEffect } from 'react'
import './styles/Amount.css'
import { FaMinus, FaPlus } from 'react-icons/fa'

const Amount = ({ price,handleDecrease, handleIncrease, cartItems, name, amount}) => {
    console.log(cartItems)
    

  return (
    <div className='amounts'>
        <div className='amount'>
            <FaMinus size={20} style={{color: 'red'}} onClick={handleDecrease} id={name}></FaMinus>
            <h4>{amount}</h4>
            <FaPlus size={20} style={{color: '#7bc45e'}} onClick={handleIncrease} id={name}/>
        </div>
        <div className='cart-prices'>
            <h4 className='cart-price'>${Number(price*amount).toFixed(2)}  </h4>
        </div>
    </div>
  )
}

export default Amount