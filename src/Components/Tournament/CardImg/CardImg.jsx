import React from 'react'
import { CardDiv, Image, MainDiv } from './style'

//image Import 
import Img1 from '../../F-image/Image-1.png'
import Img2 from '../../F-image/Image-2.png'
import Img3 from '../../F-image/Image-3.png'
import Img4 from '../../F-image/Image-4.png'
import Img5 from '../../F-image/Image-5.png'
import Img6 from '../../F-image/Image-6.png'
import Img7 from '../../F-image/Image-7.png'
import Img8 from '../../F-image/Image-8.png'
import Img9 from '../../F-image/Image-9.png'
import Img10 from '../../F-image/Image-10.png'



const CardImg = () => {
  return (
    <MainDiv>
        <CardDiv>
            <Image src={Img1} />
        </CardDiv>

        <CardDiv>
            <Image src={Img2} />
        </CardDiv>

        <CardDiv>
            <Image src={Img3} />
        </CardDiv>

        <CardDiv>
            <Image src={Img4} />
        </CardDiv>

        <CardDiv>
            <Image src={Img5} />
        </CardDiv>

        <CardDiv>
            <Image src={Img6} />
        </CardDiv>

        <CardDiv>
            <Image src={Img7} />
        </CardDiv>

        <CardDiv>
            <Image src={Img8} />
        </CardDiv>

        <CardDiv>
            <Image src={Img9} />
        </CardDiv>

        <CardDiv>
            <Image src={Img10} />
        </CardDiv>
    </MainDiv>
  )
}

export default CardImg