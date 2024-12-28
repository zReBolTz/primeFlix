import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet, RouterProvider } from 'react-router-dom'
import Header from './components/header/header'
import { ToastContainer } from 'react-toastify'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='app'>
     <ToastContainer  />
    <Header/>
      <Outlet/>
     </div>
    </>
  )
}

export default App
