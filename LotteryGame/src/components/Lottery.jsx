import React, { useState } from 'react'
import  { generate, sum}  from './helper';
import Ticket from './Ticket';

const Lottery = ({ n=3, luckyNum=15 }) => {
    let [ran, setRan] = useState(generate(n));
    let isWon = sum(ran) === luckyNum;
    

    let again = () => {
        setRan(generate(n));
        // isWon = sum(ran) === luckyNum;
    }
    
  return (
    <div>
        <h1>Lottery Game!</h1>
        <Ticket ran={ran}/>
        <button onClick={again}>Buy New Ticket</button>
        <h2>{isWon && "Congratulations, you won!"}</h2>
    </div>
    
  )
}
export default Lottery