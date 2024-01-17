import React from 'react'
// import '../App.css'

const cart = ({title, idx}) => {

    let oldPrice = ["12,495", "11,900", "1,599", "599"];
    let newPrice = ["8,999" ,"9,199", "899", "278"];
 
    let desc = [
        ["8000 DPI", "5 Programmable Buttons"],
        ["Intuitive Touch Surface", "Designed for iPad Pro"],
        ["Designed for iPad Pro", "Intuitive Touch Surface"],
        ["Wireless Mouse 2.4GHz", "Optical Orientation"]
    ]

  return (
    <div className='border-black border-2 bg-red-400 w-30 p-9 mb-20'>

       <h1 className='text-xl mb-8'>{title}</h1>

       <div className='text-lg' >
           <h3>{desc[idx][0]}</h3>
           <h3>{desc[idx][1]}</h3>
       </div>

       <div className='cursor-pointer flex gap-5 text-lg bg-yellow-500 w-25 p-1 rounded mt-20'>
           <h4 className='line-through'>₹ {oldPrice[idx]}</h4>
           <h4>₹ {newPrice[idx]}</h4>
       </div>
       
    </div>
  )
}

export default cart