import React, { useEffect, useState } from 'react'
import { AllcardDIv, Bio, CardDiv, Image, InfoCard, MainDiv, Name, Paragraf, TextDiv } from './style'
import axios from 'axios'


const API = "http://159.65.207.213/api/blog/"


const Home = () => {
  
  const [data, setData] = useState([])
  
  useEffect(() => {
        axios.get(API)
        .then(res=> {
          setData(res.data)
  
          // console.log(res.data);
        })
  }, [])



  return (
    <MainDiv>
      <TextDiv data-aos="fade-down" data-aos-duration="1000">
        <Bio>Digital City — профессиональная игровая организация, созданная в 2019 году. Наша цель — объединить самых талантливых киберспортсменов со всего мира.</Bio>
      </TextDiv>
      <CardDiv>

      {
        data?.map((item,index)=>{
          return (
            <InfoCard data-aos="zoom-in" key={index}>
            <Image src={`http://159.65.207.213${item.image}`} />
            <Name>{item.title}</Name>
            <Paragraf>{item.text}</Paragraf>
          </InfoCard>
          )
        })
      }
      </CardDiv>
    </MainDiv>
  )
}

export default Home