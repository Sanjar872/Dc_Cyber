import React, { useEffect, useState } from 'react'
import { Container,Fut, Box,Div1,Brendlar,O_nas,Dota,
MyEmailOutlinedIcon,Input2,Sign,Con,Input,IMglar,Input1,Checkbo,
Text, Text2,MuiFacebook, MuiTelegram, MuiInstagram, MuiYouTube } from './style'


import Brand from '../S-image/brand.png'
import { FacebookOutlined, SettingsPowerRounded, SettingsSystemDaydreamOutlined } from '@mui/icons-material';
import axios from 'axios'


const Footer = () => {
  const [email, setEmail] = useState('')
  const [game, setGame] = useState([])

// function Shange() {
//   window.location.href = "https://ru-ru.facebook.com/";

// }
// function Shange2() {
//   window.location.href = "https://telegram.org/android?setln=ru";

// }
// function Shange3() {
//   window.location.href = "https://www.instagram.com/";

// }

// function Shange4(params) {
//   window.location.href = "https://www.youtube.com/results?search_query=dc+andijan"
// }


function DcSayt(params) {
  window.location = "https://www.gazeta.uz/ru/2020/05/22/digital-city/"
}

// Scrolling
const Scrolling = (value) => {
  window.scrollTo({
    top:value,
    behavior: 'smooth'
  })
}

// API concat
let formData = new FormData();
formData.append('email',email)

const Submit = () => {
  axios.post('http://159.65.207.213/api/email/',formData)
  .then((res)=>{
    console.log(res);
    setEmail('')
    SettingsPowerRounded()
  })
}

useEffect(() => {
  axios.get('http://159.65.207.213/api/game')
  .then(res=>{
    setGame(res.data)
    // console.log('Hello',res.data);
  })
}, [])


  return (
    <Container >
      <Box >
       
        <Text>
          <Brendlar>
            <img src={Brand} alt="" />
            <IMglar>

              <MuiFacebook onClick={()=>window.open('https://ru-ru.facebook.com/')}/>


                <MuiTelegram  onClick={()=>window.open('https://telegram.org/android?setln=ru')} />


                  <MuiInstagram   onClick={()=>window.open('https://www.instagram.com/')}/>



                <MuiYouTube   onClick={()=>window.open('https://www.youtube.com/results?search_query=dc+andijan')}/>


            </IMglar>
          </Brendlar>
          <O_nas>
            <ul>
              <li onClick={()=>Scrolling(0)}>Bizhaqimizda</li>
              <li onClick={()=>Scrolling(1850)}>Turnirlar</li>
              <li onClick={()=>Scrolling(700)}>Xisob</li>
              <li onClick={()=>Scrolling(3270)}>Rasmlar</li>
            </ul>
          </O_nas>
        </Text>
        
          <Text2>
              <Con>
                <Dota>
                  <ul>
                    {
                      game?.map((item,index)=>{
                        return(
                          <li key={index} onClick={()=>Scrolling(2300)}>{item.name}</li>
                        )
                      })
                    }
                  </ul>
                </Dota>
                  <Input>
                    <Sign>
                      <h3>Bizning xabarnomamizga obuna bo'ling!</h3>
                        <p>Eng so'nggi yangilanishlar va maxsus takliflarni olishni xohlaysizmi? Haftalik xabarnomamizni olish uchun quyida elektron pochtangizni kiriting.  </p>
                    </Sign>
                        <Div1>
                      <Input1 value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Your email' />
                      <MyEmailOutlinedIcon onClick={Submit}/>
                        </Div1>
                      <Checkbo>

                      <Input2 type="checkbox" name="" id="" />
                    <p>Men axborotnoma <span>shartlarini qabul qilaman</span></p>
                      </Checkbo>
                  
                  </Input>
                </Con>
          </Text2>
      </Box>
        <Fut>
          <p onClick={()=>window.open('https://www.gazeta.uz/ru/2020/05/22/digital-city/')}>Copyright by Digital City 2022</p>
          
        </Fut>
    </Container>
  )
}

export default Footer