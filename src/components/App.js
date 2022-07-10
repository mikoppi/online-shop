import React , { useState, useEffect } from 'react'
import NavBar from './common/NavBar'
import { Routes, Route } from 'react-router-dom'
import Home from './homepage/Home'
import Shop from './shop/Shop'
import './App.css'
import Cart from './common/Cart'

const App = () => {
  const [cartItems, setCartItems] = useState([]);
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



  const handleClick = (e) => {
    let itemName =  e.target.parentNode.id;
    let item = games.filter(game => game.name === itemName)[0]
    console.log(item)
    setCartItems((prevState) => [...prevState, item])
}

  return (
    <>
      <NavBar itemCount={cartItems.length}
      />
      <div className='container'>
      <Cart cartItems={cartItems}/>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/shop' element = {<Shop games={games} handleClick={handleClick}/>}/>
        </Routes>

      </div> 
    </>
  )
}

export default App