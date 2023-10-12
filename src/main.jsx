import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop.jsx';
import Home from './components/Layout/Home.jsx';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import Review from './components/Review/Review';
import Login from './components/Login/Login';



const router= createBrowserRouter([
  {
    path:'/',
    element: <Home> </Home>,
    children:[
      {
      path:'/',
      element:<Shop> </Shop>

    },
    {
      path:'orders',
      element:<Orders > </Orders>

    },
    {
      path:'manage-inventory',
      element:<Inventory> </Inventory>

    },
    {
      path:'review',
      element:<Review> </Review>

    },
    {
      path: 'login',
      element:<Login> </Login>
    }
  ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
     
  </React.StrictMode>,
)
