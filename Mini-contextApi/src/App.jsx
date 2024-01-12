import './App.css'
import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"

function App() {

  return (
    <UserContextProvider>
      <h1 className='bg-green-500 text-center rounded p-2 text-xl'>About Context Api</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
