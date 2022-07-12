import React, { useEffect, useState } from 'react'
import { AllPhotoDiv, BotomDIv, Box1, Box2, BoxImg1,
  BoxImg2, Boxs, ButonsDiv, ButtonDiv, Card1, Card2, Card3,
  Card4, CardDiv1, CardDiv2, CardDiv3, CardDivImg2, CardDivImg3, 
  CardDivIn1, CardDivIn2, CardDivInImg1, CardDivInImg2, CardImg,
  CardImg11, CardImg22, CardImg3, CardImgIn1, CardImgIn2, CardIn1,
  CardIn11, CardIn2, CardIn22, CardText, Comands, Conteyner1, Conteyner2,
  Data, Edit__img, ForstDiv, ForstInpDiv, GameNaem, GroupName, H2, HR, Img_preview, Img__drop, InpDiv, Input, InputDiv,
  LabelText, LabelVSInputDiv, LI, MainDiv, MuiButton, MuiButtons1, MuiButtons2,
  Name, NameText, NavbarDiv, Number, OneInpDiv, OneVSTwoDIv, Para, PhotoAlbum,
  RegisterText, SecondDiv, SecondInpDiv, Select1, SendButton, SendButtonDiv, Square,
  ThreeButtonDiv, TopDIv, TwoInpDiv, TwoInputDiv, Ul, ULdiv, VS } from './style'


import Snackbar  from '../Snackbar/Snackbar'
import Inputlar from './INP/inputlar'
import CardImageDiv from '../Tournament/CardImg/CardImg'
import BoxImg11 from '../S-image/game1.png'

import BoxImg22 from '../S-image/game2.png'

import AvatarLogo from '../S-image/AvatartLogo.png'

//Albomimg
// Forst Div image
import Img11 from '../F-image/Image-1.png'
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
import { Apartment, Category, SettingsPowerRounded } from '@mui/icons-material'

const API = 'http://159.65.207.213/api/competition/'
const APIgame = 'http://159.65.207.213/api/game/'
const APInumber = 'http://159.65.207.213/api/number/'
const API1 = 'http://159.65.207.213/api/email/'


const Tournament = () => {
  
  
  //useStates
  const [data, setData] = useState([]) // 1
  const [category, setCatigory] = useState('Все')
  const [GameCategory, setGameCategory] = useState([])
  const [numberr, setNumberr] = useState([])
  const [Img, setImg] = useState("");

  //Snackbar sueState
  const [open1, setOpen1] = React.useState(false);

  //input rasm quyish
  const [Img1, SettingImg] = useState('');
  // const [ImgtoBackend, setImgtoBackend] = useState(null)

  const SEtImg = (e) => {
    const rasm = e.target.files[0]
    setImg(rasm)
    SettingImg(URL.createObjectURL(rasm))
  }



  useEffect(() => {
    axios.get(API)
      .then(res => {

        let Filtred = res.data.filter((item) => {
          if (item.game.name === category) {
            return item
          }
          if (category === 'All') {
            return item
          }
        })

        setData(Filtred)
        // console.log('Game', res.data);
      })

    //APIgame axios
    axios.get(APIgame)
    .then(res=>{
    setGameCategory(res.data)
    // console.log('GameCategory', res.data);
    })


    //APInumber axios
    axios.get(APInumber)
    .then(res=>{
      setNumberr(res.data)
    })

  }, [category,setCatigory])
  

  

//Player 1 One game useState

const [Isim, setIsim] = useState("");
const [Surname, setSurname] = useState("");
const [Email, setEmail] = useState("");
const [Opit, setOpit] = useState("");
const [To, setTo] = useState("");
const [Naprarvleniya, setNapravleniya] = useState(0);
const [Phone, setPhone] = useState("");


//Player 2 Game useState
const [Isim2, setIsim2] = useState("");
const [Surname2, setSurname2] = useState("");
const [Email2, setEmail2] = useState("");
const [Opit2, setOpit2] = useState("");
const [To2, setTo2] = useState("");
const [Naprarvleniya2, setNapravleniya2] = useState(0);
const [Phone2, setPhone2] = useState("");


const [catigory1, setcatigory1] = useState('onegame')

//Data API 1 User1___________________________
let DATAMAIN = new FormData()
DATAMAIN.append('player_type', 1)
DATAMAIN.append('name', Isim)
DATAMAIN.append('surname', Surname)
DATAMAIN.append('email', Email)
DATAMAIN.append('experience_from', Opit)
DATAMAIN.append('experience_to', To)
DATAMAIN.append('game', Naprarvleniya)
DATAMAIN.append('phone', Phone)
DATAMAIN.append('img',Img)
DATAMAIN.append('team_member',1)

//Data API 1 User2__________________________

let DATAMAIN2 = new FormData()
DATAMAIN2.append('player_type',2)
DATAMAIN2.append('name',Isim2)
DATAMAIN2.append('email',Email2)
DATAMAIN2.append('experience_from', Opit2)
DATAMAIN2.append('experience_to',To2)
DATAMAIN2.append('game',Naprarvleniya2)
DATAMAIN2.append('phone',Phone2)
DATAMAIN2.append('img',Img)
DATAMAIN2.append('team_member',Surname2)

const OneGameSubmit = () => {
// console.log(Img)
    try {
      axios.post('http://159.65.207.213/api/user/', DATAMAIN)
        .then((res) => {
          console.log(res);
          if (!res.data.error) {
            setOpen1(true)
          }          
          setIsim('')
          setSurname('')
          setEmail('')
          setOpit('')
          setTo('')
          setPhone('')
        })
    } catch (err) {
      console.log(err);
  
    }



//_________________________________________________________________________
  console.log(Img)
  try {
    axios.post('http://159.65.207.213/api/user/', DATAMAIN2)
      .then((res) => {
        console.log(res);
        if (!res.data.error) {
          setOpen1(true)
        }          
        setIsim2('')
        setSurname2('')
        setEmail2('')
        setOpit2('')
        setTo2('')
        setPhone2('')
      })
  } catch (err) {
    console.log(err);
  }


  
}

  //Scrolling
  const Scrolling = (value)=> {
    window.scrollTo({
      top:value,
      behavior: 'smooth'
    })
  }


return (
  <MainDiv>
    <NavbarDiv>
        <NameText data-aos="zoom-in">
          <Name>Eng so'nggi turnirlar</Name>
        </NameText>
          <ULdiv>
            <Ul data-aos="zoom-in">
              <LI onClick={()=>setCatigory('All')}>All</LI>
              {
                GameCategory?.map((itemm,indexx)=>{
                  return(
                    <LI key={indexx} onClick={()=>setCatigory(itemm.name)}>{itemm.name}</LI>
                  )
                })
              }
            </Ul>
          </ULdiv>
    </NavbarDiv>

{/* ============ Comands VS start ============================================== */}

  <Comands>
    {
      data?.map((item, index) => {
        return (
          <Para key={index}>
            <Conteyner1 data-aos="zoom-in" >

              <Box1>
                <BoxImg1 src={`http://159.65.207.213${item.user1.img}`} />
              </Box1>
                <VS>VS</VS>
              <Box2>
                <BoxImg1 src={`http://159.65.207.213${item.user2.img}`} />
              </Box2>

            </Conteyner1>

            <Conteyner2 data-aos="zoom-in" >
              <GroupName> <H2>{item.user1.name}</H2> <HR/> <H2>{item.user2.name}</H2> <H2>{item.game.name}</H2> </GroupName>
              <Data>{item.data}</Data>
            </Conteyner2>

          </Para>
        )
      })
    }
      <ButtonDiv>
        <MuiButton variant='outlined' onClick={()=>Scrolling(4600)}>Ro'yxatdan o'tish</MuiButton>
      </ButtonDiv>
  </Comands>

{/* ==================================================================== */}

  <PhotoAlbum>
    
    <CardText>Rasmlar Galereyasi</CardText>
      <CardImageDiv></CardImageDiv>

        <AllPhotoDiv>
          <ForstDiv>

            <Card1>
              <CardImg src={Img11} />
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
{/* ====================== Second Div start ===================================================*/}
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


{/* ========================= Card Number page Start ======================================== */}


  <Square div data-aos="zoom-in">
    {
      numberr?.map((item3,index3)=>{
        return(
          <Boxs key={index3}>
            <Number>+{item3.number}</Number>
            <GameNaem>{item3.text}</GameNaem>
          </Boxs>
        )
      })
    }
  </Square>


{/* ========================= Register Page start =========================================== */}


  <InpDiv >
    <InputDiv>

      <TopDIv>
        <RegisterText>Ro'yxatdan o'tish</RegisterText>
          <ButonsDiv>
            <MuiButtons1 onClick={() => setcatigory1('onegame')} variant='outlined' style={{
            backgroundColor: catigory1 === 'onegame' ? '#724edf' : '#200A50'}}>Bitta o'yinchi</MuiButtons1>

            <MuiButtons2 onClick={() => setcatigory1('command')} variant='outlined' style={{ backgroundColor: catigory1 === 'command' ? '#724edf ' : '#200A50' }}>Jamoa</MuiButtons2>
          </ButonsDiv>
      </TopDIv>
      {/* <Inputlar/> */}
      <Edit__img>
        <Img_preview>
          {
            Img === '' ?
            <img src={AvatarLogo} alt="" />

            :

            <img src={Img1} alt="" />
          }
        </Img_preview>
        <Img__drop for="img_upload" className="img__drop">
          <span>Fayl yuklang</span>
          <input
            type="file"
            onChange={(e) => SEtImg(e)}
            name=""
            hidden
            id="img_upload"
          />
          <p>Avatar yuklang</p>
          {/* onChange={(e) => setEmail(e.target.value)} */}
        </Img__drop>
      </Edit__img>
          <BotomDIv>
            {
              catigory1 === 'onegame' ?
                <OneVSTwoDIv>
                  <OneInpDiv>
                    <LabelVSInputDiv >
                      <LabelText>Ism</LabelText>
                      <Input type="text" value={Isim} onChange={(e) => setIsim(e.target.value)} />
                      {/* <Input type="text" name='name' onChange={} */}
                    </LabelVSInputDiv>

                    <LabelVSInputDiv >
                      <LabelText>Familiya</LabelText>
                      <Input type="text" value={Surname} onChange={(e) => setSurname(e.target.value)} />
                    </LabelVSInputDiv>

                    <LabelVSInputDiv >
                      <LabelText>Pochta</LabelText>
                      <Input type="email" value={Email} onChange={(e) => setEmail(e.target.value)} />
                    </LabelVSInputDiv>

                  </OneInpDiv>

                  <TwoInpDiv>
                    <TwoInputDiv>

                      <ForstInpDiv>
                        <LabelText>Tajriba</LabelText>
                        <Input type="number" placeholder='Dan' value={Opit} onChange={(e) => setOpit(e.target.value)} />
                      </ForstInpDiv>

                      <SecondInpDiv>
                        <LabelText></LabelText>
                        <Input type="number" placeholder='Gacha' value={To} onChange={(e) => setTo(e.target.value)} />
                      </SecondInpDiv>

                    </TwoInputDiv>

                    <LabelVSInputDiv >
                      <LabelText>Yo'nalishlar</LabelText>
                      {/* <Input /> */}
                      <Select1 onChange={(e) => setNapravleniya(e.target.value)} name="" id="">
                        {
                          GameCategory?.map((itim1,index1)=>{
                            return(
                        <option key={index1} value={itim1.id}>{itim1.name}</option>

                            )
                          })
                        }
                      </Select1>
                    </LabelVSInputDiv>

                    <LabelVSInputDiv >
                      <LabelText>Telefon</LabelText>
                      <Input value={Phone} onChange={(e) => setPhone(e.target.value)} />
                    </LabelVSInputDiv>

                  </TwoInpDiv>
              </OneVSTwoDIv>

                :

              <OneVSTwoDIv>
                <OneInpDiv>
                  <LabelVSInputDiv >
                    <LabelText>Nomi</LabelText>
                    <Input value={Isim2} onChange={(e) => setIsim2(e.target.value)}/>
                  </LabelVSInputDiv>

                  <LabelVSInputDiv >
                    <LabelText>O'yinchilar soni</LabelText>
                    <Input value={Surname2} onChange={(e) => setSurname2(e.target.value)} />
                  </LabelVSInputDiv>

                  <LabelVSInputDiv >
                    <LabelText>Yetakchi pochtasi</LabelText>
                    <Input type="email" value={Email2} onChange={(e) => setEmail2(e.target.value)} />
                  </LabelVSInputDiv>

                </OneInpDiv>

                  <TwoInpDiv>
                    <TwoInputDiv>

                      <ForstInpDiv>
                        <LabelText>Tajriba</LabelText>
                        <Input type="number" placeholder='Dan' value={Opit2} onChange={(e) => setOpit2(e.target.value)} />
                      </ForstInpDiv>

                      <SecondInpDiv>
                        <LabelText></LabelText>
                        <Input type="number" placeholder='Gacha'  value={To2} onChange={(e) => setTo2(e.target.value)} />
                      </SecondInpDiv>

                    </TwoInputDiv>

                    <LabelVSInputDiv >
                      <LabelText>Yo'nalishlar</LabelText>
                      {/* <Input /> */}
                      <Select1 name="" id="" onChange={(e) => setNapravleniya2(e.target.value)}>

                      {
                          GameCategory?.map((itim1,index1)=>{
                            return(
                        <option key={index1} value={itim1.id}>{itim1.name}</option>

                            )
                          })
                      }

                      </Select1>
                    </LabelVSInputDiv>

                    <LabelVSInputDiv >
                      <LabelText>Yetakchining Telefon raqami</LabelText>
                      <Input value={Phone2} onChange={(e) => setPhone2(e.target.value)} />
                    </LabelVSInputDiv>

                  </TwoInpDiv>
                </OneVSTwoDIv>
          }

          <SendButtonDiv>
             <SendButton variant='contained' onClick={OneGameSubmit}>Yuborish</SendButton>
          </SendButtonDiv>

        </BotomDIv>
    </InputDiv>
  </InpDiv>


  <Snackbar open1={open1} setOpen1={setOpen1} />

    </MainDiv>
  )
}

export default Tournament
