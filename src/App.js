import React from 'react'
import './App.css'

//components
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import запис from './Components/Записатся/запис'
import Tournament from './Components/Tournament/Tournament'
import Footer from './Components/Footer/Footer'
import CardImg  from './Components/Tournament/CardImg/CardImg'

const App = () => {
  return (
    <>
    <Navbar />
    <Home/>
    <запис/>
    <Tournament />
    {/* <CardImg /> */}
    <Footer/>
    </>
  )
}

export default App