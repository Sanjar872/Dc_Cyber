import React from 'react'
import { BgcCalashDiv, LI, MainDiv, Name, NameText, NavbarDiv, Ul, ULdiv } from './style'

const Tournament = () => {
  return (
    <MainDiv>
      <BgcCalashDiv></BgcCalashDiv>
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
    </MainDiv>
  )
}

export default Tournament