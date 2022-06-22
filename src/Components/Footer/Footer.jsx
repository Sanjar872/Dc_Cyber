import React from 'react'
import { Container,Fut, Box,Div1,Brendlar,O_nas,Dota,
MyEmailOutlinedIcon,Input2,Sign,Con,Input,IMglar,Input1,Checkbo, 
Text, Text2 } from './style'

import Brand from '../S-image/brand.png'
import Facebook from '../S-image/Facebook.png'
import Telegram from '../S-image/la_telegram.png'
import instagram from '../S-image/instagram.png'
import youtube from '../S-image/youtube.png'


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
  window.location.href = "https://m.youtube.com/"
}


function DcSayt(params) {
  window.location = "https://www.gazeta.uz/ru/2020/05/22/digital-city/"
}
  return (
    <Container>
      <Box>
       
        <Text>
          <Brendlar>
            <img src={Brand} alt="" />
            <IMglar>
              <img onClick={Shange} src={Facebook} alt="" />
              <img onClick={Shange2} src={Telegram} alt="" />
              <img onClick={Shange3} src={instagram} alt="" />
              <img onClick={Shange4} src={youtube} alt="" />

            </IMglar>
          </Brendlar>
          <O_nas>
            <ul>
              <li>О нас</li>
              <li>Турниры</li>
              <li>Счёты</li>
              <li>Фото</li>
            </ul>
          </O_nas>
        </Text>
        
          <Text2>
              <Con>
                <Dota>
                  <ul>
                    <li>Dota 2</li>
                    <li>StarCraff 2</li>
                    <li>CS:GO</li>
                    <li>League of Legends</li>
                    <li>Fortnite</li>
                    <li>Rainbow 6 Siege</li>
                    <li>PUBG</li>

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