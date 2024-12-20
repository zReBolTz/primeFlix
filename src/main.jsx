import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/index.jsx'
import Filme from './pages/Filme/index.jsx'

const router= createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[{
      path:'/',
      element:<Home/>
    },
    {
      path:'filme/:id',
      element:<Filme/>
    }
  ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
