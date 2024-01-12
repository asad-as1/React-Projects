import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({username, password})
  }

  return (
    <div className='me'>
        <h1 className='m-4'>Login</h1>
        <input type="text"
        className='outline-none m-4 p-1 rounded'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='username' />
        { " " }
        <input type="text black"
        className='outline-none m-4 p-1 rounded'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password' />

        <button className='outline p-1 rounded' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login