import React, { useEffect, useState } from 'react'
import Transitions from '../common/Transitions';
import Cards from './Cards';
import './shopStyles/Shop.css'


const Shop = ({handleClick, games}) => {
    
    

//to actually buy the game: `https://store.steampowered.com/app/${steamId}/Iron_Age/`

  return (
    
    <div className='shop'>
      <Transitions>
        <Cards 
        games={games}
        handleClick={handleClick}
        
        />
      </Transitions>
    </div>
    
  )
}

export default Shop