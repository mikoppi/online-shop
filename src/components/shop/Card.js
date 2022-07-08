import React from 'react'

const Card = ({ name, url, price }) => {
  return (
    <div className='card' id={name} >
        <img src={url} alt='game' width="200" height="auto"></img>
        <h3>{name}</h3>
        <h4>${price}</h4>
    </div>
  )
}

export default Card