import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
// import App from './App' 
import Navbar from './components/Navbar'
import './index.css'
import router from './router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <div className='w-full h-screen bg-gray-900 text-white'> 
      <Navbar/>
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
