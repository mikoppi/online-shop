import React from 'react'

const Amount = ({ handleDecrease, handleIncrease, cartItems, name}) => {

    let amount=cartItems.filter(item => item.name === name).length

  return (
    <div className='amount'>
        <button onClick={handleDecrease}>-</button>
        <h4>{amount}</h4>
        <button onClick={handleIncrease}>+</button>
    </div>
  )
}

export default Amount