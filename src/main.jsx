import React from 'react'
import ReactDOM from 'react-dom/client'
 
import './index.css'
import Main from './Layout/Main.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home/Home.jsx'
import Alhome from './Home/Alhome.jsx'

const router = createBrowserRouter([
    {
      path:"/",
      element: <Main></Main>,
      children: [
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:"home",
          element:<Alhome></Alhome>,
          loader: () => fetch("allhouse.json")
        }
      ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
