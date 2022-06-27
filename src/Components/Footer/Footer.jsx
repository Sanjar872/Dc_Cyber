import React from 'react'
import { Container,Fut, Box,Div1,Brendlar,O_nas,Dota,
MyEmailOutlinedIcon,Input2,Sign,Con,Input,IMglar,Input1,Checkbo
,FacebookOutlined1 ,
Text, Text2,Facebodiv,TelegraDiv ,Telegram1,IntagramDiv,IntagramIcons1,
YoutubeDiv,YouTubeIcon1 } from './style'


// import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Brand from '../S-image/brand.png'
// import Facebook from '../S-image/Facebook.png'
import Telegram from '../S-image/la_telegram.png'
import instagram from '../S-image/instagram.png'
import youtube from '../S-image/youtube.png'
import { FacebookOutlined } from '@mui/icons-material';
import FacebookIcon from '@mui/icons-material/Facebook';


const Footer = () => {

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

  return (
    <Container>
      <Box>
       
        <Text>
          <Brendlar>
            <img src={Brand} alt="" />
            <IMglar>
              <Facebodiv>
              <FacebookOutlined1 onClick={Shange}/>
              </Facebodiv>
              <TelegraDiv>
                <Telegram1 />
              </TelegraDiv>
              <IntagramDiv>
                  <IntagramIcons1/>
              </IntagramDiv>

              <YoutubeDiv>
                <YouTubeIcon1/>
              </YoutubeDiv>

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
                    <li onClick={()=>Scrolling(1850)}>Dota 2</li>
                    <li onClick={()=>Scrolling(1850)}>StarCraff 2</li>
                    <li onClick={()=>Scrolling(1850)}>CS:GO</li>
                    <li onClick={()=>Scrolling(1850)}>League of Legends</li>
                    <li onClick={()=>Scrolling(1850)}>Fortnite</li>
                    <li onClick={()=>Scrolling(1850)}>Rainbow 6 Siege</li>
                    <li onClick={()=>Scrolling(1850)}>PUBG</li>

                  </ul>
                </Dota>
                  <Input>
                    <Sign>
                      <h3>Sign up to our newsletter!</h3>
                        <p>Do you want to receve the latest updates and special affers? Enter your
                          email below to receive our weekly newsletter. </p>
                    </Sign>
                        <Div1>
                      <Input1 type="text" placeholder='Your email' />
                      <MyEmailOutlinedIcon/>
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