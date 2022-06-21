import React from 'react'
import './App.css'

//components
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import запис from './Components/Записатся/запис'
const App = () => {
  return (
    <>
    <Navbar />
    <Home/>
    <запис/>
    </>
  )
}

export default App