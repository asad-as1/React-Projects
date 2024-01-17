import CartTab from './components/CartTab'
import './App.css'

function App() {
  return (
    <div className='h-full mt-40 bg-white flex flex-col items-center gap-10'>
      <h1 className='font-medium text-xl mt-4'>Blockbuster Deals on Computer Accessories | Shop Now</h1>
      <CartTab />
    </div>
  )
}

export default App
