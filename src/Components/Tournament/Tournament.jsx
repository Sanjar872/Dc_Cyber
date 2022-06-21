import { Box } from '@mui/material'
import React from 'react'
import { Box1, Box2, BoxImg1, BoxImg2, Conteyner1, Conteyner2, LI, MainDiv, Name, NameText, NavbarDiv, Para, Ul, ULdiv, VS } from './style'

import BoxImg11 from '../S-image/game1.png'
import BoxImg22 from '../S-image/game2.png'



const Tournament = () => {
  return (
    <MainDiv>
      <NavbarDiv>
        <NameText>
          <Name>Последние турниры</Name>
        </NameText>
        <ULdiv>
        <Ul>
          <LI>Все</LI>
          <LI>CS:GO</LI>
          <LI>DOTA 2</LI>
          <LI>R6 SEGA</LI>
          <LI>PUBG</LI>
        </Ul>
        </ULdiv>
      </NavbarDiv>
      
      <Para>

        <Conteyner1>
          <Box1>
            <BoxImg1 src={BoxImg11} />
          </Box1>
          <VS>sss</VS>
          <Box2>
            <BoxImg2 src={BoxImg22} />
          </Box2>
        </Conteyner1>

        <Conteyner2></Conteyner2>
      </Para>

    </MainDiv>
  )
}

export default Tournament