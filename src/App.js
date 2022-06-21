import React from 'react'
import './App.css'

//components
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import запис from './Components/Записатся/запис'
import Tournament from './Components/Tournament/Tournament'

const App = () => {
  return (
    <>
    <Navbar />
    <Home/>
    <запис/>
    <Tournament />


    </>
  )
}

export default App