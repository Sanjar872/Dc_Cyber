import React from 'react'
import './App.css'

//components
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import запис from './Components/Записатся/запис'
import Tournament from './Components/Tournament/Tournament'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
    <Navbar />
    <Home/>
    <запис/>
    <Tournament />
    <Footer/>
    </>
  )
}

export default App