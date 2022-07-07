import React from 'react'
import NavBar from './common/NavBar'
import { Routes, Route } from 'react-router-dom'
import Home from './homepage/Home'
import Shop from './shop/Shop'

const App = () => {
  return (
    <>
      <NavBar/>
      <div className='container'>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/shop' element = {<Shop/>}/>
        </Routes>
      </div> 
    </>
  )
}

export default App