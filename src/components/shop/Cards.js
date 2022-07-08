import React from 'react'
import Card from './Card'
import './shopStyles/Cards.css'


const Cards = ({ games }) => {
  return (
    <div className='cards'>
        {games.map(game => 
        <Card key = {game.id} name={game.name} url={game.picture} price={game.price} />
        )}
    </div>
  )
}

export default Cards