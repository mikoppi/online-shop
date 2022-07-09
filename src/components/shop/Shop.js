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
            const price = game[i].salePrice;
            const normalPrice = game[i].normalPrice;
            const review = game[i].metacriticLink;
            const saving = game[i].savings;
            const score = game[i].steamRatingPercent;
            const steamId = game[i].steamAppID;
            games.push({id, name, picture, price, normalPrice, saving, review, score, steamId})
        }
        console.log(games)
        return games
    }

//to actually buy the game: `https://store.steampowered.com/app/${steamId}/Iron_Age/`

  return (
    <div className='shop'>
        <Cards 
        games={games}
        
        />
    </div>
  )
}

export default Shop