import React from 'react'
import './App.css'

//Aos import
import AOS from "aos";
//dasdasdasd
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
    <div className='ContainerG'>
    <Navbar />
    <Home/>
    <запис/>
    <Tournament />
    <Footer/>
    </div>
  )
}

export default App