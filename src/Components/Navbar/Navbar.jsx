import React from 'react'
import { Contener,  LI, LogoDiv, LogoImg, MainDiv, MenuIcon, MuiButton, NavbarDiv, UL, 
  MenuBtn, Btnwrap, CenterText } from './style'

//img
import LogotipImg from './../F-image/Logotip-img.png'

//icons-material import
import {Menu} from '@mui/icons-material'

import TemporaryDrawer from './Drawer'

const Navbar = () => {

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

         <Btnwrap>
            <MenuBtn onClick={toggleDrawer("right", true)}>
                <Menu />
            </MenuBtn>
         </Btnwrap>
         </NavbarDiv>
      <TemporaryDrawer state={state} setState={setState}/>
        <CenterText>n</CenterText>
    </MainDiv>
  )
}

export default Navbar