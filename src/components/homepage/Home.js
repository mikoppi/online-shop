import React from 'react'
import './homeStyles/Home.css'
import { FaSteam  } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Transitions2 from '../common/Transitions2'

const Home = () => {
  return (
    <Transitions2>
    <div className='home'>
        <div className='home-background'>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
        </div>
        <div className='home-content'>
          <h1>{<FaSteam size={65}/>}SteamDeals</h1>
          <h2>Find the best game deals of Steam store here - all in one site!</h2>
          <Link to="/shop">
            <button className='visit'>Visit the shop</button>
          </Link>
        </div>
    </div>
    </Transitions2>
  )
}

export default Home