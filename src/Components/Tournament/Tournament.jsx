import { Box } from '@mui/material'
import React from 'react'
import { AllPhotoDiv, BotomDIv, Box1, Box2, BoxImg1, BoxImg2, Boxs, ButonsDiv, ButtonDiv, Card1, Card2, Card3, Card4, CardDiv1, CardDiv2, CardDiv3, CardDivImg2, CardDivImg3, CardDivIn1, CardDivIn2, CardDivInImg1, CardDivInImg2, CardImg, CardImg11, CardImg22, CardImg3, CardImgIn1, CardImgIn2, CardIn1, CardIn11, CardIn2, CardIn22, CardText, Comands, Conteyner1, Conteyner2, Data, ForstDiv, ForstInpDiv, GameNaem, GroupName, InpDiv, Input, InputDiv, LabelText, LabelVSInputDiv, LI, MainDiv, MuiButton, MuiButtons1, MuiButtons2, Name, NameText, NavbarDiv, Number, OneInpDiv, OneVSTwoDIv, Para, PhotoAlbum, RegisterText, SecondDiv, SecondInpDiv, Select1, SendButton, SendButtonDiv, Square, ThreeButtonDiv, TopDIv, TwoInpDiv, TwoInputDiv, Ul, ULdiv, VS } from './style'
import CardImageDiv from '../Tournament/CardImg/CardImg'


import BoxImg11 from '../S-image/game1.png'
import BoxImg22 from '../S-image/game2.png'

//Albomimg
// Forst Div image
import Img1 from '../F-image/Image-1.png'
import Img2 from '../F-image/Image-2.png'
import Img3 from '../F-image/Image-3.png'
import Img4 from '../F-image/Image-4.png'
import Img5 from '../F-image/Image-5.png'
import Img6 from '../F-image/Image-6.png'
// Second div image
import Img7 from '../F-image/Image-7.png'
import Img8 from '../F-image/Image-8.png'
import Img9 from '../F-image/Image-9.png'
import Img10 from '../F-image/Image-10.png'




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
        <CardImageDiv></CardImageDiv>
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
          {/* ======================================================== */}
          <SecondDiv>
            <CardDiv1>

              <CardDivIn1>
                <CardDivInImg1 src={Img7} />
              </CardDivIn1>

              <CardDivIn2>
                <CardDivInImg2 src={Img8} />
              </CardDivIn2>

            </CardDiv1>

            <CardDiv2>
              <CardDivImg2 src={Img9} />
            </CardDiv2>

            <CardDiv3>
              <CardDivImg3 src={Img10} />
            </CardDiv3>
          </SecondDiv>

        </AllPhotoDiv>

      </PhotoAlbum>


      {/* ======================================================================== */}


      <Square>
        <Boxs>
          <Number>+1300</Number>
          <GameNaem>Twitch потоки</GameNaem>
        </Boxs>
        <Boxs>
          <Number>+108</Number>
          <GameNaem>Стримеры</GameNaem>
        </Boxs>
        <Boxs>
          <Number>+1000</Number>
          <GameNaem>CS:GO</GameNaem>
        </Boxs>
        <Boxs>
          <Number>+202</Number>
          <GameNaem>Twitch потоки</GameNaem>
        </Boxs>
      </Square>


      {/* =============================================================== */}


      <InpDiv>
        <InputDiv>

          <TopDIv>
            <RegisterText>Регистрация</RegisterText>
            <ButonsDiv>
              <MuiButtons1 variant='outlined' >Один игрок</MuiButtons1>
              <MuiButtons2 variant='outlined'>Команда</MuiButtons2>
            </ButonsDiv>
          </TopDIv>

          <BotomDIv>

            <OneVSTwoDIv>
              <OneInpDiv>
                <LabelVSInputDiv >
                  <LabelText>Имя</LabelText>
                  <Input />
                </LabelVSInputDiv>

                <LabelVSInputDiv >
                  <LabelText>Фамилия</LabelText>
                  <Input />
                </LabelVSInputDiv>

                <LabelVSInputDiv >
                  <LabelText>Почта</LabelText>
                  <Input type="email" />
                </LabelVSInputDiv>

              </OneInpDiv>

              <TwoInpDiv>
                <TwoInputDiv>

                  <ForstInpDiv>
                    <LabelText>Опыт</LabelText>
                    <Input type="number" placeholder='От' />
                  </ForstInpDiv>

                  <SecondInpDiv>
                    <LabelText></LabelText>
                    <Input type="number" placeholder='До' />
                  </SecondInpDiv>

                </TwoInputDiv>

                <LabelVSInputDiv >
                  <LabelText>Направления</LabelText>
                  {/* <Input /> */}
                  <Select1 name="" id="">
                    <option value="">CS:GO</option>
                    <option value="">DOTA 2</option>
                    <option value="">R6 SEGA</option>
                    <option value="">PUBG</option>

                  </Select1>
                </LabelVSInputDiv>

                <LabelVSInputDiv >
                  <LabelText>Телефон</LabelText>
                  <Input />
                </LabelVSInputDiv>

              </TwoInpDiv>
            </OneVSTwoDIv>

            {/* /=================== */}

            <SendButtonDiv>
              <SendButton variant='contained'>Отправить</SendButton>
            </SendButtonDiv>

          </BotomDIv>

        </InputDiv>
      </InpDiv>


    </MainDiv>
  )
}

export default Tournament