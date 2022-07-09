import React from 'react'
import Card from './Card'
import './shopStyles/Cards.css'


const Cards = ({ games }) => {
  return (
    <div className='cards'>
        {games.map(game => 
        <Card key = {game.id}
         name={game.name}
         url={game.picture}
         price={game.price}
         normalPrice={game.normalPrice}
         saving={game.saving}
         review={game.review}
         score={game.score} />
        )}
    </div>
  )
}

export default Cards