import './App.css'
import { useState, useCallback, useEffect, useRef } from 'react'

function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setpassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "`~!@#$%^&*()_+=-{}[]"

    for(let i=1; i<=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    } 

    setpassword(pass);

  }, [length, numberAllowed, charAllowed, setpassword ])


  const copyPassword = () => {
    passwordRef.current?.select();
    document.execCommand('copy');

    // passwordRef.current?.setSelectionRange(0, 100);
    // window.navigator.clipboard.writeText(password);
  }

  useEffect(() => { passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator ])
  

  return (
    <>
      <div className='me mx-auto shadow-md
          rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>

          <h1 className='text-4xl text-center text-white my-3'>Password Generator</h1>

          <div className='flex shadow
            rounded-lg overflow-hidden mb-4'>
            <input 
            type="text" 
            value={password}
            className='outline-none w-full py-1 px-3'
            // placeholder='Password'

            readOnly
            ref={passwordRef}
            />
            <button
            onClick={copyPassword} 
            className='outline-none bg-blue-700 text-white
            px-3 py-0.5 shrink-0'>copy</button>
          </div>

          <div className='flex text-sm gap-x-3'>

              <div className='flex items-center gap-x-2 '>
                 <input 
                     type="range"
                     min={6}
                     max={100}
                     value={length}
                     className='cursor-pointer'
                     onChange={(e) => {setLength(e.target.value)}}
                 />
                <label>Length: {length}</label>
              </div>
                  
              <div className='flex items-center gap-x-1'>
                 <input
                   type="checkbox"
              className='cursor-pointer'
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setnumberAllowed((prev => !prev))
                   }}
                 />
                 <label htmlFor="numberInput">Numbers</label>
              </div>  

              <div className='flex items-center gap-x-1'>
                  <input
                     type="checkbox"
                     defaultChecked={charAllowed}
                     id='characterInput'
                     className='cursor-pointer'
                     onChange={() => {
                     setcharAllowed((prev => !prev))
                     }}
                  />
                  <label htmlFor="characterInput">Special Characters</label>
              </div>

          </div>
       
      </div>

    </>
  )
}

export default App
