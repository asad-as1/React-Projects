import React from 'react'

const Data = ({ main, desc, temp, city, humi, press }) => {
  return (
    <>
        <h1 className='desc'>{main}</h1>
        <h2>{desc}</h2>
        <h1 className='h1'>{Math.floor(temp)}&deg;C</h1>
        <h1>{city}</h1>

        <div className='foot'>
           <h2> Humidity <br /> {humi}%</h2>
           <h2>Wind Speed <br /> {press} Km/h</h2>
        </div>
        
    </>
  )
}

export default Data