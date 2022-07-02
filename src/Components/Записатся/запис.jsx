import React from 'react'
import { BO, Container } from './style'

const запис = () => {

  const Scrolling = (value)=>{
    window.scrollTo({
      top:value,
      behavior:'smooth'
    })
  }


  return (
    <Container>
      <BO data-aos="fade-up"
     data-aos-duration="1000">
        <h2>ПРИШЛО ВРЕМЯ ПОГРУЖАТЬСЯ В МИР КИБЕРСПОРТА С DIGITAL CITY-SPORT! СТАНЬТЕ ЧАСТЬЮ НАШЕЙ КОМАНДЫ СЕГОДНЯ</h2>
        <button onClick={()=>Scrolling(4600)} >Записаться</button>

      </BO>
    </Container>
  )
}

export default запис