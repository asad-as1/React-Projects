 import { useState } from "react"
 import './App.css'
 function App() {
  const [color, setColor] = useState("gray")

  return (
    <div className="main" style={{backgroundColor: color}}>

      <h1 className="font-bold text-4xl">Background Changer</h1>                          
          <div className="m2">
            <button onClick={() => setColor("red")} className="common" style={{backgroundColor: "red"}} >Red</button>
            <button onClick={() => setColor("green")} className="common" style={{backgroundColor: "green"}} >Green</button>
            <button onClick={() => setColor("blue")} className="common" style={{backgroundColor: "blue"}}> Blue</button>
            <button onClick={() => setColor("olive")} className="common" style={{backgroundColor: "olive"}}> Olive</button>
            <button onClick={() => setColor("gray")} className="common" style={{backgroundColor: "gray", color: "black"}}> Gray</button>
            <button onClick={() => setColor("yellow")} className="common" style={{backgroundColor: "yellow", color: "black"}}> Yellow</button>
            <button onClick={() => setColor("pink")} className="common" style={{backgroundColor: "pink", color: "black"}}> Pink</button>
            <button onClick={() => setColor("purple")} className="common" style={{backgroundColor: "purple"}}> Purple</button>
            <button onClick={() => setColor("lavender")} className="common" style={{backgroundColor: "lavender", color: "black"}}> Lavender</button>
            <button onClick={() => setColor("white")} className="common" style={{backgroundColor: "white", color: "black"}}> White</button>
          </div>
    </div>
  )
}

export default App
