import React from 'react'
import './shopStyles/Card.css'

const Card = ({ name, url, price, normalPrice, saving, review, score }) => {
    
    const metacriticUrl=`https://www.metacritic.com/${review}`

    
  return (
    <div className='card' id={name} >
        <img src={url} alt='game' width="250" height="auto"></img>
        <h3>{name} </h3>
        <h4 className='normal-price'>{normalPrice}€  </h4>
        <div className='more'>
            <h4 className='price'>{price}€  <span>-{Math.floor(saving)}%</span></h4>
            <h4 className='review'>Review: <span><a href={metacriticUrl} target='_blank' rel='noreferrer'>Metacritic</a></span><span id='score'>{score}</span></h4>
        </div>
        

    </div>
  )
}

export default Card