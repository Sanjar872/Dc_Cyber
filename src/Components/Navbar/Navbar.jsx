import React from 'react'
import { Contener, Hamburger, LI, LogoDiv, LogoImg, MainDiv, MuiButton, NavbarDiv, UL } from './style'


//img
import LogotipImg from './../F-image/Logotip-img.png'

const Navbar = () => {
  return (
    <MainDiv>
      <NavbarDiv>
        <LogoDiv>
          <LogoImg src={LogotipImg} />
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
      </NavbarDiv>
    </MainDiv>
  )
}

export default Navbar