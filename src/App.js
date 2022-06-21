import React from 'react'
import './App.css'

//components
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Tournament from './Components/Tournament/Tournament'

const App = () => {
  return (
    <>
    <Navbar />
    <Home/>
    <Tournament />
    </>
  )
}

export default App