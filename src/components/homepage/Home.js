import React from 'react'
import './homeStyles/Home.css'
import { FaSteam  } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
        <h1>{<FaSteam size={65}/>}SteamDeals</h1>
        <h2>Find the best game deals of Steam store here - all in one site!</h2>
        <Link to="/shop">
          <button className='visit'>Visit the shop</button>
        </Link>
    </div>
  )
}

export default Home