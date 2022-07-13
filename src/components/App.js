import React , { useState, useEffect } from 'react'
import NavBar from './common/NavBar'
import { Routes, Route } from 'react-router-dom'
import Home from './homepage/Home'
import Shop from './shop/Shop'
import './App.css'
import Cart from './common/Cart'
import CartBackground from './common/CartBackground'
import Footer from './common/Footer'

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [games, setGames] = useState([]);
  const [cartOpen, setCartOpen] = useState(false)
  
    

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
            const quantity = 1;
            
            games.push({id, name, picture, price, normalPrice, saving, review, score, steamId, quantity})
        }
        //console.log(games)
        return games
    }



  const handleAddCart = (e) => {
    let itemName =  e.target.parentNode.id;
    let itemIndex = cartItems.findIndex((i) => i.name === itemName)
    if (itemIndex>-1) {
      const newCart = cartItems.slice();
      newCart[itemIndex].quantity++;
      setCartItems(newCart)
    } else {
      let item = games.filter(game => game.name === itemName)[0]
      setCartItems((prevState) => [...prevState, item])
    }
    console.log(cartItems)
  }


  const handleCartOpen = () => {
    setCartOpen((prevState) => !prevState)
  }

  const handleDecrease = (e) => {
    let itemName =  e.target.parentNode.id;
    let itemIndex = cartItems.findIndex((i) => i.name === itemName);
    if (itemIndex>-1) {
      const newCart = cartItems.slice();
      newCart[itemIndex].quantity--;
      setCartItems(newCart)
    }
    
   
  
  }

  const handleIncrease = (e) => {
    let itemName =  e.target.parentNode.id;
    let itemIndex = cartItems.findIndex((i) => i.name === itemName);
    if (itemIndex>-1) {
      const newCart = cartItems.slice();
      newCart[itemIndex].quantity++;
      setCartItems(newCart)
    }
  }
  


  return (
    <div className='main'>
      <NavBar itemCount={cartItems.reduce((a,b)=> a+b.quantity,0)}
              handleCartOpen={handleCartOpen}
      />
      <div className='container'>
      {cartOpen ? <div className='cart-container'><Cart cartItems={cartItems}
                                                   handleCartOpen={handleCartOpen}
                                                   handleIncrease={handleIncrease}
                                                    handleDecrease={handleDecrease}
                                                    />
                  <CartBackground handleCartOpen={handleCartOpen}/></div>
       : null}
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/shop' element = {<Shop games={games} handleClick={handleAddCart}/>}/>
        </Routes>
      </div> 
        <Footer/>
    </div>
  )
}

export default App