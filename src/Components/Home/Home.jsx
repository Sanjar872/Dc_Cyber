import React from 'react'
import { AllcardDIv, Bio, CardDiv, Image, InfoCard, MainDiv, Name, Paragraf, TextDiv } from './style'

//image
import RoundImg1 from './../S-image/Image-1.png'
import RoundImg2 from './../S-image/Image-2.png'
import RoundImg3 from './../S-image/Image-3.png'

const Home = () => {
  return (
    <MainDiv>
      <TextDiv>
        <Bio>Digital City — профессиональная игровая организация, созданная в 2019 году. Наша цель — объединить самых талантливых киберспортсменов со всего мира.</Bio>
      </TextDiv>
      <CardDiv>

        <InfoCard>
          <Image src={RoundImg1} />
          <Name>Twitch потоки</Name>
          <Paragraf>Смотрите новые трансляции каждый день от наших лучших игроков и создателей контента.</Paragraf>
        </InfoCard>

        <InfoCard>
        <Image src={RoundImg2} />
        <Name>Новости киберспорта</Name>
        <Paragraf>Получайте последние новости, обновления и события из мира киберспорта.</Paragraf>
        </InfoCard>

        <InfoCard>
        <Image src={RoundImg3} />
        <Name>Игровые турниры</Name>
        <Paragraf>Узнайтеw больше о международных и местных игровых турнирах.</Paragraf>
        </InfoCard>

      </CardDiv>
    </MainDiv>
  )
}

export default Home