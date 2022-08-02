import React, { useEffect, useState } from 'react'
import Pagination from '../common/Pagination';
import Transitions from '../common/Transitions';
import Cards from './Cards';
import './shopStyles/Shop.css'


const Shop = ({handleClick, games, gamesPerPage, paginate, currentGames, currentPage}) => {
    
    

//to actually buy the game: `https://store.steampowered.com/app/${steamId}/Iron_Age/`

  return (
    
    <div className='shop'>
      <Transitions>
        <Cards 
        games={currentGames}
        handleClick={handleClick}
        
        />
        <Pagination
        gamesPerPage={gamesPerPage}
        totalGames={games.length}
        paginate={paginate}
        currentPage={currentPage}
        />
      </Transitions>
    </div>
    
  )
}

export default Shop