import React from 'react'
import { AvatarDiv, AvatarImg, ChangeButton, Container,Infile,Inputs, Text } from './style'
import styles from '../INP/style/input.module.css'

//import Image
import AvatarImage from '../../S-image/Image-1.png'

const inputlar = () => {
  return (
    <Container>
     <AvatarDiv>
      <AvatarImg src={AvatarImage} alt='img' />
     </AvatarDiv>

     <Infile>
        <Text>Fayl yuklang</Text>
        <ChangeButton>Avatar yuklang</ChangeButton>
     </Infile>
    </Container>
  )
}

export default inputlar