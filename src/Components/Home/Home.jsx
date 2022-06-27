import React, { useEffect, useState } from 'react'
import { AllcardDIv, Bio, CardDiv, Image, InfoCard, MainDiv, Name, Paragraf, TextDiv } from './style'
import axios from 'axios'
//image
// import RoundImg1 from './../S-image/Image-1.png'
// import RoundImg2 from './../S-image/Image-2.png'
// import RoundImg3 from './../S-image/Image-3.png'



const API = "http://159.65.207.213/api/blog/"



const Home = () => {
  
  const [data, setData] = useState([])
  
  useEffect(() => {
        axios.get(API)
        .then(res=> {
          setData(res.data)
  
          console.log(res.data);
        })
  }, [])



  return (
    <MainDiv>
      <TextDiv>
        <Bio>Digital City — профессиональная игровая организация, созданная в 2019 году. Наша цель — объединить самых талантливых киберспортсменов со всего мира.</Bio>
      </TextDiv>
      <CardDiv>

      {
        data?.map((item,index)=>{
          return (
            <InfoCard key={index}>
            <Image src={`http://159.65.207.213${item.image}`} />
            <Name>{item.title}</Name>
            <Paragraf>{item.text}</Paragraf>
          </InfoCard>
          )
        })
      }

        {/* <InfoCard>
        <Image src={RoundImg2} />
        <Name>Новости киберспорта</Name>
        <Paragraf>Получайте последние новости, обновления и события из мира киберспорта.</Paragraf>
        </InfoCard>

        <InfoCard>
        <Image src={RoundImg3} />
        <Name>Игровые турниры</Name>
        <Paragraf>Узнайтеw больше о международных и местных игровых турнирах.</Paragraf>
        </InfoCard> */}

      </CardDiv>
    </MainDiv>
  )
}

export default Home