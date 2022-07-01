import React from 'react'
import './App.css'

//Aos import
import AOS from "aos";

import "aos/dist/aos.css";
//components
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import запис from './Components/Записатся/запис'
import Tournament from './Components/Tournament/Tournament'
import Footer from './Components/Footer/Footer'
import CardImg  from './Components/Tournament/CardImg/CardImg'
import { useEffect } from 'react'

const App = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
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