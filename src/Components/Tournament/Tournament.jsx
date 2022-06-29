import React, { useEffect, useState } from 'react'
import { AllPhotoDiv, BotomDIv, Box1, Box2, BoxImg1,
   BoxImg2, Boxs, ButonsDiv, ButtonDiv, Card1, Card2, Card3,
    Card4, CardDiv1, CardDiv2, CardDiv3, CardDivImg2, CardDivImg3, 
    CardDivIn1, CardDivIn2, CardDivInImg1, CardDivInImg2, CardImg, CardImg11, CardImg22, CardImg3, CardImgIn1, CardImgIn2, CardIn1, CardIn11, CardIn2, CardIn22, CardText, Comands, Conteyner1, Conteyner2, Data, ForstDiv, ForstInpDiv, GameNaem, GroupName, InpDiv, Input, InputDiv, LabelText, LabelVSInputDiv, LI, MainDiv, MuiButton, MuiButtons1, MuiButtons2, Name, NameText, NavbarDiv, Number, OneInpDiv, OneVSTwoDIv, Para, PhotoAlbum, RegisterText, SecondDiv, SecondInpDiv, Select1, SendButton, SendButtonDiv, Square, ThreeButtonDiv, TopDIv, TwoInpDiv, TwoInputDiv, Ul, ULdiv, VS } from './style'


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
import axios from 'axios'
import { Category } from '@mui/icons-material'

const API = 'http://159.65.207.213/api/competition/'
const APIgame = 'http://159.65.207.213/api/game/'

const API1 = 'http://159.65.207.213/api/email/'

const Tournament = () => {


  //useStates
  const [data, setData] = useState([]) // 1
  const [category, setCatigory] = useState('Все')
  const [GameCategory, setGameCategory] = useState([])

  useEffect(() => {
    axios.get(API)
      .then(res => {

        let Filtred = res.data.filter((item) => {
          if (item.game.name === category) {
            return item
          }
          if (category === 'Все') {
            return item
          }
        })


    setData(Filtred)
    // console.log('Game', res.data);
   })


  axios.get(APIgame)
  .then(res=>{
    setGameCategory(res.data)
    console.log('GameCategory', res.data);
  })

  }, [category,setCatigory])
  

        // setData(Filtred)
  //       console.log('Game', res.data);
  //     })
  // }, [category, setCatigory])



  const [Isim, setIsim] = useState("");
  const [Surname, setSurname] = useState("");
  const [Email, setEmail] = useState("");
  const [Opit, setOpit] = useState("");
  const [To, setTo] = useState("");
  const [Naprarvleniya, setNapravleniya] = useState("");
  const [Phone, setPhone] = useState("");


  // console.log();
  const [catigory1, setcatigory1] = useState('onegame')
  // const [data1, setData1] = useState([])

  let DATAMAIN = new FormData()
  DATAMAIN.append('player_type', Isim)
  DATAMAIN.append('name', Isim)
  DATAMAIN.append('surname', Surname)
  DATAMAIN.append('email', Email)
  DATAMAIN.append('experience_from', Opit)
  DATAMAIN.append('experience_to', To)
  DATAMAIN.append('game', Naprarvleniya)
  DATAMAIN.append('phone', Phone)


  const OneGameSubmit = () => {
    try {
      axios.post('http://159.65.207.213/api/user/', DATAMAIN)
        .then((res) => {
          console.log(res);

        })
    } catch (err) {
      console.log(err);
    }
  }


  return (
    <MainDiv>
      <NavbarDiv>
        <NameText>
          <Name>Последние турниры</Name>
        </NameText>
        <ULdiv>
          <Ul>

          <LI onClick={()=>setCatigory('Все')}>Все</LI>

          {
            GameCategory?.map((itemm,indexx)=>{
              return(
                <LI onClick={()=>setCatigory(itemm.name)}>{itemm.name}</LI>
              )
            })
          }
          </Ul>
        </ULdiv>
      </NavbarDiv>

      {/* ================================================= */}

      <Comands>
        {
          data?.map((item, index) => {
            return (
              <Para key={index}>
                <Conteyner1>
                  <Box1>
                    <BoxImg1 src={`http://159.65.207.213${item.user1.img}`} />
                  </Box1>
                  <VS>VS</VS>
                  <Box2>
                    <BoxImg1 src={`http://159.65.207.213${item.user2.img}`} />
                  </Box2>
                </Conteyner1>

                <Conteyner2>
                  <GroupName> <h3>{item.user1.name}</h3> - <h3>{item.user2.name}</h3> <h3>{item.game.name}</h3> </GroupName>
                  <Data>{item.data}</Data>
                </Conteyner2>
              </Para>
            )
          })
        }

        {/* ================================================================= */}

        {/* <Para>
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
            <GroupName>Oldschoolband - Oldchoolband Dota 2</GroupName>
            <Data>03 Марта 2022  13:20</Data>
          </Conteyner2>
        </Para> */}

        {/* ========================================================= */}

        {/* <Para>
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
            <GroupName>Oldschoolband - Oldchoolband Dota 2</GroupName>
            <Data>03 Марта 2022  13:20</Data>
          </Conteyner2>
        </Para> */}

        {/* ============================================================== */}

        {/* <Para>
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
            <GroupName>Oldschoolband - Oldchoolband Dota 2</GroupName>
            <Data>03 Марта 2022  13:20</Data>
          </Conteyner2>
        </Para> */}

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
              <MuiButtons1 onClick={() => setcatigory1('onegame')} variant='outlined' style={{
                backgroundColor: catigory1 === 'onegame' ? '#724edf' : '#200A50'


              }}
              >Один игрок</MuiButtons1>

              <MuiButtons2 onClick={() => setcatigory1('command')} variant='outlined' style={{ backgroundColor: catigory1 === 'command' ? '#724edf ' : '#200A50' }}



              >Команда</MuiButtons2>
            </ButonsDiv>
          </TopDIv>

          <BotomDIv>

            {
              catigory1 === 'onegame' ?
                <OneVSTwoDIv>
                  <OneInpDiv>
                    <LabelVSInputDiv >
                      <LabelText>Имя</LabelText>
                      <Input type="text" onChange={(e) => setIsim(e.target.value)} />
                      {/* <Input type="text" name='name' onChange={} */}
                    </LabelVSInputDiv>

                    <LabelVSInputDiv >
                      <LabelText>Фамилия</LabelText>
                      <Input type="text" onChange={(e) => setSurname(e.target.value)} />
                    </LabelVSInputDiv>

                    <LabelVSInputDiv >
                      <LabelText>Почта</LabelText>
                      <Input type="email" onChange={(e) => setEmail(e.target.value)} />
                    </LabelVSInputDiv>

                  </OneInpDiv>

                  <TwoInpDiv>
                    <TwoInputDiv>

                      <ForstInpDiv>
                        <LabelText>Опыт</LabelText>
                        <Input type="number" placeholder='От' onChange={(e) => setOpit(e.target.value)} />
                      </ForstInpDiv>

                      <SecondInpDiv>
                        <LabelText></LabelText>
                        <Input type="number" placeholder='До' onChange={(e) => setTo(e.target.value)} />
                      </SecondInpDiv>

                    </TwoInputDiv>

                    <LabelVSInputDiv >
                      <LabelText>Направления</LabelText>
                      {/* <Input /> */}
                      <Select1 onChange={(e) => setNapravleniya(e.target.value)} name="" id="">
                        {
                          GameCategory?.map((itim1,index1)=>{
                            return(
                        <option value="">{itim1.name}</option>

                            )
                          })
                        }

                        {/* <option value="">DOTA 2</option>
                        <option value="">R6 SEGA</option>
                        <option value="">PUBG</option> */}

                      </Select1>
                    </LabelVSInputDiv>

                    <LabelVSInputDiv >
                      <LabelText>Телефон</LabelText>
                      <Input onChange={(e) => setPhone(e.target.value)} />
                    </LabelVSInputDiv>

                  </TwoInpDiv>
                </OneVSTwoDIv>



                :



                <OneVSTwoDIv>
                  <OneInpDiv>
                    <LabelVSInputDiv >
                      <LabelText>Названия</LabelText>
                      <Input />
                    </LabelVSInputDiv>

                    <LabelVSInputDiv >
                      <LabelText>Число игроков</LabelText>
                      <Input />
                    </LabelVSInputDiv>

                    <LabelVSInputDiv >
                      <LabelText>Почта Лидера</LabelText>
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
                      <LabelText>Телефонn Лидера</LabelText>
                      <Input />
                    </LabelVSInputDiv>

                  </TwoInpDiv>
                </OneVSTwoDIv>
            }

            {/* /=================== */}

            <SendButtonDiv>
              <SendButton variant='contained' onClick={OneGameSubmit}>Отправить</SendButton>
            </SendButtonDiv>

          </BotomDIv>

        </InputDiv>
      </InpDiv>


    </MainDiv>
  )
}

export default Tournament
