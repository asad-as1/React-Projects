import { useState } from 'react'

import './App.css'

function App() {
  const [moves, setMoves] = useState({blue:0, yellow:0, green:0, red:0});

  let blue = () => {
    setMoves(prevMoves => ({...prevMoves, blue:moves.blue+1}));
  }
  let yellow = () => {
    setMoves(prevMoves => ({...prevMoves, yellow:moves.yellow+1}));
  }
  let green = () => {
    setMoves(prevMoves => ({...prevMoves, green:moves.green+1}));
  }
  let red = () => {
    setMoves(prevMoves => ({...prevMoves, red:moves.red+1}));
  }

  return (
    <>
        <h1>Game Begins!</h1>

        <h2>Blue Moves = {moves.blue}</h2>
        <button style={{backgroundColor: "blue"}} onClick={blue}>+1</button>

        <h2>Yellow Moves = {moves.yellow}</h2>
        <button style={{backgroundColor: "yellow"}} onClick={yellow}>+1</button>

        <h2>Green Moves = {moves.green}</h2>
        <button style={{backgroundColor: "green"}} onClick={green}>+1</button>

        <h2>Red Moves = {moves.red}</h2>
        <button style={{backgroundColor: "red"}} onClick={red}>+1</button>
    </>
  )
}

export default App
