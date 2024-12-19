import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet, RouterProvider } from 'react-router-dom'
import Header from './components/header/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='app'>
    <Header/>
      <Outlet/>
      <h1>hooter</h1>
     </div>
    </>
  )
}

export default App
