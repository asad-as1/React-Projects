import { useState } from 'react'
import './App.css'

function App() {
  
  return (
    <>
      <nav className='nav'>
        <img className='nlogo' src="./src/Images/iCruze_Logo.avif" alt="logo" />
        <ul>
          <li>Menu</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button className='login'>Login</button>
      </nav>
      <div className="main">
        <div className="content">
          <h1>YOUR TIME DESERVE THE BEST</h1>
          <h3>YOUR TIME DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR WATCHES ,YOUR TIME DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR WATCHES </h3>
          
          <div className="btn">
              <button className='shop'>Shop Now</button>
              <button className='cat'>Category</button>
          </div>

          <h2>Also Available on </h2>
          <div className="ava"> 
              <img className='me' src="./src/Images/ama.png" alt="" />
              <img className='me' src="./src/Images/flip.png" alt="" />
          </div>
          
        </div>
        <div className="img">
          <img src="./src/Images/watch.jpg" alt="" />
          <h2 className='price'>₹ 23,399</h2>
        </div>
      </div>
    </>
  )
}

export default App
