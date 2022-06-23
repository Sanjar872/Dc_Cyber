import React from 'react'
import { Contener,  LI, LogoDiv, LogoImg, MainDiv, MenuIcon, MuiButton, NavbarDiv, UL, 
  MenuBtn, Btnwrap, CenterText, TextDiv, SpanText, Text } from './style'
import axios from 'axios'
//img
import LogotipImg from './../F-image/Logotip-img.png'

//icons-material import
import {Menu} from '@mui/icons-material'

import TemporaryDrawer from './Drawer'
import { useState } from 'react'
import { useEffect } from 'react'


const API = "http://159.65.207.213/api/info/"


const Navbar = () => {

const [data, setData] = useState([])

useEffect(() => {
  axios.get(API)
  .then(res=> {
    setData(res.data)
    // console.log(res.data);
  })



}, [])





  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  const [navSize, setnavSize] = useState("10rem")
  const [navColor, setnavColor] = useState("transparent")
  const listenScrollEvent = ()=> {
    window.scrollY > 10 ? setnavColor("#2b3785") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("6rem") : setnavSize("10rem");
   };
   useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll",listenScrollEvent)
    }
  }, [])


  return (
    <MainDiv>
      <NavbarDiv style={{
        backgroundColor:navColor,
        height: navSize,
        transition:"all 1s"
      }}>
        <LogoDiv>
          <LogoImg src={`http://159.65.207.213${data.logo}`} />
        </LogoDiv>
        <Contener>
        <UL>
          <LI>О нас</LI>
          <LI>Турниры</LI>
          <LI>Счёты</LI>
          <LI>Фото</LI>
        </UL>
          <MuiButton variant='contained' >Регистрация</MuiButton>
           </Contener> 

         <Btnwrap>
            <MenuBtn onClick={toggleDrawer("right", true)}>
                <Menu />
            </MenuBtn>
         </Btnwrap>
         </NavbarDiv>
      <TemporaryDrawer state={state} setState={setState}/>
        <CenterText>
          <TextDiv>
            <Text>ДОБРО ПОЖАЛОВАТЬ В ИГРУ <SpanText>DC cyber</SpanText> В <br /> КИБЕРСПОРТИВНЫХ ИГРАХ</Text>
          </TextDiv>
        </CenterText>
    </MainDiv>
  )
}

export default Navbar