import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./Appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between '>
      <div className='w-full block' style={{background: 'radial-gradient(farthest-corner at 90% 80%, #1D23D0, #151B5E, black)'}}>
        <Header />
        <main>
        {/* <div className='w-full  bg-cover bg-center bg-fixed' style={{backgroundImage: "url('./images/bg.jpg')"}}> */}
        <div className='w-full ' >
  <Outlet />
</div>
        
        </main>
        <div className='w-full'>
        <Footer />
        </div>
      </div>
    </div>
  ) : null
}

export default App