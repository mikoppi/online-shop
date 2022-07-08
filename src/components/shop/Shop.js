import React, { useEffect, useState } from 'react'
import Cards from './Cards';
import './shopStyles/Shop.css'

const Shop = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const loadCards = async () => {
            setGames(await getGames())
        }
        loadCards()
    },[])

    const getGames = async () => {
        const games = [];
        for (let i=0; i<60; i++) {
            const url = 'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=10';
            const response = await fetch(url);
            const game = await response.json();
            const id = game[i].gameID;
            const name = game[i].title
            const picture = game[i].thumb;
            const price = game[i].salePrice
            games.push({id, name, picture, price})
        }
        console.log(games)
        return games
    }



  return (
    <div className='shop'>
        <Cards 
        games={games}
        
        />
    </div>
  )
}

export default Shop