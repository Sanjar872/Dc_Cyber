import { Box } from '@mui/material'
import React from 'react'
import { AllPhotoDiv, Box1, Box2, BoxImg1, BoxImg2, ButtonDiv, Card1, Card2, Card3, Card4, CardImg, CardImg11, CardImg22, CardImg3, CardImgIn1, CardImgIn2, CardIn1, CardIn11, CardIn2, CardIn22, CardText, Comands, Conteyner1, Conteyner2, Data, ForstDiv, GroupName, LI, MainDiv, MuiButton, Name, NameText, NavbarDiv, Para, PhotoAlbum, SecondDiv, Ul, ULdiv, VS } from './style'

import BoxImg11 from '../S-image/game1.png'
import BoxImg22 from '../S-image/game2.png'

//Albomimg
import Img1 from '../F-image/Image-1.png'
import Img2 from '../F-image/Image-2.png'
import Img3 from '../F-image/Image-3.png'
import Img4 from '../F-image/Image-4.png'
import Img5 from '../F-image/Image-5.png'
import Img6 from '../F-image/Image-6.png'




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
          <ButtonDiv>
            <MuiButton variant='outlined' >Записаться</MuiButton>
          </ButtonDiv>
      </Comands>

{/* ==================================================================== */}




    <PhotoAlbum>
      <CardText>Фото Галерея</CardText>
      <AllPhotoDiv>
        <ForstDiv>

          <Card1>
            <CardImg src={Img1} />
          </Card1>

          <Card2>
            <CardIn1>
              <CardImgIn1 src={Img2} /> 
            </CardIn1>

            <CardIn2>
              <CardImgIn2 src={Img3} /> 
              </CardIn2>
            </Card2>

            <Card3>
              <CardImg3 src={Img4} />
            </Card3>

            <Card4>

            <CardIn11>
              <CardImg11 src={Img5} />
            </CardIn11>

            <CardIn22>
                <CardImg22 src={Img6} />
            </CardIn22>
            
          </Card4>


          
        </ForstDiv>
        <SecondDiv></SecondDiv>
      </AllPhotoDiv>
    </PhotoAlbum>







    </MainDiv>
  )
}

export default Tournament