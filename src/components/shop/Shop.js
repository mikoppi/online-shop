import React, { useEffect, useState } from 'react'
import Pagination from '../common/Pagination';
import Transitions from '../common/Transitions';
import Cards from './Cards';
import './shopStyles/Shop.css'


const Shop = ({handleClick, games, gamesPerPage, paginate, currentPage, handleSort}) => {
    
  
  const indexOfLast = currentPage * gamesPerPage;
  const indexOfFirst = indexOfLast - gamesPerPage;
  const currentGames = games.slice(indexOfFirst, indexOfLast);

//to actually buy the game: `https://store.steampowered.com/app/${steamId}/Iron_Age/`

  return (
    
    <div className='shop'>
      <Transitions>
      <label htmlFor="sort">Sort by:</label>

        <select onChange={(e) => handleSort(e)} name="sort" id="sort">
          <option value="cheapest">Cheapest first</option>
          <option value="expensive">Most expensive first</option>
          <option value="sale">Biggest sale %</option>
          
        </select>
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