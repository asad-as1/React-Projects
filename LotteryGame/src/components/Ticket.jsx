import React from 'react'

const Ticket = ({ran}) => {
  return (
    <div className='card'>
        <h2>Ticket</h2>
        <h1>{ran}</h1>
    </div> 
  )
}

export default Ticket