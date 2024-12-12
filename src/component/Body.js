import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import ProtectedRoute from '../utils/ProtectedRoute'

const Body = () => {
    const appRouter= createBrowserRouter([
        {path:"/login",
        element:<Login/>
        },
        {
          path:"/",
          element:<ProtectedRoute ><Home/></ProtectedRoute>
        }

    ])
  return (
    <RouterProvider router={appRouter}/>
  )
}

export default Body