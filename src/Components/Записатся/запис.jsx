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
        <h2>DIGITAL CITY-SPORT BILAN ESPORT OLAMIGA SHONGISH VAQTI BULDI! BUGUN JAMOAMIZ BILAN BIRGA BO'LING</h2>
        <button onClick={()=>Scrolling(4600)} >Ro'yxatdan o'tish</button>

      </BO>
    </Container>
  )
}

export default запис