import React, { useState, useEffect } from 'react'

const Joke = () => {
    let URL = "https://official-joke-api.appspot.com/random_joke"

    let [joke, setJoke] = useState({});

    useEffect( () => {
        async function firstTime() {
        let response = await fetch(URL)
        let jsonResponse = await response.json()
        setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline})
    }  
      firstTime();
    },[])
    
    let getNewJoke = async () => {
        let response = await fetch(URL)
        let jsonResponse = await response.json()
        setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline})
    } 

  return (
    <>
        <h2>Joker!</h2>
        <h1>{joke.setup}</h1>
        <h1>{joke.punchline}</h1>
        <button onClick={getNewJoke}>New Joke</button>
    </>    
  )
}

export default Joke