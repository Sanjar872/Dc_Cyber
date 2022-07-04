import React, { useEffect, useState } from 'react'
import { Container,Fut, Box,Div1,Brendlar,O_nas,Dota,
MyEmailOutlinedIcon,Input2,Sign,Con,Input,IMglar,Input1,Checkbo
,FacebookOutlined1 ,
Text, Text2,Facebodiv,TelegraDiv ,Telegram1,IntagramDiv,IntagramIcons1,
YoutubeDiv,YouTubeIcon1, MuiFacebook, MuiTelegram, MuiInstagram, MuiYouTube } from './style'


// import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Brand from '../S-image/brand.png'
// import Facebook from '../S-image/Facebook.png'
import Telegram from '../S-image/la_telegram.png'
import instagram from '../S-image/instagram.png'
import youtube from '../S-image/youtube.png'
import { FacebookOutlined, SettingsPowerRounded, SettingsSystemDaydreamOutlined } from '@mui/icons-material';
import FacebookIcon from '@mui/icons-material/Facebook';
import axios from 'axios'


const Footer = () => {
  const [email, setEmail] = useState('')
  const [game, setGame] = useState([])

function Shange() {
  window.location.href = "https://ru-ru.facebook.com/";

}
function Shange2() {
  window.location.href = "https://telegram.org/android?setln=ru";

}
function Shange3() {
  window.location.href = "https://www.instagram.com/";

}

function Shange4(params) {
  window.location.href = "https://www.youtube.com/results?search_query=dc+andijan"
}


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
    // SettingsPowerRounded()
  })
}

useEffect(() => {
  axios.get('http://159.65.207.213/api/game')
  .then(res=>{
    setGame(res.data)
    console.log('Hello',res.data);
  })
}, [])


  return (
    <Container >
      <Box >
       
        <Text>
          <Brendlar>
            <img src={Brand} alt="" />
            <IMglar>

              <MuiFacebook onClick={Shange}/>


                <MuiTelegram  onClick={Shange2} />


                  <MuiInstagram   onClick={Shange3}/>



                <MuiYouTube   onClick={Shange4}/>


            </IMglar>
          </Brendlar>
          <O_nas>
            <ul>
              <li onClick={()=>Scrolling(0)}>     О нас</li>
              <li onClick={()=>Scrolling(1850)}>  Турниры</li>
              <li onClick={()=>Scrolling(700)}>   Счёты</li>
              <li onClick={()=>Scrolling(3270)}>  Фото</li>
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
                      <h3>Sign up to our newsletter!</h3>
                        <p>Do you want to receve the latest updates and special affers? Enter your
                          email below to receive our weekly newsletter. </p>
                    </Sign>
                        <Div1>
                      <Input1 value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Your email' />
                      <MyEmailOutlinedIcon onClick={Submit}/>
                        </Div1>
                      <Checkbo>

                      <Input2 type="checkbox" name="" id="" />
                    <p>I accept <span> newsletter terms</span></p>
                      </Checkbo>
                  
                  </Input>
                </Con>
          </Text2>
      </Box>
        <Fut>
          <p onClick={DcSayt}>Copyright by Digital City 2022</p>
        </Fut>
    </Container>
  )
}

export default Footer