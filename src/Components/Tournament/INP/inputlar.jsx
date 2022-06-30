import React, { useState } from 'react'
import { AvatarDiv, AvatarImg, ChangeButton, Container, Infile, Inputs, Text } from './style'
import styles from '../INP/style/input.module.css'

//import Image
import AvatarImage from '../../S-image/Image-1.png'

const Inputlar = () => {
  const [Img, SettingImg] = useState('');
  const [ImgtoBackend, setImgtoBackend] = useState(null)

  const SEtImg = (e) => {
    const rasm = e.target.files[0]
    SettingImg(URL.createObjectURL(rasm))
  }

  return (
    <Container>
      {/* <AvatarDiv>
      <AvatarImg src={AvatarImage} alt='img' />
     </AvatarDiv>

     <Infile>
        <Text>Fayl yuklang</Text>
        <ChangeButton>Avatar yuklang</ChangeButton>
     </Infile> */}

      <div className="edit__img">
        <div className="img_preview">
          <img src={Img} alt="" />
        </div>
        <label for="img_upload" className="img__drop">
          <span>Fayl yuklang</span>
          <input
            type="file"
            onChange={(e) => SEtImg(e)}
            name=""
            hidden
            id="img_upload"
          />
          <p>Avatar yuklang</p>
        </label>
      </div>
    </Container>
  )
}

export default Inputlar