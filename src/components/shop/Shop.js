import React, { useEffect, useState } from 'react'
import Cards from './Cards';
import './shopStyles/Shop.css'


const Shop = ({handleClick, games}) => {
    
    

//to actually buy the game: `https://store.steampowered.com/app/${steamId}/Iron_Age/`

  return (
    <div className='shop'>
        <Cards 
        games={games}
        handleClick={handleClick}
        
        />
    </div>
  )
}

export default Shop