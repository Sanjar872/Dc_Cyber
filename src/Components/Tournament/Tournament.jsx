import { Box } from '@mui/material'
import React from 'react'
import { Box1, Box2, BoxImg1, BoxImg2, Comands, Conteyner1, Conteyner2, Data, GroupName, LI, MainDiv, Name, NameText, NavbarDiv, Para, Ul, ULdiv, VS } from './style'

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
      
{/* ================================================= */}

      <Comands>
        <Para>
          <Conteyner1>
          <Box1>
             <BoxImg1 src={BoxImg11} />
          </Box1>
          <VS>VS</VS>
           <Box2>
             <BoxImg2 src={BoxImg22} />
           </Box2>
          </Conteyner1>
        
          <Conteyner2>
          <GroupName>Oldchoolband - Oldchoolband Dota 2</GroupName>
          <Data>03 Марта 2022  13:20</Data>
          </Conteyner2>
        </Para>

{/* ================================================================= */}

        <Para>
          <Conteyner1>
          <Box1>
             <BoxImg1 src={BoxImg11} />
          </Box1>
          <VS>VS</VS>
           <Box2>
             <BoxImg2 src={BoxImg22} />
           </Box2>
          </Conteyner1>
        
          <Conteyner2>
          <GroupName>Oldchoolband - Oldchoolband Dota 2</GroupName>
          <Data>03 Марта 2022  13:20</Data>
          </Conteyner2>
        </Para>

{/* ========================================================= */}

        <Para>
          <Conteyner1>
          <Box1>
             <BoxImg1 src={BoxImg11} />
          </Box1>
          <VS>VS</VS>
           <Box2>
             <BoxImg2 src={BoxImg22} />
           </Box2>
          </Conteyner1>
        
          <Conteyner2>
          <GroupName>Oldchoolband - Oldchoolband Dota 2</GroupName>
          <Data>03 Марта 2022  13:20</Data>
          </Conteyner2>
        </Para>

{/* ============================================================== */}

        <Para>
          <Conteyner1>
          <Box1>
             <BoxImg1 src={BoxImg11} />
          </Box1>
          <VS>VS</VS>
           <Box2>
             <BoxImg2 src={BoxImg22} />
           </Box2>
          </Conteyner1>
        
          <Conteyner2>
          <GroupName>Oldchoolband - Oldchoolband Dota 2</GroupName>
          <Data>03 Марта 2022  13:20</Data>
          </Conteyner2>
        </Para>

      </Comands>

    </MainDiv>
  )
}

export default Tournament