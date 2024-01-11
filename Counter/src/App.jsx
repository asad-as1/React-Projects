import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  const plus = () => {
    setCount((prevCount) => prevCount+1)
  }
  const sub = () => {
    if(count !=0)
    setCount((prevCount) => prevCount-1)
  }
  
  return (
    <>
      <div className='main'>
        <h1 className='head'>Counter</h1>
        <div className='content'>
          <button className='sub' onClick={sub}>-</button>
          <h1 className='count'>{count}</h1>
          <button className='add' onClick={plus}>+</button>
        </div>
      </div>
    </>
    
  )
}
export default App
